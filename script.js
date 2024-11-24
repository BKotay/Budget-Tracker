// First, I will make a class called Total that will store the 

class Total {
    constructor(){
     this.income = [];
     this.expense = [];
     this.savings = 0;
     this.loss = 0;
    }
    

    takeIncome(amount) {
        if (!isNaN(amount) && amount > 0) {
            this.income.push(amount);
            this.savings += amount;
            this.renewBudget();
        } else {
            alert("The income description or amount was not entered correctly, try again.");
        }
    }

    takeExpense(amount) {
        if (!isNaN(amount) && amount > 0) {
            this.expense.push(amount);
            this.loss += amount;
            this.renewBudget();
        }else {
            alert("The expense description or amount was not entered correctly, try again.");
        }
    }

    renewBudget() {
        document.getElementById("earnings-number").textContent = this.savings;
        document.getElementById("expenses-number").textContent = this.loss;
        document.getElementById("final-number").textContent = this.savings - this.loss;
    }
}


const total = new Total ();

document.getElementById("income-button").addEventListener
("click", function(event) {
    event.preventDefault();
    const incDescription = document.getElementById("income-description").value;
    const incAmount = parseFloat(document.getElementById("income-money").value);
    total.takeIncome(incAmount);
    const message = document.querySelector('.message')
message.innerText = `The name of the most recent income is ${incDescription} and the most recent income amount is ${incAmount}.`
    event.target.reset();
})

document.getElementById("expense-button").addEventListener("click", function(event){
event.preventDefault();
const expDescription = document.getElementById("expense-description").value;
const expAmount = parseFloat(document.getElementById("expense-money").value);
total.takeExpense(expAmount);
const message = document.querySelector('.message')
message.innerText = `The name of the most recent expense is ${expDescription} and the most recent expense amount is ${expAmount}.`
event.target.reset();
})

