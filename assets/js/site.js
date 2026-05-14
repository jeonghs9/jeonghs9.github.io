document.documentElement.classList.add("js");

document.querySelectorAll("[data-toggle-target]").forEach((button) => {
  const target = document.getElementById(button.dataset.toggleTarget);
  if (!target) return;

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    target.hidden = expanded;
    button.textContent = expanded ? "Show older updates" : "Hide older updates";
  });
});
