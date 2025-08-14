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