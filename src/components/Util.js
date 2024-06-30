export const iconUrlFromCode = (code) =>
    `http://openweathermap.org/img/wn/${code}@2x.png`;

export const convertUnixTimeStampToLocalTime = (timestamp) => {
    // Assuming you have `weather` object with sunrise and sunset Unix timestamps
    const sunriseTimestamp = timestamp * 1000; // Convert seconds to milliseconds

    // Create Date objects
    const sunriseDate = new Date(sunriseTimestamp);

    // Format time into AM/PM format
    const sunriseTime = sunriseDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
     // Example output: "6:18 AM"
    return sunriseTime;
    // in-short
    //const date = new Date(timestamp * 1000);
    //return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}

export const Cities = ["Delhi", "Kolkata", "Chennai", "Kochi", "Gujrat"];