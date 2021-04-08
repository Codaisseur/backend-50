# REST => REpresentational State Transfer

Http requests.

1. Operations as HTTP methods
2. Clean and meaningful urls
3. Respond with the appropiate status code

CRUD => Create, Read, Update, Delete

1.  GET POST DELETE PATCH PUT
    Read Create Delete Update Update

2.  Clean and meaningful urls

## Hard to communicate to others, hard to predict

GET - /getUsers
GET - /getOneUser/:id
POST - /createUser

## URL tells us what entity and the method the operations we are doing

GET - /users
POST - /users
GET - /users/:id
PATCH - /users/:id

An endpoint/route is made up of: url(endpoint address) + Method

# 3. Respond with appropriate status codes:

200... => Different flavours of success => All good!
300... => Redirects => Not here!
400... => client error => you screwed up!
500... => server error => I screwed up!

400 - Bad Request
401 - Unauthorized
404 - Not found

200 - Success
500 - Internal server error
