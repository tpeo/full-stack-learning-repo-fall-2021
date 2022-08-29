# Week 4: React

# Materials
- [Day 7 Slides](https://docs.google.com/presentation/d/1qJv3xzeoCAw2IVXkA0gxWupK4cgK2bLHqBhOaYazjEM/edit?usp=sharing)

# Debugging Session
https://codesandbox.io/s/react-bugs-ho0ttf?file=/src/App.js

The following are some examples of common mistakes made for the useEffect and useState React hooks. See if you can spot the bugs, why they occur, and any potential solutions.

# Setting up React and create-react-app

Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.

It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 14.0.0 and npm >= 5.6 on your machine - install it from https://nodejs.org/en/ if you don't already have it installed.

Then, run:

```
npx create-react-app my-app
cd my-app
npm start
```

# Homework
For homework this week, we are going to be recreating the weather app from last week, but in React! [Here](https://www.figma.com/file/vKRFWIFsJ5WRJTvMNFXOiZ/Weather-App?node-id=2%3A213) is the figma for reference. 

## Some Tips
- Separate parts of the web page into smaller, manageable components (such as a Weather Card)
- Be sure to use React hooks learned in lectures
    - useState to manage state, for variables, etc.
    - useEffect to change variables when a desired state changes
- Once the components and functionality of the site are complete, use CSS to style