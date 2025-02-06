# Realtime Chat Application

This project is a real-time chat application with real-time messaging and a real-time notification system. It is built using React, Node.js, and Socket.io.

## Features

*   **User Authentication**: Users can register, log in, and log out of the system.
*   **Real-time Messaging**: Users can send and receive messages in real-time without needing to refresh the page.
*   **Real-time Notifications**: Users receive notifications in real-time when they receive new messages.
*   **Online Status**: The application displays which users are online and which are offline.
*   **Chat Creation**: Users can create new chats by clicking on another user.

## Technologies Used

*   **React**: A JavaScript library for building user interfaces.
*   **Node.js**: A JavaScript runtime environment for building server-side applications.
*   **Socket.io**: A library for enabling real-time, bi-directional communication between web clients and servers.
*   **Context API**: Used in React to manage state.
*   **JWT**: Used for authentication in React and Node.
*   **Express**: A Node.js framework for creating APIs.
*   **MongoDB**: A NoSQL database used to store data.
*   **Mongoose**: A library for interacting with MongoDB.
*   **bcrypt**: A library for hashing passwords.
*   **JSON Web Token (JWT)**: Used for creating and verifying tokens.
*   **validator**: A library for validating email and password.
*   **React Bootstrap**: A UI library for styling the application.
*   **Moment.js**: A library for formatting dates and times.

## Setup

### Prerequisites

*   **Node.js** and **npm** should be installed. You can download the recommended version from [nodejs.org](https://nodejs.org). Verify your installation by running `node -v` in your terminal.
*   **Visual Studio Code** or another preferred code editor.
*   A **MongoDB account** is needed to create a database. Go to [cloud.mongodb.com](https://cloud.mongodb.com) and set up an account.

### Installation

1.  **Clone the repository** (if you have the source code from Patreon).

2.  **Navigate to the server directory**:
    ```bash
    cd server
    ```

3.  **Install server dependencies**:
    ```bash
    npm install
    ```

4.  **Navigate to the client directory**:
    ```bash
    cd client
    ```

5. **Install client dependencies**:
    ```bash
     npm install
   ```

6.  **Navigate to the socket directory**:
    ```bash
    cd socket
    ```

7.  **Initialize package.json** (if you haven't already)
    ```bash
    npm init -y
    ```
8.  **Install socket dependencies**:
    ```bash
    npm install socket.io
    ```
    
### Environment Variables

*   Create a `.env` file in the `server` directory.
*   Add the following environment variables:
    *   `ADDRESS_URI`: Your MongoDB connection string. Replace the password with the one you set up. Include `/chat-app` at the end to automatically create the database. For example: `mongodb+srv://<username>:<password>@<cluster>.mongodb.net/chat-app`
    *   `JWT_SECRET_KEY`: A secret key for JWT. For example: `JWT_SECRET_KEY=supersecret123`

### Running the Application

1.  **Start the server**:
    ```bash
    cd server
    nodemon index.js
    ```
2.  **Start the client**:
    ```bash
    cd client
    npm run dev
    ```
3.  **Start the socket server**:
    ```bash
    cd socket
    nodemon index.js
    ```

## Project Structure

*   **client**: Contains the React application.
    *   `src`: Contains the source code for the React application.
        *   `components`: Contains React components.
            *   `chat`: Contains chat-related components like `ChatBox.jsx`, `UserChart.jsx`, `PotentialCharts.jsx` etc..
        *   `context`: Contains context API files to manage state such as `chatContext.jsx`.
        * `utils`: Contains utility functions for http requests in the `services.js` file.
*   **server**: Contains the Node.js server.
    *   `models`: Contains the data models for MongoDB.
         * `userModel.js` contains the schema for the user data.
         * `chatModel.js` contains the schema for the chat data.
         * `messageModel.js` contains the schema for the message data.
    *   `routes`: Contains the API routes.
        * `userRoute.js` handles user related API calls.
        * `chatRoute.js` handles chat related API calls.
        * `messageRoute.js` handles message related API calls.
    *   `controllers`: Contains the logic for handling routes.
        *  `userController.js` handles user authentication logic.
        * `chatController.js` handles the logic for chat creation and retrieval.
        * `messageController.js` handles the logic for message creation and retrieval.
*   **socket**: Contains the socket.io server files.
    *   `index.js`: The main file for the socket.io server.

## API Endpoints

### User
*   `POST /api/users/register`: Registers a new user.
*   `POST /api/users/login`: Logs in an existing user.
*  `GET /api/users/find/:userId`: Finds a user by ID.
*   `GET /api/users`: Gets all users.

### Chat
*   `POST /api/chats`: Creates a new chat.
*   `GET /api/chats/:userId`: Gets all charts for a specific user.
* `GET /api/chats/find/:firstId/:secondId`: Finds a specific chart using the user IDs.

### Messages
*   `POST /api/messages`: Sends a new message.
*   `GET /api/messages/:chatId`: Gets all messages for a specific chart.

## Socket.io Events

### Server-Side Events
*   `connection`: Listens for new client connections.
*   `add new user`: Listens for a new user connection.
*   `send message`: Listens for new messages sent from client.

### Client-Side Events
*   `connection`: Establishes a connection to the socket.io server.
* `add new user`: Sends a new user ID to the server.
*   `send message`: Sends a new message to the server.
*   `get message`: Listens for new messages.
*   `get notification`: Listens for a new notification.

## Additional Notes
*   The source code for the entire project is available on the creator's Patreon page for a small fee of three dollars per month.
*   The video series demonstrates how to build a real-time chat application using React, Node.js, and Socket.io.
*   The application includes features such as user authentication, real-time messaging, real-time notifications, online status, and chat creation.
*   The application uses a variety of libraries and frameworks, including React Bootstrap, Mongoose, bcrypt, JWT, and validator.
*   The application uses a custom CSS for additional styling, which is included in the `index.css` file of the client app.
* The chat data is stored in a MongoDB database.
* The application uses Socket.IO for real time communication.
* The application also has the functionality of auto scrolling when a new message arrives and the chat is open.


