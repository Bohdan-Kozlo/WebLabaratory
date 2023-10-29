const findButton = document.getElementById("find_button");
const cancelButton = document.getElementById("cancel_button");
const searchInput = document.getElementById("search_input");
const itemsContainer = document.getElementById("items-container");
const sortInput = document.getElementById("sort_input");
const countButton = document.getElementById("count_total");
const countValue = document.getElementById("count-value");
const countryInputCreate = document.getElementById("countryInput");
const durationInputCreate = document.getElementById("durationInput");
const costInputCreate = document.getElementById("costInput");
const saveButton = document.getElementById("saveNewCard");
let removeButtons = 0;
const saveButtonEdit = document.getElementById("saveButton");
const duscriptionCreated = document.getElementById("duscriptionInput")


let isSorted = false;
let tour_tickets = [];
let sort_items = [];

const BASE_URL = 'http://localhost:5000/api'
const RESURSE_URL = `${BASE_URL}/tours`

const baseRequest = async ({urlPath = "", method = 'GET', body = null}) => {
    try {
        const reqParams = {
            method,
            headers: {
                'Content-Type': 'application/json'
            }
        }

        if(body) {
            reqParams.body = JSON.stringify(body)
        }
        console.log(`${RESURSE_URL}${urlPath}`)
        return await fetch(`${RESURSE_URL}${urlPath}`, reqParams)
    } catch (error) {
        console.log(error)
    }
}

const getTours = async () => {
    const res =  await baseRequest({method: "GET"})
    return res.json()
}

const postTour = async (body) => {
    const res = await baseRequest({method: "POST", body})
    return res.json()
}

const deleteTour = async (id) => {
    const res = await baseRequest({ urlPath: `/${id}`, method: "DELETE"} )
    return res.json()
}

const putTour = async (id, body) => {
   const res = await baseRequest({urlPath: `/${id}`, method: "PUT", body})
    return res.json()
}


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

// 2 Labs

saveButton.addEventListener("click", () => {
    const country = countryInputCreate.value;
    const duration = durationInputCreate.valueAsNumber;
    const cost = costInputCreate.valueAsNumber;
    const description = duscriptionCreated.value

    if (!country || !duration || !cost || !description || duration < 0) {
        let errorMessage = 'Invalid data.';

        if (!country) {
            errorMessage += '\nCountry is required.';
        }

        if (duration < 0) {
            errorMessage += "'\nduration is required.';"
        }

        if (cost < 0) {
            errorMessage += "'\nCost is required.'"
        }
        if (!duration) {
            errorMessage += '\nDuration is required.';
        }
        if (!cost) {
            errorMessage += '\nCost is required.';
        }
        if (!description) {
            errorMessage += '\nDescription is required.';
        }

        alert(errorMessage);
        return;
    }
    const newTour = {
        country: country,
        duration: duration,
        cost: cost,
        description: description
    }
    countryInputCreate.value = ""
    durationInputCreate.value = ""
    costInputCreate.value = ""
    duscriptionCreated.value = ""

    postTour(newTour).then((data) => {
        renderItems(data)
    })

});

refetchTours()

removeButtons = document.querySelectorAll(".remove-button.btn.btn-danger");
const container = document.getElementById("items-container");

container.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-button")) {
        const itemContainer = event.target.closest('.col-md-6.mb-5')

        const idContainer = itemContainer.getAttribute('id')

        deleteTour(idContainer).then((data) => {
            renderItems(data)
        })
    }
});


container.addEventListener("click", (event) => {

    if (event.target.classList.contains("edit-button")) {

        const itemContainer = event.target.closest('.col-md-6.mb-5');
        const country = itemContainer.querySelector('.card-title').textContent;
        const index = tour_tickets.findIndex(item => item.country === country);
        const idContainer = parseFloat(itemContainer.getAttribute('id'))
        const countryInputEdit = document.getElementById("countryEdit");
        const durationInputEdit = document.getElementById("durationEdit");
        const costInputEdit = document.getElementById("costEdit");
        const duscriptionEdit = document.getElementById("duscriptionEdit");

        countryInputEdit.value = tour_tickets[index].country;
        durationInputEdit.value = tour_tickets[index].duration;
        costInputEdit.value = tour_tickets[index].cost;
        duscriptionEdit.value = tour_tickets[index].description;

        saveButtonEdit.addEventListener("click", () => {
            const newCountry = countryInputEdit.value;
            const newCost = parseFloat(costInputEdit.value);
            const newDuration = parseFloat(durationInputEdit.value)
            const newDucsription = duscriptionEdit.value;

            if (!newCountry || !newDuration || !newCost || !newDucsription || newDuration < 0 || newCost < 0) {
                let errorMessage = 'Invalid data.';

                if (!newCountry) {
                    errorMessage += '\nCountry is required.';
                }
                if (!newDuration) {
                    errorMessage += '\nDuration is required.';
                }

                if (newDuration < 0) {
                    errorMessage += '\nDuration is required.';
                }

                if (newCost < 0) {
                    errorMessage += '\nCost is required.';
                }
                if (!newCost) {
                    errorMessage += '\nCost is required.';
                }
                if (!newDucsription) {
                    errorMessage += '\nDescription is required.';
                }

                alert(errorMessage);
                return;
            }

            const updateTour = {
                id: idContainer,
                country: newCountry,
                duration: newDuration,
                cost: newCost,
                description: newDucsription
            }
            putTour(idContainer, updateTour).then((data) => {
                renderItems(data)
            })
            console.log(newCountry);
        });
    }
});