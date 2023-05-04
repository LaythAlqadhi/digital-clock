# Digital Clock with Dynamic Background

This is a simple web page that displays a digital clock with a dynamic background that changes depending on the time of day. The clock shows the current day, hour, minute, and second, and updates in real-time. The background image of the page changes every hour based on the time of day: a daytime image is shown between 6:00 AM and 5:59 PM, and a nighttime image is shown between 6:00 PM and 5:59 AM.

## Technologies Used

This project was built using HTML, CSS, and JavaScript.

## How to Use

1. Clone the repository or download the code files or visit the preview page.
2. Open the `index.html` file in a web browser.
3. The clock will automatically start ticking and the background image will be set based on the current time.
4. The current day, hour, minute, and second will be displayed on the clock.

## Features

- Real-time digital clock display
- Dynamic background image that changes based on the time of day
- Clock updates every second to show the current time

## Preview

You can preview the project [here](https://laythalqadhi.github.io/digital-clock/).

## Code Explanation

### CSS
- Sets the box-sizing property to border-box for all elements and removes any margins and padding from all elements.
- Sets the font-family and background color for the body, and centers the container div vertically and horizontally.
- Defines the styles for the clock display, including the font size, background color, border radius, and box shadow.
- Defines the styles for the clock elements, including the day, hour, minute, and second divs, and the separating colons.

### HTML
- Defines the basic structure of the web page.
- Includes the CSS stylesheet and JavaScript file.
- Defines the clock display and its elements using divs and spans.

### JavaScript
- Defines a function to update the clock display and the background image based on the current time.
- Defines a function to set the background image based on the current hour.
- Sets an interval to update the clock every second.
- Sets an interval to update the background image every hour.
- Calls the `setBackground()` function on page load to initialize the background image.
