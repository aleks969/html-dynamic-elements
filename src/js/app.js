import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

   const body = document.querySelector("body");
   body.addEventListener("click", () => {
      for(let i = 0; i < 5; i++){
        const message = document.createElement('div');
        message.classList.add('message');
        body.append(message);
      }
  });

});


