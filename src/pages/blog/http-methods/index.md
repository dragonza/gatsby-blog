---
title: 'HTTP Methods and when to use them'
description: HTTP Methods and when to use them
date: '2020-04-11'
tags: ['http', 'fundamentals', 'restapi']
---

HTTP Methods are actions you would like to perform on the server. They are part of HTTP request.

- GET
- POST
- PUT
- DELETE
- HEAD
- PATCH
- OPTIONS
- CONNECT

## GET method
This is one of the most common methods used in websites. It is used to request data from a specified resource. 
GET requests are considered safe and idempotent as they only read the data from the server and produces the same result regardless of how many times they gets called.

GET requests should only be used to get data. Since they can be bookmarked and remain in browser history, it should never be used to deal with any sensitive data.
GET requests can be cached and  have length restrictions.

Example: to get a list of shirts or users
```
GET /shirts
GET https://example.com/shirts
```
## POST method
POST is used to send data to update/create to a resource. However, POST is *non-idempotent*. The data sent to the server is stored at the request body.

POST requests are not cached and have no length restrictions on data.

Example

```
POST /test/demo_form.php HTTP/1.1
Host: example.com
name1=value1&name2=value2
```

## PUT method
PUT is also one of the most common HTTP methods.
It is used to update/create data to a resource. [PUT requests are idempotent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT), which means calling it once or more will produce the same result. 

Example 
```
PUT /blogs/1 HTTP/1.1
Host: example.com
name1=value1
```

### When to use PUT and POST
The difference between PUT and POST requests is stated in the [RFC 2616 §9.5ff]()

> The fundamental difference between the POST and PUT requests is reflected 
> in the different meaning of the Request-URI. The URI in a POST request identifies 
> the resource that will handle the enclosed entity. 
> That resource might be a data-accepting process, a gateway to some other protocol, or a 
> separate entity that accepts annotations. 
> In contrast, the URI in a PUT request identifies the entity enclosed with the request -- the user agent knows what URI is intended and the server MUST NOT attempt to apply the request to some other resource. If the server desires that the request be applied to a different URI,

In other words, `POST` is used to create/update a resource if you do not know the exact specified URI of where the new resource should locate. 
For example, if you want to create a user, you may send a POST request to `/users/register` and the server will create user object based on the data in the request body. 
That is because you don't know the exact URL to call for creating a user.
Remember, POST requests are non-idempotent, so making a POST request twice on the same URI would create two resources. 

On the other hand, `PUT` should be used to create/update to a resource to a particular URI that is known by client.
For example, PUT request to `/users/1/blog/2/comments/2` to modify a user's comment with id 2 on a blog post (assumed that 2 is the id in that URI).


## DELETE method
`DELETE` method will delete resource at a particular URI. It is safe and idempotent. 

## HEAD method
HEAD is pretty much the same as GET but with an exception that it does not contain the response body.
The common use is to check whether a GET request will return before actually sending one to the server.

Example:
```
DELETE /file.html HTTP/1.1 
```
## PATCH method
PATCH requests are similar to PUT,
but it only applied partial modification to a resource. 
This means that the request body should only contain a partial data to modify a 
resource instead of a complete one. Besides, PATCH request is *non-idempotent*

## OPTIONS method
`OPTIONS` method shows the communication options for the target resource.

Example:
```
OPTIONS /index.html HTTP/1.1
OPTIONS * HTTP/1.1
```

A response sample would contain `allow` header:

```
HTTP/1.1 204 No Content
Allow: OPTIONS, GET, HEAD, POST
Cache-Control: max-age=604800
Date: Thu, 13 Oct 2016 11:45:00 GMT
Expires: Thu, 20 Oct 2016 11:45:00 GMT
Server: EOS (lax004/2813)
x-ec-custom-error: 1
```
(source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS)

## CONNECT

`CONNECT` method creates two-way communication with the resource. This is a less common method. It is not safe and idempotent.

## References

- https://tools.ietf.org/html/rfc7231#section-4.3.4
- https://stackoverflow.com/questions/630453/put-vs-post-in-rest
- https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods