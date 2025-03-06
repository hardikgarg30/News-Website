// API URL
const apiUrl = 'https://the-hindu-national-news.p.rapidapi.com/news/23';

// Function to fetch and print data
const fetchData = async () => {
    try {
        // Make a GET request to the API with headers
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'the-hindu-national-news.p.rapidapi.com',
                'x-rapidapi-key': '02fe68bff2msh62072c9fa412473p16cdb0jsn79239f6f51f7',
                'Content-Type': 'application/json' // Optional, depending on the API
            }
        });
        
        // Check if the response is OK (status in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Convert the response to JSON
        const data = await response.json();
        
        // Print the data to the console
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Call the function to fetch and print data
fetchData();