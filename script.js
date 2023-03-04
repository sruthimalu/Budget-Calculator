function budgetCalc(){
    if(mIncome.value==0){
        alert('Please enter monthly income.!')
    }

    else{
    // expense=Math.floor(rent.value+food.value+utils.value+insurance.value+other.value);
    balance=eval(mIncome.value-rent.value-food.value-utils.value-insurance.value-other.value);
    expense=eval(mIncome.value-balance);
    console.log(expense);
    console.log(balance);

    result.innerHTML=``;
    result.innerHTML=` <p class=" text-success ">After your expenses you have <br> <span class=" text-danger" >${balance} Rs</span> left in your budget.<br> <br> Your Total expense: <span class=" text-danger" >${expense} Rs </span></p>` ;
    }

    
    
}