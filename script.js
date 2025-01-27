const accordionTitles = document.querySelectorAll(".accordion-title");

const openThis = ({ target }) => {
  const text = target.parentElement.querySelector("p");
  if (text.style.top !== "0px") {
    text.style.top = text.style.top = "0";
    target.style.background = "#ccc"
  } else {
    text.style.top = `${text.scrollHeight + 20}px`;
    target.style.background = "#fff"
  }
};

accordionTitles.forEach((title) => {
  title.addEventListener("click", openThis);
});
