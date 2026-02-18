# Node.js + Express + TypeScript mock server

This project demonstrates how you can build your own mock server with custom endpoints, that allows you to quickly set up REST API endpoints based on a JSON configuration.

This mock-server can be used for practicing API testing, both manually (Postman, curl, etc.) and automation.

---

## Goals

- Practice manual REST API testing
- Practice automated API testing
- Test handling of:
  Different HTTP methods (GET, POST, PUT, PATCH, DELETE)
- Various HTTP status codes
- Successful and error responses
- Quickly create and modify mock endpoints by changing mocks.json file

---

## Technologies Used

- **TypeScript**
- **Node.js**
- **Express**
- **nodemon** (for real-time server reload during development)

---

## Project Structure

<pre>
project-root/
│
├── src/
│   ├── mocks.json               # Mock endpoints data
│   └── server.ts                # Express server
│
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
</pre>

---

## Installation
1. First clone the repository
2. Then execute in the command line from project root:
* ```npm install```

---

## How to Run the Server
1. Start the server:
* ```npm run nodemon```
2. Base URL:
* ```http://localhost:3000/```
3. To stop the server:
* ```CTRL + C in the command line```

---

## Features

* The server runs on port 3000 by default
* Cache is disabled via headers
* Mock endpoints are fully configurable via mocks.json
* You can modify or add new endpoints in mocks.json as needed
* Handles common REST methods: GET, POST, PUT, PATCH, DELETE
* Pre-configured example endpoints for: Countries (/usa, /gb, /germany)
* Standard HTTP error responses (/bad-request, /unauthorized, /forbidden, /not-found, etc.)

---

## Available Endpoints (Default)
<pre>
Method	Path	                      Description
GET	    /usa	                      United States info
GET	    /gb	                          United Kingdom info
GET	    /germany	                  Germany info
POST	/post	                      Returns 201 Created
PUT	    /put          	              Returns 204 No Content
PATCH	/patch	                      Returns 204 No Content
DELETE	/delete	                      Returns 202 Accepted
GET	    /bad-request	              400 Bad Request
GET	    /unauthorized	              401 Unauthorized
GET	    /forbidden	                  403 Forbidden
GET	    /not-found	                  404 Not Found
GET	    /method-not-allowed	          405 Method Not Allowed
GET	    /request-timeout	          408 Request Timeout
GET	    /unprocessable-entity	      422 Unprocessable Entity
GET	    /internal-server-error	      500 Internal Server Error
GET	    /not-implemented	          501 Not Implemented
GET	    /bad-gateway	              502 Bad Gateway
GET	    /service-unavailable	      503 Service Unavailable
GET	    /gateway-timeout	          504 Gateway Timeout
GET	    /http-version-not-supported	  505 HTTP Version Not Supported
</pre>

---

## Customizing Endpoints
Change the mocks.json file.

* Change HTTP Method: "method": "POST" → "method": "PUT"
* Change Path: "path": "/usa" → "path": "/my-endpoint"
* Change status code: "status": 200 → "status": 201
* Response body: "body": { "message": "Hello World" }
* Headers: "headers": { "Cache-Control": "no-cache" }

This makes the server flexible for any testing scenario.

---

## License
This project is released into the public domain under The Unlicense. You are free to use, copy, modify, and share this code.
