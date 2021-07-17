# Classwork
It's recruiting season and we're going to help you create your very own resume using JSON. The JSON will be pre-populated but its your job to modify it to your liking. There are no formal requirements for this assignment, but you should understand the different elements that go into a JSON file (**Strings, Numbers, Dictionaries/Objects, and Arrays**).  

The JSON will be generated using the json-resume command line interface **(CLI)** which will help generate beautiful html/pdf files of your resume.   

## Getting Started
Make sure you have NPM installed on your machine before proceeding
1. Install the command-line tool:

    ```
    npm install -g resume-cli
    ```

2. Navigate towards the classwork folder
    ```
    cd classwork/
    ```
3. Create a new resume by inputting 
    ```
    resume init
    ```
4. Navigate to your text editor of choice and start modifying the file; you can also edit the file in live time via
    ```
    resume serve
    ```
    stop any node process by typing 
    ```
    Ctrl-C
    ```
5. Export your resume to one of the available formats by inputting 
    ```
    resume export resume.pdf
    ```
    or
    ```
    resume export resume.html
    ```