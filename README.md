# TVO Weather

1. Google weather, review http://weather.com and https://www.theweathernetwork.com/en. 
2. Design TVO Weather UI
3. Create mockup (react/vite skeleton)
4. Break the UI into component hierarchy based on UI as:
    App   ------------------------------- Serve as root container.
    ├── Header  ------------------------- Consistant header, display title/logo/nav. 
    └── Weather ------------------------- Container for state management, user interaction.
        ├── WeatherDisplay -------------- Fetch weather and display.
        └── WeatherForm    -------------- User input location and submit query.
5. Build up the function (v1.functional development)
6. Style each component with CSS, add Quote of The Day to enrich the contents. (v2.CSS)

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
