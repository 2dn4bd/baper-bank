// dashBorad
// deposit 
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-input');
    const depositValue = depositField.value;
    const depoValueNumber = parseFloat(depositValue);
    const depoAmount = document.getElementById('deposit-amount');
    const depoTotal = depoAmount.innerText;
    const depoTotalNUmber = parseFloat(depoTotal)
    const currentTotal = depoTotalNUmber + depoValueNumber;
    depoAmount.innerText = currentTotal;
//balance
// deposit
    const balanceTotal = document.getElementById('balance-amount');
    const balanceTotalStr = balanceTotal.innerText;
    const mainBalanceTotal = parseFloat(balanceTotalStr);
    const currentBalance = mainBalanceTotal + depoValueNumber;
    balanceTotal.innerText = currentBalance;
    depositField.value = '';
})

//withdraw
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-input');
    const withdrawValue = withdrawField.value;
    const withdrawValueNumber = parseFloat(withdrawValue);
    const withAmount = document.getElementById('withdraw-amount');
    const withTotal = withAmount.innerText;
    const withTotalNUmber = parseFloat(withTotal);
    const currentTotal = withTotalNUmber + withdrawValueNumber;
    withAmount.innerText = currentTotal;
    withdrawField.value = '';
// balance
//withdraw
const balanceTotal = document.getElementById('balance-amount');
const balanceTotalStr = balanceTotal.innerText;
const mainBalanceTotal = parseFloat(balanceTotalStr);
const currentBalance = mainBalanceTotal - withdrawValueNumber;
balanceTotal.innerText = currentBalance;
})
