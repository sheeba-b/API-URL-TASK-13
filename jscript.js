document.getElementById('getDataBtn').addEventListener('click', getData);

function getData() {
  // Example of fetching data from an API
  fetch("https://virbo.wondershare.com/tips-and-tricks/anime-websites.html")
    .then(response => response.json())
    .then(data => {
      // Display data on the page
      const outputDiv = document.getElementById('output');
      outputDiv.innerHTML = '';
      data.forEach(item => {
        const p = document.createElement('p');
        p.textContent = item.name; // Example: assuming the API returns an array of objects with a 'name' property
        outputDiv.appendChild(p);
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}