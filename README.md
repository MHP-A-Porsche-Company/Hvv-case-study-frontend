# Star Wars Character of the Day

React/TypeScript application that displays a randomly selected Star Wars character each day using data from the [Star Wars API (SWAPI)](https://swapi.dev/). Each user sees the same character throughout the day, but different users may see different characters on the same day.

## Features

- **Daily Character Display**: Presents a new Star Wars character to the user each day.
- **Profile Page Design**: Offers an appealing and responsive profile page for each character.
- **Persistent Character of the Day**: Ensures the displayed character remains the same for the user throughout the day.
- **Unique per User**: Different users may receive different characters on the same day.
- **Audio narration**: Ability to listen character description text for better accessibility. 
- **Multilingual support**: App supports English and German language translation. 

## Technologies Used

- **React** with **TypeScript**
- **Tailwind CSS**
- **Vite**

## Getting Started

### Prerequisites

- **Node.js** (version 15 or above)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

```
git clone git@github.com:MHP-A-Porsche-Company/Hvv-case-study-frontend.git
cd star-wars-character-of-the-day
```

2. **Install dependencies**

Using NPM:
 ```
npm install
 ```
Or using Yarn:
 ```
yarn
 ```





## SSO Access for hvv Employees

To enable Single Sign-On (SSO) access for hvv employees, follow the steps outlined below:

### 1. Integration with Identity Provider

Integrate the application with hvv's existing Identity Provider (IdP) using standard authentication protocols such as **SAML** or **OAuth 2.0**.

- **OAuth 2.0**: This protocol allows for authorization via an **Authorization Server**. The client application (our Star Wars Character app) will interact with the Authorization Server to obtain access tokens using the **clientId** and other credentials.
- **SAML**: Another option that provides XML-based authentication and authorization.

### 2. Authentication Flow

Implement an authentication flow using **OAuth 2.0**. This will involve redirecting hvv employees to the Identity Provider's login page, and upon successful login, the IdP will issue a token back to the client application. The steps involved are as follows:

1. **Authorization Request**: When the user clicks "Login," the application redirects to the IdP authorization endpoint. This redirect includes the **clientId** and **redirect_uri** (callback URL) parameters.

   ```javascript
   const login = () => {
     window.location.href = `https://idp.hvv.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token`;
   };

2. **Callback/Redirect Handling**: After successful login, the IdP redirects the user back to the application using the redirect_uri specified. The response includes an access token in the URL fragment (#).

   The application should extract the token from the URL and store it securely, for example:

   ```javascript
   const extractToken = () => {
    const hash = window.location.hash;
    const token = new URLSearchParams(hash.substring(1)).get('access_token');
    if (token) {
        localStorage.setItem('access_token', token);
    }
   };

3. **Token Validation**: Optionally, validate the token with the IdP's token introspection endpoint to ensure it's still valid.

   ```javascript
   fetch(`https://idp.example.com/token/introspect`, {
       method: 'POST',
       headers: {
       'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    });

### 3. Protected routes

Certain routes and features should be accessible only after the user is authenticated. Implement route guards that check for the presence of a valid access token in local storage before allowing access to these routes.

1. **Route Guard Example:**

    ```javascript
   const isAuthenticated = () => !!localStorage.getItem('access_token');
        const ProtectedRoute = ({ children }) => {
        return isAuthenticated() ? children : <Redirect to="/login" />;
    };
   ```

    Use the `ProtectedRoute` component for any sensitive route:
    ```javascript
       <Route path="/profile">
         <ProtectedRoute>
            <ProfilePage />
         </ProtectedRoute>
       </Route>
   ```

### 4. User Session Management

To securely manage user sessions:

- **Token Storage**: Store the token in **localStorage** or **sessionStorage** to persist the user session across page reloads. For higher security, consider using **HttpOnly** cookies.
- **Session Expiry**: Implement token expiration handling. Most tokens will have an expiration time (often in the token's payload or returned by the IdP). Use this expiration to log out users automatically when the session ends.

    ```javascript
    const tokenExpirationHandler = () => {
        const token = localStorage.getItem('access_token');
        if (token) {
            const expiration = parseJwt(token).exp * 1000;
            const timeUntilExpiry = expiration - Date.now();
            setTimeout(logout, timeUntilExpiry);
        }
    };

    const parseJwt = (token) => {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    };
   ```
- **Logout**: Provide a logout option that clears the stored token and redirects the user back to the login page.
    ```javascript
    const logout = () => {
       localStorage.removeItem('access_token');
       window.location.href = '/login';
    };
   ```

### 5. Refresh Tokens (Optional)
For enhanced security, if the IdP provides refresh tokens, implement token refresh to extend the session without requiring the user to re-authenticate:

- Store the refresh token securely.
- Use it to obtain a new access token when the current token expires.