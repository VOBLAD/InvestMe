const filterButtons = document.querySelectorAll("#filter-buttons button");
const stocks = document.querySelectorAll(".main-container .container .card");

const Stock = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");

    stocks.forEach(card => {
       
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
}

filterButtons.forEach(button => button.addEventListener("click", Stock));




