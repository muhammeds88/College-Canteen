document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
      item.querySelector(".faq-question").addEventListener("click", function () {
          item.classList.toggle("active");
          const answer = item.querySelector(".faq-answer");
          if (item.classList.contains("active")) {
              answer.style.maxHeight = answer.scrollHeight + "px";
              answer.style.opacity = "1";
          } else {
              answer.style.maxHeight = "0";
              answer.style.opacity = "0";
              // Set a timeout to remove the border after the height transition ends
              setTimeout(() => {
                  item.classList.remove("active");
              }, 500); // Match this duration to your CSS transition
          }
      });
  });
});
