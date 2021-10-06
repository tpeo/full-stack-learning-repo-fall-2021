# Week 3: APIs/CSS

# Materials
- [Week 3 Backend Slides](https://docs.google.com/presentation/d/1qUem7kvlVGblh6rOPugepUgLxjmQyPVx71GJoVGtcMY/edit?usp=sharing)
- [Week 3 Frontend Slides](https://docs.google.com/presentation/d/17eiGw5dpWhyYA74VKUkkLhJuNoVRyTW-hXRbGzWJYnk/edit?usp=sharing)

# Week 2 Homework Solution
https://codesandbox.io/s/resume-website-complete-f4jzs?file=/index.html 

# Homework
It's time to combine what we have learned about calling third-party APIs and CSS to create a pretty, yet functional weather app. The weather app should search for cities in the United States, allow a user to select a city, and display the weather for the city, including a five day forecast and the air pollution. The weather data will be sourced from [OpenWeather](https://openweathermap.org/). We have included some starter code for search and helper functions but feel free to modify any of the starter code to fit your needs! 

## Instructions
Make sure you have a text editor installed on your machine and your own OpenWeather API key before proceeding.  
1. Open your text editor of choice inside the homework directory.
2. Open the file called index.html.
4. Set the `apiKey` variable to your own OpenWeather API key
3. Write code that fetches and displays data from the server and also matches the design below. We recommend you read the OpenWeather's API documentation before you begin writing code. In addition, we recommend on fetching data from the API and generating relevant HTML elements before beginning to style the site. 
4. Save the completed site.

## Requirements
- Using a city's longitude and latitute, use OpenWeather's [One Call API](https://openweathermap.org/api/one-call-api) to get current weather conditions and a five day forecast for the city.
    - Once you have fetched the weather data, generate HTML elements that displays the current weather and the cards for five day forecast. We recommend you use a for loop to generate the cards for the five day forecast. 
- Using a city's longitude and latitute, use OpenWeather's [Air Pollution API](https://openweathermap.org/api/air-pollution) to get current air quality index (AQI) for the city.
- Use the `.svg` files in the icons folder to display the relevant graphics for the weather conditions. *Note how the name of the `.svg` files correspond to the [current.weather.icon and daily.weather.icon values](https://openweathermap.org/api/one-call-api#example) in the One Call API response.* We recommend having the value of the `src` attribute of the <img> tag to change dynamically based on API response. 
- Style the website by adding CSS to the `style.css` file. 

## Design
[At a bare minimum, your website should look similar to this when finished.](https://www.figma.com/file/vKRFWIFsJ5WRJTvMNFXOiZ/Weather-App?node-id=2%3A213)

## Things to Google
Good engineers know how to learn on their own. Here are a couple of topics that might be helpful to Google:
- CSS border-radius
- Using the src attribute for the <img> tag to display .svg files

# Bonus
Flex 💪 your CSS skills by modifying the weather website to be as attractive as possible. Take a look at CSS background gradients and opacity to give your weather site a more modern look!
