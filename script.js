// First, I will make a class called Total that will store a constructor method that will create and initialize the objects being used. As said in the requirements I sepereated the this.income and this.expense with arrays[].

class Total {
    constructor(){
     this.income = [];
     this.expense = [];
     this.savings = 0;
     this.loss = 0;
     this.final = 0;
    }
    
//takeIncome will be used to push this.income into the function and this.savings to add or equal to the parameter amount but only if the amount of the income is a number or greater than zero. if these two are not valid then a alert will print out.

    takeIncome(amount) {
        if (!isNaN(amount) && amount > 0) {
            this.income.push(amount);
            this.savings += amount;
            this.renewBudget();
        } else {
            alert("The income description or amount was not entered correctly, try again.");
        }
    }

    // takeExpense will be used similar to the way takeIncome is used. The alert will print out if the amount of the expense is a number or if its greater than zero. If these two are not valid then a alert will print out.

    takeExpense(amount) {
        if (!isNaN(amount) && amount > 0) {
            this.expense.push(amount);
            this.loss += amount;
            this.renewBudget();
        }else {
            alert("The expense description or amount was not entered correctly, try again.");
        }
    }

    //renewBudget contains the HTML ID elements that will show the text through the method of textContent of the calculations from the objects from the class Total. We sttack these ID's through getElementBYID and set it equal to the price of either the income, expense or final balance. toFixed is used to set certain decimal points. 

    renewBudget() {
        this.final = this.savings - this.loss;
        document.getElementById("earnings-number").textContent = this.savings.toFixed(2);
        document.getElementById("expenses-number").textContent = this.loss.toFixed(2);
        document.getElementById("final-number").textContent = this.final.toFixed(2)
    }
}

//We enscapsulate the data by creating a new class which allows certain functionalities and created new objects if needed to leverage principles such as inheritance to reduce the use of redundant code. We attack the income button and addEVentListener to listen for a click so it can run the funcftion. The use of prevent default is a bug that prevents the page froma utomatically refreshing once the button is clicked. We use innerTect to print it out the price and template literal after you have hit the income or expense button after typing the name of the description and amount.

const total = new Total ();

document.getElementById("income-button").addEventListener
("click", function(event) {
    event.preventDefault();
    const incDescription = document.getElementById("income-description").value;
    const incAmount = parseFloat(document.getElementById("income-money").value);
    total.takeIncome(incAmount);
    const message = document.querySelector('.message')
message.innerText = `The name of the most recent source of income was ${incDescription} and the amount of the that income was $ ${incAmount}.`
})

document.getElementById("expense-button").addEventListener("click", function(event){
event.preventDefault();
const expDescription = document.getElementById("expense-description").value;
const expAmount = parseFloat(document.getElementById("expense-money").value);
total.takeExpense(expAmount);
const message = document.querySelector('.message-two')
message.innerText = `The name of the most recent expense was ${expDescription} and the amount of that expense was $ ${expAmount}.`
})


