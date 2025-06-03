const form = document.getElementById("rating");
const submitButton = document.querySelector("button[type='submit']");
const ratingState = document.getElementById("rating-state");
const thankYouState = document.getElementById("thank-you-state");
const selectedRatingValue = document.getElementById("selected-rating-value");

submitButton.addEventListener("click", (event) => {
     event.preventDefault(); // Prevent default form submission

     // Get the selected radio input
     const selectedRating = form.querySelector("input[name='rating']:checked");

     if (selectedRating) {
          // Set the selected rating value in the thank-you screen
          selectedRatingValue.textContent = selectedRating.value;

          // Toggle views
          ratingState.classList.add("hidden");
          thankYouState.classList.remove("hidden");
     } else {
          alert("Please select a rating before submitting.");
     }
});
