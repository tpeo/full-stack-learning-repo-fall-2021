# Week 5: Cloud Functions/Social

# Materials

- [Week 5 Backend Slides](https://docs.google.com/presentation/d/1EZm92RxIgzW_lp8Fx-tmGbDatfm2Q_TtDCE_qx6TM7E/edit?usp=sharing)
- No frontend slides! Please attend the Palantir event! 

# Week 4 Homework Solution

- [Week 4 Backend Homework Solution](https://github.com/tpeo/full-stack-learning-repo-fall-2021/blob/Week_5/Week_4/homework/backend/index_solution.js)
- [Week 4 Frontend Homework Solution](https://codesandbox.io/s/to-do-complete-vrxzf?file=/src/components/Header/Header.js)

# In Class Activity (Backend)

To get y'all more familiar with Firebase hosting, we've added an hosted application on `/firebase` for y'all to inspect.

You'll have to login to firebase with the CLI (command line interface) tool, connect it with a project, and add functions into the project.

1. `cd firebase`
2. `firebase login`
3. `firebase init`


![](assets/initialize.png)

4. Add your credentials json file as `cred.json` under `functions/`
5. Nagivate to `functions/index.js` and update `databaseURL: "ENTER_URL_DATABASE"`


To run and debug the functions locally ...

1. Run `firebase emulators:start --only functions`

To deploy the functions to your cloud ...

1. Run `firebase deploy --only functions`

For more information visit the [Firebase Website](https://firebase.google.com/docs/hosting/test-preview-deploy)

# Homework
For the frontend homework this week, our goal is to create a to do app using React. In the end, it should look like [this](https://www.figma.com/file/EP26zpvSwnc7k7Il8PCajM/To-Do-App?node-id=0%3A1).

## Instructions

Make sure you have a text editor installed on your machine.

1. Open your text editor of choice inside the homework/frontend directory.
2. Open the terminal in the homework/frontend directory and run npm install to install dependencies for the website.
3. Once all the dependencies are installed, run the application by running "npm start". A website with a header Blank Name's site should appear.
4. Write code in that implements the todo app.
5. Save the completed site & push it to your repo.

## Requirements

- Modify the Home.js file with the following:
    - Implement two lists, a to do list and a done list. When the check button for each task is clicked, move the task to the done list. Conversely, when the undo button for each task is clicked, move the task back to the to do list.
    - Render out each task on the two lists by creating a new a ListItem component that accepts props related to its relevant task.
    - Implement an input field and "add" button that when clicked, should add a task to the to do list. If a task already exists in the to do list, display an alert.
    - At the very top of the page, display a count of the number of tasks left to do.
- Modify the header component to display your name instead of BLANK NAME.

## Things to Google

Good engineers know how to learn on their own. Here are a couple of topics that might be helpful to Google:

- Handling form inputs in React
- HTML alerts
- Using the src attribute for the  tag to display .svg files