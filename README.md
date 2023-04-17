# Todo API 2

This is a REST API using Node.js abd SQL with authentication functionality using JWT token

## Installation
For this project we user npm package manager

```
 npm install

 npm run dev
```

You will need to created an .env file with required enviorment variables

TOKEN_SECRET = use node to generate token secret (
    ```
        require('crypto').randomBytes(64).toString('hex')
    ```
)
## Dependencies
* Express JS
* Sequelize
* JSON Web token
* Sqlite3

## Server 

### Middlewares

* authentication
* permission

### Routes

* /api/users (CRUD)
* /api/pets (CRUD)
* /api/auth/login
* /api/auth/signup