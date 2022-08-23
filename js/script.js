const arofObj = [
  {
    img: "https://secure.static.goal.com/167500/167528hp2.jpg",
    name: "Cristiano Ronaldo",
    textOne: 205,
    textTwo: 320,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpYnyTGkvdzVb_sFgtJe-NpT3w84ui_eQSGQ&usqp=CAU",
    name: "Kylian Mbappe",
    textOne: 300,
    textTwo: 655,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWP-ALrOiwXV0L7JVvAFhI5PMQzmn7srn3aA&usqp=CAU",
    name: "Lionel Messi",
    textOne: 800,
    textTwo: 250,
  },
  {
    img: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt8e1f444328de56ec/627ff3ee9154c30583900892/20220514_Robert_Lewandowski.jpg?auto=webp&fit=crop&format=jpg&height=800&quality=60&width=1200",
    name: "Robert Lewandowski",
    textOne: 405,
    textTwo: 260,
  },
  {
    img: "https://i.ytimg.com/vi/grTF8_YZXJY/maxresdefault.jpg",
    name: "Kevin De Bruyne",
    textOne: 600,
    textTwo: 456,
  },
  {
    img: "https://cdn-wp.thesportsrush.com/2020/05/Untitled-design-2020-05-11T225815.385.jpg",
    name: "Virgil van Dijk",
    textOne: 310,
    textTwo: 280,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9PccCnLacbDXC0tviZXLW1PCm5wswHBnfSw&usqp=CAU",
    name: "Harry Kane",
    textOne: 601,
    textTwo: 830,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZaR92ZwBULbalbAKuIGuaA7lm12In2sZlFQ&usqp=CAU",
    name: "Riyad Mahrez",
    textOne: 605,
    textTwo: 640,
  },
];

function createElementCard(elementObject) {
  const elem = document.getElementById("leftElement");
  const div = document.createElement("div");
  div.setAttribute("class", "col-lg-4 col-md-6");

  div.innerHTML = `

        <div class="card bg-primary shadow-lg">
            <img
            src=${elementObject.img}
            />
            <div
            class="card-body bg-dark text-light text-center rounded-bottom"
            >
            <h5 class="card-title">${elementObject.name}</h5>
            <p class="card-text">
                <span>${elementObject.textOne} Goals</span> . <span>${elementObject.textTwo} assist</span>
            </p>
            <a class="btnClicked btn btn-primary btn-lg w-100 rounded-0"
                >Select</a
            >
            </div>
        </div>

`;
  elem.appendChild(div);
}

for (item of arofObj) {
  createElementCard(item);
}

//common function
function findInputNumber(inputId) {
  const inputField = document.getElementById(inputId);
  const inputString = inputField.value;
  const inputFieldNumber = parseFloat(inputString);
  return inputFieldNumber;
}

function findElementValue(element) {
  const inputField = document.getElementById(element);
  const inputString = inputField.innerText;
  const inputFieldNumber = parseFloat(inputString);
  return inputFieldNumber;
}

function setElementValue(findElement, setValue) {
  const element = document.getElementById(findElement);
  element.innerText = setValue;
}

const btnclick = document.getElementsByClassName("btnClicked");
const selectedView = document.getElementById("selectedView");

for (btn of btnclick) {
  btn.addEventListener("click", function (Event) {
    const h4 = document.createElement("h4");
    const li = document.createElement("li");
    const playerName = Event.target.parentNode.children[0].innerText;
    li.innerText = playerName;
    h4.appendChild(li);

    if (selectedView.children.length >= 5) {
      alert("Please Stop creating Child dud😂");
    } else {
      Event.target.classList.add("disabled");
      Event.target.style.backgroundColor = "#787A91";
      Event.target.innerText = "Slected";
      selectedView.appendChild(h4);
    }
  });
}

let storeAmount;

document.getElementById("btnCalculate").addEventListener("click", function () {
  const budgetAmount = findInputNumber("budgetAmount");
  const playerQuantity = selectedView.children.length;
  const clearInput = document.getElementById("budgetAmount");

  if (isNaN(budgetAmount) != true && budgetAmount >0 ) {
    if (playerQuantity != 0) {
      const totalPlayerCost = budgetAmount * playerQuantity;
      storeAmount = totalPlayerCost;
      setElementValue("playerExpenses", totalPlayerCost);
      clearInput.value = "";
    } else {
        clearInput.value = "";
        alert("Add some Player first");
    }
  } else {
    clearInput.value = "";
    alert("Please Input a Number grater than 0");
  }
});

document
  .getElementById("calculateTotal")
  .addEventListener("click", function () {
    const Manager = findInputNumber("Manager");
    const coach = findInputNumber("coach");
    const clearManagerInput = document.getElementById("Manager");
    const clearcoachInput = document.getElementById("coach");
    


    if (storeAmount != "undefine" && isNaN(storeAmount) != true ) {
      if (isNaN(Manager) != true && isNaN(coach) != true && Manager >0 && coach >0) {
        const totalAmount = Manager + coach;
        const grandTotal = totalAmount + storeAmount;
        setElementValue("totalValue", grandTotal);
        clearManagerInput.value = "";
        clearcoachInput.value = "";
      } else {
        clearManagerInput.value = "";
        clearcoachInput.value = "";
        alert("Enter a number Graeter than 0");
      }
    } else {
       alert("Check upper requirements");
        clearManagerInput.value = "";
        clearcoachInput.value = "";
    }
  });
 