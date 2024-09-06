# Weather Forecast Application Specification

## General Information
The task is to create a weather forecast web interface using the React framework based on the given parameters.

## City Selection
- When clicking on the city name, a modal should appear with a search field.
- The user can enter the name of the city they want to search for.
- The city list is provided by the **Open Meteo Geocoding API**: [Open Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api).
- If multiple results are available, they should be displayed in a list where the user can select their preferred city.
- If no city is selected on the first launch, the modal should open automatically.
- The selected city should be stored in the browser's **localStorage**, so it is loaded automatically the next time the app is opened.

## Data Display
- The current temperature and weather condition (e.g., Clear, Rain, etc.) for the selected city should be displayed.
- A **7-day weather forecast** should be shown, including:
  - The day name.
  - The weather condition icon.
  - The probability of precipitation.
  - The minimum and maximum temperatures.
- After the city is selected, the weather data for the city should be retrieved using the **Open Meteo API** based on the city's coordinates: [Open Meteo API](https://open-meteo.com/en/docs/).

## Graph
- Below the 7-day forecast, a graph should display the **maximum temperatures** for each day.

## Technologies Used
- **React**: For handling frontend components.
- **Vite.js**: For the development and build environment.
- **Tailwind CSS**: For responsive styling.
- **Open Meteo API**: For weather and geocoding data.
- **Cypress**: For responsive testing on different devices (mobile, tablet, desktop).

## Task Steps
1. **City search and selection modal**: The user can search and select a city using a modal, with city data provided by the API.
2. **Weather data display**: Display the current weather condition and a 7-day forecast for the selected city.
3. **Graph**: A graph below the 7-day forecast to visually represent the daily maximum temperatures.
4. **Responsive design**: The application should function correctly across all screen sizes (mobile, tablet, desktop).

## Further Improvements
- Refine the modal's appearance and styling.
- Implement the detailed visual representation of the weather graph.
- Add additional features and tests to verify responsive behavior.
