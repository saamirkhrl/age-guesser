document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("nameInput");
  const searchButton = document.getElementById("searchButton");
  const ageDisplay = document.querySelector(".age_display");
  const nameDisplay = document.querySelector(".name_display");

  searchButton.addEventListener("click", function () {
    if (!nameInput.value) {
      alert("Please enter a name.");
    } else {
      const apiUrl = `https://api.agify.io?name=${nameInput.value}`;
      console.log(nameInput.value);
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          const ageData = data.age;
          nameDisplay.innerHTML = `Your name: ${nameInput.value}`;
          ageDisplay.innerHTML = `Guessed age: ${ageData}`;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  });
});
