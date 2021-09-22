# Week 1: Getting Started/Debugging and Basic Tools

# Materials
- [Week 1 Backend Slides](https://docs.google.com/presentation/d/1FIdwfpNScTCGYxouDfl9vwz7twEQlyFttL12n_UVzn4/edit?usp=sharing)
- [Week 1 Frontend Slides](https://docs.google.com/presentation/d/1kFshHtUDc_a4WUUq85yJ_bSh2fh497uoB__xQiOarGQ/edit?usp=sharing)

# Homework
It's recruiting season and we're going to help you create a JSON file containing your resume! The goal of this homework assignment is to familiarize you with JSON. Please follow the instructions very carefully to ensure that your JSON’s schema is valid for future homework assignments.

## Instructions
Make sure you have a text editor installed on your machine before proceeding. 
1.	Open your text editor of choice inside the homework directory.
2.	Create a new file called Resume.json.
3.	Modify the JSON file with the following properties:
    * A key-value pair with the key called “basics” with the value as an object with the following properties:
        - A key-value pair with the key called “name” and the value as your first and last name
        - A key-value pair with the key called “image” and the value as a link to an image of yourself
        - A key-value pair with the key called “email” and the value as your email
        - A key-value pair with the key called “phone” and the value as your phone number in “(###) ###-####” format
        - A key-value pair with the key called “summary” and the value as a brief summary about yourself
        - A key-value pair with the key called “location” with the value as an object with the following properties:
            * A key-value pair with the key called “address” and the value as your street address
            * A key-value pair with the key called “postalCode” and the value as your postal code 
            * A key-value pair with the key called “city” and the value as your city’s name
            * A key-value pair with the key called “countryCode” and the value as your country’s ISO 3166 alpha-2 code
            * A key-value pair with the key called “region” and the value as your state’s name
    * A key-value pair with the key called “work” and the value as an array of objects. Each object in the array should represent a current/previous work experience of yours and have the following properties:
        - A key-value pair with the key called “name” and the value as the name of the organization you worked at for that work experience 
        - A key-value pair with the key called “position” and the value as the position you hold/held for that work experience 
        - A key-value pair with the key called “url” and the value as the link to the organization you worked at’s homepage for that work experience
        - A key-value pair with the key called “startDate” and the value as the date you started that work experience in “YYYY-MM-DD” format
        - A key-value pair with the key called “endDate” and the value as the date you ended that work experience in “YYYY-MM-DD” format
        - A key-value pair with the key called “summary” and the value as a description of what you did for that work experience
    *	A key-value pair with the key called “education” and the value as an array of objects. There should only be one object in the array representing your college education at UT Austin:
        - A key-value pair with the key called “institution” and the value as “The University of Texas at Austin”
        - A key-value pair with the key called “url” and the value as “https://www.utexas.edu/”
        - A key-value pair with the key called “area” and the value as your primary major at UT Austin
        - A key-value pair with the key called “studyType” and the value as “Bachelor”
        - A key-value pair with the key called “startDate” and the value as the date you started attending UT Austin in “YYYY-MM-DD” format
        - A key-value pair with the key called “endDate” and the value as the date you expect to graduate UT Austin in “YYYY-MM-DD” format
    *	A key-value pair with the key called “interests” and the value as an array of strings. Each string should be an interest of yours. 
4. Save the completed JSON

# Bonus
If you want to create a resume out of the JSON you just created, you can use the json-resume command line interface **(CLI)** which will help generate beautiful html/pdf files of your resume.   

## Instructions
Make sure you have NPM installed on your machine before proceeding
1. Install the command-line tool:

    ```
    npm install -g resume-cli
    ```

2. Navigate towards the folder that contains your Resume.json file
    ```
    cd folderName/
    ```
3. [Verify that your JSON matches the schema here.] https://jsonresume.org/schema/) Some properties should be missing from your Resume.json file, which should be okay 

4. Export your resume to one of the available formats by inputting 
    ```
    resume export resume.pdf
    ```
    or
    ```
    resume export resume.html
    ```
    A a pdf or html file should be generated and placed inside your folder. 

## Troubleshooting
1. If you encounter an error like the one below 
    ```
    $ resume export resume.pdf 
    > Error: theme path jsonresume-theme-even could not be resolved from current working directory ...
    ```
    it means that the resume-cli doesn't access to the default theme (which is kind of bad) and can fix it by installing the theme using
    ```
    $ npm install jsonresume-theme-even
    ```
  
## Clean Up
Optionally, you can uninstall the resume-cli package by performing
```
npm uninstall -g resume-cli
```

## Additional Resources
- [JSON Resume Website ](https://jsonresume.org/) 
- [JSON Resume Github Page](https://github.com/jsonresume/resume-cli)
