// add money to the account


// s1- add an  event handler and prevent page reload after form submit
// s2- get money to be added to the account balance
// s3- get the pin number provided
// step1- add an event handler to the money button inside the Form 
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault;

    // step2-get money to be added to the account balance
    const addMoney = document.getElementById('input-add-money').value;
    console.log(addMoney)
    // s3- get the pin number provide
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput)
})