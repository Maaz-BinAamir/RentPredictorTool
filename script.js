function handleSubmit(event) {
    event.preventDefault();

    const bedroom = parseInt(document.getElementById('bedrooms').value);
    const bathroom = parseInt(document.getElementById('bathrooms').value);
    const marlas = parseInt(document.getElementById('size').value);

    fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input_data: [[bedroom, bathroom, marlas]] })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('display').innerText = `Rent: PKR${data.predictions}`;
    })
    .catch(error => console.error('Error:', error));
}

    // Change id "display" to show bedroom, bathroom, and marlas
    // document.getElementById('display').innerText = `Bedroom: ${bedroom}, Bathroom: ${bathroom}, Marlas: ${marlas}`;

window.onload = function() {
    document.getElementById('myForm').addEventListener('submit', handleSubmit);
};
