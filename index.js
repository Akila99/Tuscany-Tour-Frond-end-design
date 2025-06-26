      const scrollContainer = document.getElementById("scrollContainer");
      const leftArrow = document.getElementById("leftArrow");
      const rightArrow = document.getElementById("rightArrow");

      rightArrow.addEventListener("click", (e) => {
        e.preventDefault();
        scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
      });

      leftArrow.addEventListener("click", (e) => {
        e.preventDefault();
        scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
      });

      const reviewContainer = document.getElementById("reviewScrollContainer");
      const leftReviewArrow = document.getElementById("leftReviewArrow");
      const rightReviewArrow = document.getElementById("rightReviewArrow");

      // Adjust scroll amount according to the width + gap of your review cards
      const scrollAmount = 340; // example: width (300px) + gap (40px)

      rightReviewArrow.addEventListener("click", (e) => {
        e.preventDefault();
        reviewContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });

      leftReviewArrow.addEventListener("click", (e) => {
        e.preventDefault();
        reviewContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      });

     const hamburger = document.getElementById("hamburger");
     const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        console.log("cliked")
        navLinks.classList.toggle("active"); 
        });

