document.getElementById('search-btn').addEventListener('click', function() {
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;

    // Here you would typically make an AJAX request to the backend to fetch bus data based on the 'from' and 'to' values
    // For demonstration purposes, let's assume you have a function called 'fetchBuses' that returns bus data
    const buses = fetchBuses(from, to);

    // Clear previous search results
    document.getElementById('search-results').innerHTML = '';

    // Display search results
    buses.forEach(bus => {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result');
        resultDiv.innerHTML = `
            <h3>${bus.name}</h3>
            <p>Departure: ${bus.departureTime}, Arrival: ${bus.arrivalTime}</p>
            <p>Price: $${bus.price}</p>
            <button onclick="bookTicket('${bus.id}')">Book Now</button>
        `;
        document.getElementById('search-results').appendChild(resultDiv);
    });
});

// Function to book a ticket (simulated)
function bookTicket(busId) {
    // Here you would typically handle the booking process, either by redirecting to a booking page or showing a modal
    console.log(`Booking ticket for bus with ID ${busId}`);
}

// Function to fetch bus data from the backend (simulated)
function fetchBuses(from, to) {
    // Simulated bus data
    return [
        { id: 1, name: 'Bus 1', departureTime: '10:00 AM', arrivalTime: '02:00 PM', price: 25 },
        { id: 2, name: 'Bus 2', departureTime: '12:00 PM', arrivalTime: '04:00 PM', price: 30 },
        { id: 3, name: 'Bus 3', departureTime: '02:00 PM', arrivalTime: '06:00 PM', price: 35 },
    ];
}
