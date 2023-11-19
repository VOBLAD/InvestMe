const filterButtons = document.querySelectorAll(".btns button");
const stocks = document.querySelectorAll(".main-container .container");
const mainContainer = document.querySelector(".main-container");


mainContainer.classList.add('hide');

const Finv = (e) => {

    stocks.forEach(container => {
        if(container.dataset.name === e.target.dataset.filter) {
            return container.classList.replace("hide", "show");
        }
        container.classList.add("hide");
        mainContainer.classList.remove('hide');
    });
    
}

filterButtons.forEach(button => button.addEventListener("click", Finv));
