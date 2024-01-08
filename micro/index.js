let url = 'https://script.google.com/macros/s/AKfycbx9N6w1B9F5s2S-yS97sSxHMYfjwnG09L-fejwQepayiy69ZFCMTCR8-8HGaZ6Mn7bYpA/exec';
let form = document.querySelector("#form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let formData = new FormData(form);

    try {
        const response = await fetch(url, {
            method: "POST",
            body: formData
        });

        if (response.ok) {
            const finalResult = await response.text();
            console.log(finalResult);

            // Redirect to a new webpage after successful submission
            window.location.href = '\main.html';
        } else {
            console.error('Error:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
});
