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


let notifications = document.querySelector('.notifications');
let warning = document.getElementById('warning');

function createToast(type, icon, title, text) {
  let newToast = document.createElement('div');
  newToast.innerHTML = `
            <div class="toast ${type}">
                <i class="${icon}"></i>
                <div class="content">
                    <div class="title">${title}</div>
                    <span>${text}</span>
                </div>
                <i class="fa-solid fa-xmark" onclick="(this.parentElement).remove()"></i>
            </div>`;
  notifications.appendChild(newToast);
  newToast.timeOut = setTimeout(
    () => newToast.remove(), 5000
  )
}

window.onload = function () {

  let type = 'warning';
  let icon = 'fa-solid fa-triangle-exclamation';
  let title = 'Aviso importante!';
  let text = 'Restam poucas vagas!';
  createToast(type, icon, title, text);


  setInterval(() => {
    let type = 'warning';
    let icon = 'fa-solid fa-triangle-exclamation';
    let title = 'Aviso importante!';
    let text = 'Mais pessoas estão visualizando essa página!';
    createToast(type, icon, title, text);
  }, 30000)
}


