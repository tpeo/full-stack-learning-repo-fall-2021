# Week 2: Working with JSON


# Learning Objectives
- Learning what JSON is, some of it's many use cases, and interacting with it 
- High level understanding of REST API's and HTTP Verbs
- Git: basic commands, workflow, and forking 

# Classwork
It's recruiting season and we're going to help you create your very own resume using JSON. The JSON will be pre-populated but its your job to modify it to your liking. There are no formal requirements for this assignment, but you should understand the different elements that go into a JSON file (**Strings, Numbers, Objects, Booleans, and Arrays**).  

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
4. Navigate to your text editor of choice and start modifying the .json file; you can view real time changes to the resume using 
    ```
    resume serve
    ```
    This will open a locally hosted webpage to your resume that will update whenever you save changes the your json file
5. Stop any node process by typing 
    ```
    Ctrl-C
    ```
6. Export your resume to one of the available formats by inputting 
    ```
    resume export resume.pdf
    ```
    or
    ```
    resume export resume.html
    ```
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
2. The real time changes feature `resume serve` is somewhat glitchy and can lead to `"Parse error: resume.json"` when making edits; somehow, re-running `resume serve` again usually clears the error temporarily. If this happens to you, you could edit the json file without the live feature and perform `resume serve` to check the formatting before exporting to pdf.

  
## Clean Up
Optionally, you can uninstall the resume-cli package by performing
```
npm uninstall -g resume-cli
```
# Deliverables
Push your changes with your exported resume file in the repository

![Resume](./assets/resume_example.PNG)

## Links
- [JSON Resume Website ](https://jsonresume.org/) 
- [JSON Resume Github Page](https://github.com/jsonresume/resume-cli)


# Homework
No homework this week, finish the resume project you started in class

# Materials
- [Week 2 Slides](https://docs.google.com/presentation/d/1qUem7kvlVGblh6rOPugepUgLxjmQyPVx71GJoVGtcMY/edit#slide=id.p)
