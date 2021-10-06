# Week 2: JavaScript/HTML

# Materials
- [Week 2 Backend Slides](https://docs.google.com/presentation/d/1iWpmcWsE_4FNhXOm_S3NdeY6LhCJPQzBGlF2mD209fI/edit?usp=sharing)
- [Week 2 Frontend Slides](https://docs.google.com/presentation/d/15j7x4ntl4oOBNhMBU-414OtuOtrq5x4vNE4pYTciknQ/edit?usp=sharing)

# Week 1 Homework Solution
If you completed your JSON, it should look something like this:
```javascript
{
    basics: {
        name: "Bevo Longhorn",
        image:
        "https://dxa7m90h2v1am.cloudfront.net/images/2015/10/16/bevo_1000.jpg",
        email: "bevolonghorn@utexas.edu",
        phone: "(123) 456-7890",
        summary: "I am Bevo XV!",
        location: {
        address: "123 Bevo Way",
        postalCode: "78705",
        city: "Austin",
        countryCode: "+1",
        region: "Texas"
        }
    },
    work: [
        {
        name: "Roblox",
        position: "Product Manager Intern",
        url: "https://www.roblox.com",
        startDate: "2018-01-01",
        endDate: "2019-01-01",
        summary: "Summary of what I did here"
        },
        {
        name: "Amazon",
        position: "Design Intern",
        url: "https://www.amazon.com",
        startDate: "2020-02-02",
        endDate: "2021-03-03",
        summary: "Summary of what I did here"
        },
        {
        name: "TPEO",
        position: "Engineering Fellow",
        url: "https://txproduct.org",
        startDate: "2021-05-05",
        endDate: "Present",
        summary: "Summary of what I did here"
        }
    ],
    education: [
        {
        institution: "The University of Texas at Austin",
        url: "https://www.utexas.edu",
        area: "Computer Science",
        studyType: "Bachelor",
        startDate: "2019-08-08",
        endDate: "2023-05-05"
        }
    ],
    interests: [
        {
        name: "Coding"
        },
        {
        name: "Playing ROBLOX"
        },
        {
        name: "Texas Football"
        }
    ]
};
```

# Homework
Now that you have created your JSON resume, its time to turn into a website! 

## Instructions
Make sure you have a text editor installed on your machine before proceeding. 
1. Open your text editor of choice inside the homework directory.
2. Open the file called index.html.
3. Inside the `<script>` tags for index.html, create a JavaScript object called "resume" that contains the properties of the JSON resume you created last week. Recall that JSON are JavaScript objects so you can just copy the JSON and set it is a variable. 
4. Parse the "resume" object and generate HTML using JavaScript to create a website based on the design below.
5. Save the completed site.

## Requirements
- Places you work/have worked at should link to the company's website
- The University of Texas at Austin should link to the school's website
- Certain elements in an array should be displayed inside bulleted lists for better organization

## Design
[Your website should look similar to this when finished.](https://www.figma.com/file/6fc92eAV2G17uSPh4jlnh3/JSON-Resume?node-id=2%3A2)

## Things to Google
Good engineers know how to learn on their own. Here are a couple of topics that might be helpful to Google:
- More details about innerHTML
- Unordered lists in HTML
- Displaying Emails in HTML
- Headers in HTML
