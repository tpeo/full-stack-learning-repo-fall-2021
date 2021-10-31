
# Week 6: Authentication/ Advanced React

# Materials

- [Week 6 Backend Slides](https://docs.google.com/presentation/d/1Tdx5eecNcbTzh-zfqAhKxoNq6zOCcDbaNgryTzVrUpY/edit?usp=sharing)
- [Week 6 Frontend Slides](https://docs.google.com/presentation/d/1bM2j7-tuf_L5ugvYeFaloZi0bIqFHgiEdKHAMquKqGA/edit?usp=sharing)


# Week 5 Homework Solution

- [Week 5 Backend Homework Solution](https://github.com/tpeo/full-stack-learning-repo-fall-2021/blob/main/Week_5/homework/backend/index_solution.js)
- [Week 4 Frontend Homework Solution](https://codesandbox.io/s/to-do-complete-vrxzf?file=/src/components/Header/Header.js)

# Homework
Now that you have created a basic to do app. The next step is to connect it to a backend so that anybody can use your app wherever they are! You will need to implement routing, connect to the server to retrieve different tasks and include authentication. If you have any questions, feel free to contact us! 

## Instructions
Make sure you have a text editor installed on your machine.
1. Bring the code for your previous homework, the to do app, into this week's homework directory by copying the src and public folders and the package.json file. Do not copy over the node_modules folder. If you have not compelted the week 4 HW, go ahead and use the code from the completed solutions. 
2. Review the [documentation for React Router by reading the quick start and primary components guides as well as the documentation for the useHistory Hook.](https://reactrouter.com/web/guides/quick-start)
3. Open the terminal in the homework/frontend directory and run npm install to install dependencies for the website. Make sure that React-Router is one of the listed dependencies in package.json. 
4. Once all the dependencies are installed, run the application by running `npm start`. Your to do app should appear.
5. Create two new pages, login and signup for your app. Match the page's contents to the design given on the Figma. 
7. Connect the two pages to React Router by modifying app.js and following along with the React Router documentaion. 
8. Modify the header component to include links to the home, login, and signup pages.
9. Connect the to do app to Firebase based on what was taught this week. 

## Requirements
- All routing between different pages should be handled by React Router.
- The login page should allow users to login into the app and then redirect them to the home page if they login sucessfully or display an alert with an error message if do not login sucessfully
- The tasks in the home page should reflect the status of the tasks in Firebase. Adding or changing the state of a task on the application should also change the state of the task on the server.
- Users should be able so signup by entering their desired username and password for their account. If an username is already taken, an alert with an error message should display. 

## Design
[At a bare minimum, your website should look similar to this when finished.](https://www.figma.com/file/EP26zpvSwnc7k7Il8PCajM/To-Do-App?node-id=0%3A1)

## Things to Google
Good engineers know how to learn on their own. Here are a couple of topics that might be helpful to Google:
- React Router
- HTML alerts
