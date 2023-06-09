document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".news");
    const buttonsHtml = Array.from(items, () => {
      return `<span class="news-button"></span>`;
    });
  
    carousel.insertAdjacentHTML("beforeend",`
      <div class="news-nav">
        ${ buttonsHtml.join("") }
      </div>
    `);
  
    const buttons = carousel.querySelectorAll(".news-button");
  
    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        items.forEach(item => item.classList.remove("news--selected"));
        buttons.forEach(button => button.classList.remove("news-button--selected"));
  
        items[i].classList.add("news--selected");
        button.classList.add("news-button--selected");
      });
    });
  
    items[0].classList.add("news--selected");
    buttons[0].classList.add("news-button--selected");
  });