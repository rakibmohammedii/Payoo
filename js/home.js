// add money to the account


// s1- add an  event handler and prevent page reload after form submit
// s2- get money to be added to the account balance
// s3- get the pin number provided
// s4-verify the pinNumberInput
// s5- get current balance
// step1- add an event handler to the money button inside the Form 
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault;

    // step2-get money to be added to the account balance
    const addMoney = document.getElementById('input-add-money').value;
    console.log(addMoney)
    // s3- get the pin number provide
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

    // verify the pinNumberInput
    if( pinNumberInput === "1111"){
        console.log('adding money to your account');
        // s5- get current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);
        // step6-get new added balance
        const addMoneyNumber = parseFloat(addMoney);
        const balanceNumber = parseFloat(balance);
        const updatedBalance = addMoneyNumber + balanceNumber;
        console.log(updatedBalance);
        // s7-set the balance in ui
        document.getElementById('account-balance').innerText = updatedBalance;
    }
    else{
        alert('failed Please try again later');
    }
})