# Backend API Documentation

## Endpoints

### POST /users/register

#### Description
Registers a new user by creating an account. The request must include the user's full name, email, and password. On successful registration, the endpoint returns an authentication token and user information.

#### Required Data
- **fullname**: Object containing:
  - **firstname**: String, at least 3 characters (required)
  - **lastname**: String, optional; must be at least 3 characters if provided
- **email**: String, valid email format (required; at least 5 characters)
- **password**: String, at least 6 characters (required)

#### Response

- **201 Created**
  - Content: JSON object containing the token and user information.
  
- **400 Bad Request**
  - Content: JSON object with an array of validation error messages.

    #### Example Response

  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "60c72b2f9b1d8e001c8e4b8a",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

---

### POST /users/login

#### Description
Authenticates an existing user. The endpoint validates the provided email and password, and if successful, returns an authentication token along with user details.

#### Required Data
- **email**: String, valid email format (required)
- **password**: String (required)

#### Response

- **200 OK**
  - Content: JSON object containing the token and user information.
  
- **400 Bad Request**
  - Content: JSON object with a message indicating invalid credentials.
  
- **404 Not Found**
  - Content: JSON object with a message indicating that the user was not found.

  #### Example Response

  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "60c72b2f9b1d8e001c8e4b8a",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

---
### GET /users/profile

#### Description
Retrieves the profile information of the currently authenticated user. This endpoint requires a valid authentication token.

#### Authentication
Requires Bearer token in Authorization header

#### Response

- **200 OK**
  - Content: JSON object containing user information
  
- **401 Unauthorized**
  - Content: JSON object with error message if token is invalid or missing

#### Example Response
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "_id": "60c72b2f9b1d8e001c8e4b8a"
}
```

---

### GET /users/logout

#### Description
Logs out the currently authenticated user by invalidating their token. The token is added to a blacklist to prevent further use.

#### Authentication
Requires Bearer token in Authorization header

#### Response

- **200 OK**
  - Content: JSON object with success message
  
- **401 Unauthorized**
  - Content: JSON object with error message if token is invalid or missing

#### Example Response
```json
{
  "message": "Logged out"
}
```
---

## Captain Endpoints

### POST /captains/register

#### Description
Registers a new captain by creating an account. The request must include the captain's full name, email, password, and vehicle details. On successful registration, the endpoint returns an authentication token and captain information.

#### Required Data
- **fullname**: Object containing:
  - **firstname**: String, at least 3 characters (required)
  - **lastname**: String, optional; must be at least 3 characters if provided
- **email**: String, valid email format (required; at least 5 characters)
- **password**: String (required)
- **vehicle**: Object containing:
  - **color**: String, at least 3 characters (required)
  - **plate**: String, at least 3 characters (required)
  - **capacity**: Number, minimum 1 (required)
  - **vehicleType**: String, must be one of: ['car', 'motorcycle', 'auto'] (required)

#### Response

- **201 Created**
  - Content: JSON object containing the token and captain information.
  
- **400 Bad Request**
  - Content: JSON object with an array of validation error messages.
  
- **500 Internal Server Error**
  - Content: JSON object with error message if server encounters an error.

#### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.captain@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Black",
    "plate": "ABC-123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Example Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "60c72b2f9b1d8e001c8e4b8a",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.captain@example.com",
    "status": "inactive",
    "vehicle": {
      "color": "Black",
      "plate": "ABC-123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### Error Response
```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

---

### POST /captains/login

#### Description
Authenticates an existing captain. The endpoint validates the provided email and password, and if successful, returns an authentication token along with captain details.

#### Required Data
- **email**: String, valid email format (required)
- **password**: String (required)

#### Response

- **200 OK**
  - Content: JSON object containing the token and captain information
  
- **401 Unauthorized**
  - Content: JSON object with error message for invalid credentials
  
- **500 Internal Server Error**
  - Content: JSON object with error message if server encounters an error

#### Example Request
```json
{
  "email": "john.captain@example.com",
  "password": "password123"
}
```

#### Example Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "60c72b2f9b1d8e001c8e4b8a",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.captain@example.com",
    "status": "inactive",
    "vehicle": {
      "color": "Black",
      "plate": "ABC-123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### Error Response
```json
{
  "message": "Invalid email or password"
}
```

---

### GET /captains/profile

#### Description
Retrieves the profile information of the currently authenticated captain. This endpoint requires a valid authentication token.

#### Authentication
Requires Bearer token in Authorization header

#### Response

- **200 OK**
  - Content: JSON object containing captain information
- **404 Not Found**
  - Content: JSON object if captain is not found
- **401 Unauthorized**
  - Content: JSON object with error message if token is invalid or missing
- **500 Internal Server Error**
  - Content: JSON object with error message if server encounters an error

#### Example Response
```json
{
  "_id": "60c72b2f9b1d8e001c8e4b8a",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.captain@example.com",
  "status": "inactive",
  "vehicle": {
    "color": "Black",
    "plate": "ABC-123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### GET /captains/logout

#### Description
Logs out the currently authenticated captain by invalidating their token. The token is added to a blacklist to prevent further use.

#### Authentication
Requires Bearer token in Authorization header

#### Response

- **200 OK**
  - Content: JSON object with success message
- **401 Unauthorized**
  - Content: JSON object with error message if token is invalid or missing

#### Example Response
```json
{
  "message": "Logged out"
}
```