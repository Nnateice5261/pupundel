const apiUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_ALL&page=1';
const token = '4924c109-65ff-45a5-9ddc-755a4b769c30'; // Replace with your actual token
let array_posters
fetch(apiUrl, {
    headers: {
        'X-API-KEY':token
    }
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        
        const apiDataDiv = document.getElementById('apiData');
        apiDataDiv.style.backgroundImage = `url(${data.items[0].posterUrl})`;
    })
    .catch(error => console.error('Error fetching API data:', error));


document.getElementById('saveButton').addEventListener('click', () => {
    const data = document.getElementById('dataToSave').value;

    fetch('/save', { // Sends data to the server
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: data })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Server response:', data.message); //Handle server response
        localStorage.setItem('myData', data.message); // Save *confirmation message* from server to localStorage
    })
    .catch(error => console.error('Error saving data:', error));
});