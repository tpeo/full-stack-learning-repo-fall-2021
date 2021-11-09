# Week 8: Twilio/Emails
# Materials

- [Week 8 Backend Slides](https://docs.google.com/presentation/d/1dCvImRc0tyUei0R1YWc4yZ4Jm6c4vtLZvT4DAurhqCM/edit?usp=sharing)

# Todo App
We've provided you a full-stack implementation of the TODO App and will be going over it in class. Creating your own implementation is highly recommended as the projects that we're going to introduce will require knowledge on frontend and backend development. There is currently no hosting for this example as everything is local. 

## Frontend
The React frontend is found under todo_app/frontend. The project should run under localhost:3000. This implementation assumes that the backend server is localhost:4000.

To install dependencies
1. Nagivate to todo_app/frontend
2. Run `npm install`

To start the app
1. Run `npm start`

You'll need to add the firebase config object found in your firebase project settings to the file under /frontend/src/components/Firebase/firebase.js. This will ensure that you're frontend can access the firebase authentication service.

## Backend

The Express backend is found under todo_app/backend. The backend should run under localhost:4000 after providing a .env file with PORT=4000 inside.

To install dependencies
1. Navigate to todo_app/backend
2. Run `npm install`

To run the server
1. Run `npm run dev`

Auth
- A folder containing exportable middleware used to authenticate users in firebase

Firebase
- A folder containing files used to connect to firebase account
- Add your own credentials (cred.json) to the folder

`index.js`
- File with the main code logic, includes routes to create, view, and toggle todo list items
