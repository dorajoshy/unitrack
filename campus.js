// Example campus data (rooms or locations with coordinates)
const campusMap = {
    "library": { x: 2, y: 3 },
    "cafeteria": { x: 4, y: 5 },
    "lab": { x: 6, y: 1 },
    "gym": { x: 1, y: 7 }
};

// Function to simulate finding the shortest route (this can be expanded to use algorithms like Dijkstra or A*)
function findRoute() {
    const destination = document.getElementById("destination").value.toLowerCase();
    const routeDetails = document.getElementById("route-details");

    if (campusMap[destination]) {
        // A simple example showing coordinates for the shortest route
        const destinationCoords = campusMap[destination];
        routeDetails.innerHTML = The shortest route to ${destination} is to walk to coordinates (x: ${destinationCoords.x}, y: ${destinationCoords.y}).;
    } else {
        routeDetails.innerHTML = "Sorry, destination not found. Please try again.";
    }
}