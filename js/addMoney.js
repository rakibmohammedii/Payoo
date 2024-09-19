/**
 * 1.add event listener to the add money button 
 * make sure to preventdefault to aviod relods
 * 2.get the add money amount
 * also get the pin number provided
 * 3.verify the pin number
 * if true allow the money to add
 * if false failed to add
 * 4.get the current balance\
 * 5.add money to current balance
 * 6.display this in ui
 */

document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault;

    console.log('added event handler');
    // get the money and pin Number
    const addMoney = document.getElementById('input-add-money').value;
    const pinNumber = document.getElementById('input-pin-number').value;
    // console.log(addMoney, pinNumber)
    if(pinNumber === '1111'){
        // console.log('money added')
        const balance= document.getElementById('account-balance').innerText;
        // console.log(balance);
        const balanceTaka = parseFloat(balance);
        const addMoneyTaka = parseFloat(addMoney);
        const updatedBalance = balanceTaka + addMoneyTaka;
        // console.log(updatedBalance);
        // update the balance in ui 
        document.getElementById('account-balance').innerText = updatedBalance;


    }
    else{
        alert('failed to add')
    }
})

