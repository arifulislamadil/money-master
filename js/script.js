document.getElementById("calculate-btn").addEventListener("click", function () {
  //income field
  const incomeField = document.getElementById("income");
  const incomeValue = incomeField.value;
  const incomeParse = parseInt(incomeValue);
  

  //expenses field
  const foodField = document.getElementById("food");
  const foodValue = foodField.value;
  const foodParse = parseInt(foodValue);
  

  //rent field
  const rentField = document.getElementById("rent");
  const rentValue = rentField.value;
  const rentParse = parseInt(rentValue);
 

  //clothes field
  const clothesField = document.getElementById("clothes");
  const clothesValue = clothesField.value;
  const clothesParse = parseInt(clothesValue);
  

  //expenses Calculate;
  const expenses = foodParse + rentParse + clothesParse;
  const totalExpenses = incomeParse - expenses;
  const displayExpenses = document.getElementById("total-expense").innerText=expenses;

  //Balance 
  const balance= document.getElementById("balance").innerText = totalExpenses;

  //clean all field
  incomeField.value = "";
  foodField.value = "";
  rentField.value = "";
  clothesField.value = "";

});


// Saving Calculate 
document.getElementById("save-btn").addEventListener("click",function(){
    const saveField = document.getElementById("save");
    const saveInput = saveField.value;
    //Balance Amount 
    const balance = document.getElementById("balance");
    const balanceInner = balance.innerText;
    const balanceParse = parseInt(balanceInner);

    //Saving Amount 
    const savingAmount = (saveInput / 100) * balanceParse;
    const displaySavingAmount = document.getElementById("saving-amount").innerText = savingAmount;
    
    //Remaining Balance 
    const remainingBalance = balanceParse - savingAmount;
    const remaining = document.getElementById("remaining-balance").innerText=remainingBalance;

    saveField.value = ""
    //Done
})