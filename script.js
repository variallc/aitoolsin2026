const form = document.getElementById('leadForm');
const box = document.getElementById('downloadBox');

form.addEventListener('submit', async function(e) {
  e.preventDefault();

  const data = new FormData(form);

  try {
    await fetch("https://formspree.io/f/mojplovw", {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    form.style.display = "none";
    box.style.display = "block";

  } catch (error) {
    alert("Something went wrong. Please try again.");
  }
});
