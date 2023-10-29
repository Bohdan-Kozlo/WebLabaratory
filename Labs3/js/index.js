const findButton = document.getElementById("find_button");
const cancelButton = document.getElementById("cancel_button");
const searchInput = document.getElementById("search_input");
const itemsContainer = document.getElementById("items-container");
const sortInput = document.getElementById("sort_input");
const countButton = document.getElementById("count_total");
const countValue = document.getElementById("count-value");


let isSorted = false;
let tour_tickets = [];
let sort_items = [];



const renderItems = (items) => {
    itemsContainer.innerHTML = "";
    for (const item of items) {
        addItemToPage(item);
    }
};

const refetchTours = async () => {
    const allTours = await getTours()
    tour_tickets = allTours
    renderItems(tour_tickets)
}

findButton.addEventListener("click", (event) => {
    event.preventDefault();
    const searchString = searchInput.value;

    const regex = new RegExp(searchString, "i");

    sort_items = tour_tickets.filter((ticket) =>
        regex.test(ticket.country)
    );
    isSorted = true;

    renderItems(sort_items);
});

cancelButton.addEventListener("click", () => {
    renderItems(tour_tickets);
    searchInput.value = "";
    isSorted = false;
});

sortInput.addEventListener("change", async () => {
    sort_items = await getTours()
    tour_tickets = await getTours()
    if (isSorted) {
        const sortedTickets = [...sort_items].sort(compareByValue);
        renderItems(sortedTickets);
        isSorted = true;
    } else {
        const sortedTour = [...tour_tickets].sort(compareByValue)
        renderItems(sortedTour);
        isSorted = false;
    }
});

countButton.addEventListener("click", () => {
    let value = 0;
    if (isSorted) {
        for (const item of sort_items) {
            value += item.cost;
        }
    } else {
        for (const item of tour_tickets) {
            value += item.cost;
        }
    }

    countValue.textContent = `${value}$`;
});

const itemTemplate = ({id, country, cost, duration,description}) => `
<div class="col-md-6 mb-5" id="${id}">
  <div class="card" style="width: 26rem;">
     <img src="image/hottours-03.jpg" class="card-img-top" alt="...">
        <div class="card-body">
         <h3 class="card-title">${country}</h3>
           <p class="card-text">${description}.</p>
           <h5 class="card-title">Duration: ${duration} days</h5>
           <h4 class="card-title">Cost: ${cost}$</h4>
           <button type="button" class="edit-button btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal">
              Edit
          </button>
          <button type="button" class="remove-button btn btn-danger">
              Remove
          </button>
        </div>
  </div>
</div>`;

const addItemToPage = ({country, cost, duration, id, description}) => {
    itemsContainer.insertAdjacentHTML("afterbegin",
        itemTemplate({country, cost, duration, id, description}));
};

const compareByValue = (a, b) => {
    return a.cost - b.cost;
};
