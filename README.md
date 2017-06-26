# Node Express REST API

# Installation
```
npm install
```
Also mongoDB needed. If you have docker installed:

```
docker run --rm --name mongodb -p 27017:27017 -d mongo
```

# Run
```
gulp run
```
# Usage
- List users:
```
GET /users
```

- Add new user:
```
POST /users

{
  "username": "new_username",
  "email": "new@email.com"
}
```
