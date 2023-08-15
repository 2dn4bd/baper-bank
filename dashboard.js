// dashBorad
// deposit 
document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-input');
    const depositValue = depositField.value;
    const depoAmount = document.getElementById('deposit-amount');
    depoAmount.innerText = (depositValue);
    depositField.value = '';
})

//withdraw
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-input');
    const withdrawValue = withdrawField.value;
    const withAmount = document.getElementById('withdraw-amount');
    withAmount.innerText = (withdrawValue);
    withdrawField.value = '';
})
