// document.getElementById('form').addEventListener('submit', e=>{e.preventDefault(); tipCalculate()})

var value

//funtion called wen any if the tip button is clicked
//assigns the value of the tip value to the variable value
function tipValue(num) {
     value=num;
}

function tipCalculate(){
    
    
    //get the value of the bill
    var bill = document.getElementById('bill').value
    
    //get the value of the number of people
    var people = document.getElementById('people').value
    
    //get the value of the custom tip
    var custom =document.getElementById('custom').value

    //checks if user is using a custom tip and not any tip button
    //then assigns the custom tip to value
    //else, it will use the value of the tip button clicked/chosen
    if(custom!=""){
        value=custom
    }
    
    
    var tipPerson = (bill* value)/people
       

    const tipPerPerson = tipPerson.toFixed(2)

    var totalBill = (bill/people) + tipPerson
       const totalBillPerPerson =  totalBill.toFixed(2)

        display(tipPerPerson, totalBillPerPerson)

        
    if(people == 0){
        errorDisplay()
    }
}

   
function display(tip, total){
    var tipAmount = document.getElementById('place')
    var Amount = document.getElementById('place-1')

    tipAmount.innerHTML = `$ ${tip}`
    Amount.innerHTML = `$ ${total}`

}

function errorDisplay(){
    var peopl = document.getElementById('people')
    var err = document.querySelector('.error');
    peopl.style.border = "2px solid red"
    people.style.borderRadius = "5px"
    err.style.visibility = "visible"
}