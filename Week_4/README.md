# Week 4: Databases/React

# Materials
- [Week 4 Backend Slides](https://docs.google.com/presentation/d/1QWH8SWW4XTUI_A3LhbsWsWAac1_Zl3kLXFMAjeQJszo/edit?usp=sharing)
- [Week 4 Frontend Slides](https://docs.google.com/presentation/d/1m7bhkKPdljzQkA8vNb4yvRUpdg72j7WQnrpltOcWQlU/edit?usp=sharing)

# Week 3 Homework Solution
https://codesandbox.io/s/weather-complete-542y5

# Homework
If you have not completed the in-class activity for the backend class, please complete it as homework. If you have any questions, please contact us! For the frontend homework this week, our goal is to create a to do app using React. 

## Instructions
Make sure you have a text editor installed on your machine. 
1. Open your text editor of choice inside the homework/frontend directory.
2. Open the terminal in the homework/frontend directory and run `npm install` to install dependencies for the website.
4. Once all the dependencies are installed, run the application by running `npm start`. A website with a header Blank Name's site should appear.
3. Write code in that implements the todo app. 
4. Save the completed site.

## Requirements
- Modify the Home.js file with the following:
    - Implement two lists, a to do list and a done list. When the check button for each task is clicked, move the task to the done list. Conversely, when the undo button for each task is clicked, move the task back to the to do list.
    - Render out each task on the two lists by creating a new a ListItem component that accepts props related to its relevant task. 
    - Implement an input field and "add" button that when clicked, should add a task to the to do list. If a task already exists in the to do list, display an alert. 
    - At the very top of the page, display a count of the number of tasks left to do. 
- Modify the header component to display your name instead of BLANK NAME.

## Design
[At a bare minimum, your website should look similar to this when finished.](https://www.figma.com/file/EP26zpvSwnc7k7Il8PCajM/To-Do-App?node-id=0%3A1)

## Things to Google
Good engineers know how to learn on their own. Here are a couple of topics that might be helpful to Google:
- Handling form inputs in React
- HTML alerts
- Using the src attribute for the <img> tag to display .svg files