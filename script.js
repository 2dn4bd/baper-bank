// step 1: add click event handler with the submit button
document.getElementById('submit-btn').addEventListener('click', function(){
    //step 2: get the email address inside the email inpur field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email')
    const email = emailField.value;
    //step 3: to get password inside the password field
    //always remember to use .value to get text from an input field
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value;
    //! danger way to verify email and password on the client side ( don't use this way )
    // step 4: verify email and password
    if(email ===  'sohelrana305225@gmail.com' && password === 'sohelrana880'){
        location.href = 'Dashboard.html';
    }
    else{
        alert(`hey stop, it's not your Bap er bank okay ? your should login your own Bap er bank for get free money`);
    }
})
