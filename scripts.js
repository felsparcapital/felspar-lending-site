// Duplicate marquee items so the CSS animation loops seamlessly.
const marqueeTrack = document.querySelector(".marquee__track");

if (marqueeTrack) {
  const items = Array.from(marqueeTrack.children);
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    marqueeTrack.appendChild(clone);
  });
}

// Prevent the Loan Programs toggle (now rendered as a link) from navigating.
document.querySelectorAll(".nav__dropdown-toggle").forEach((toggle) => {
  toggle.addEventListener("click", (event) => {
    event.preventDefault();
  });
});
