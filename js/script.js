// console.log('button checking file added')
// step-1: set event handler                        
// document. getElementById('login-btn').addEventListener('click', function(event){
//     // step-2: prevent default behavior
//     event.preventDefault
//     // console.log('log-in button clicked');
//     // step-3: get the phone Number
//     const phoneNumber = document.getElementById('phone-number').value;
//     console.log(phoneNumber)
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log( pinNumber);
//     // step-4: validate your phoneNumber and pinNumber
//     if(phoneNumber === '01824247034' && pinNumber === '1234'){
//         console.log('congratulations! you are logged in');
// // allow user to logged in
//     }
//     else {
//         console.log('wrong number or pin')
//     }


// })
document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault;
    //  get phone number and pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber =  document.getElementById('pin-number').value;
    console.log( phoneNumber, pinNumber);
    if( phoneNumber === '01518965869'&& pinNumber === '1111'){
        console.log('you are logged in!');
        window.location.href = '/home.html'
    }
    else {
        alert('wrong phone number or pin number')
    }
})
