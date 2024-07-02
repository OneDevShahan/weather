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

export const GetColorGradient = (weather) => {
    switch (weather) {
      case 'Rain':
        return 'bg-gradient-to-r from-gray-700 via-gray-900 to-black';
      case 'Clear':
        return 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600';
      case 'Snow':
        return 'bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500';
      case 'Clouds':
        return 'bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500';
      case 'Drizzle':
        return 'bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600';
      case 'Thunderstorm':
        return 'bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800';
      case 'Mist':
        return 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400';
      default:
        return 'bg-gradient-to-r from-blue-500 to-purple-500';
    }
  };