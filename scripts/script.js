document.addEventListener("DOMContentLoaded", () => {
  // === Twilight Mode Toggle ===
  const toggle = document.getElementById("twilight-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("twilight");
      document.querySelector("header")?.classList.toggle("twilight");
      document.querySelector("footer")?.classList.toggle("twilight");

      document.querySelectorAll(".menu-card").forEach(card =>
        card.classList.toggle("twilight")
      );
      
      document.querySelectorAll(".hero").forEach(card =>
        card.classList.toggle("twilight")
      );
      document.querySelectorAll(".golf-card").forEach(card =>
        card.classList.toggle("twilight")
      );
    });
  }

  // === GSPro Course Selector + Ball Trace ===
  const trace = document.getElementById("ball-trace");
  const title = document.getElementById("booth-course");

  const courseImages = document.querySelectorAll(".course-selector img");
  if (courseImages && trace && title) {
    courseImages.forEach(img => {
      img.addEventListener("click", () => {
        const course = img.dataset.course || "Unknown Course";
        title.textContent = `Now Playing: ${course}`;
        shootBall(trace);
      });
    });
  }

  function shootBall(ball) {
    ball.style.opacity = 1;
    ball.style.transition = "none";
    ball.style.transform = "translate(0, 0)";

    requestAnimationFrame(() => {
      ball.style.transition = "transform 1.2s ease-out, opacity 1.2s ease-out";
      ball.style.transform = "translate(250px, -200px)";
      ball.style.opacity = 0;
    });
  }
});
