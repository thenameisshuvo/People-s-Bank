const loginBTN = document.getElementById('login');
       loginBTN.addEventListener('click',function()
       {
        if (document.getElementById('email').value == "xyz@gmail.com" && document.getElementById('password').value == "12345678")
        {
           const loginArea = document.getElementById("login-area");
           loginArea.style.display = "none";
           const transactionArea = document.getElementById("transaction-area");
           transactionArea.style.display = "block";
       }
       else
        {
            alert("Your Email or Password entered is wrong!!");
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
        }
       })


       //deposit button event handler
       const depositBtn = document.getElementById("addDeposit");
       depositBtn.addEventListener('click',function()
       {
           const depositAmount = getInputNumber("depositAmount");

        updateSpanDepositText("currentDeposit",depositAmount);

          updateSpanDepositText("currentBalance",depositAmount);

           document.getElementById("depositAmount").value = "";
       })
       function updateSpanDepositText(id,AddedNumber)
       {
        const current = document.getElementById(id).innerText;
           const currentNumber = parseFloat(current);
           console.log(currentNumber);
           const
           totalAmount = currentNumber + AddedNumber;
           document.getElementById(id).innerText = totalAmount;
       }

       //withdraw button event handler
       const withdrawBtn = document.getElementById("addWithdraw");
       withdrawBtn.addEventListener('click',function()
       {
            const AmountNumber = getInputNumber("withdrawAmount")
            updateSpanDepositText("currentWithdraw",AmountNumber);
            updateSpanWithdrawText("currentBalance",AmountNumber);
            document.getElementById("withdrawAmount").value = "";
       })

       function getInputNumber(id)
       {
            const Amount = document.getElementById(id).value;
            const AmountNumber = parseFloat(Amount);
            return AmountNumber;
       }

       function updateSpanWithdrawText(id,withdrawNumber)
       {
            const current = document.getElementById(id).innerText;
           const currentNumber = parseFloat(current);
           console.log(currentNumber);
           const
           totalAmount = currentNumber - withdrawNumber;
           document.getElementById(id).innerText = totalAmount;
       }


// Logout button event handler
const logoutBTN = document.getElementById('logout');
logoutBTN.addEventListener('click', function() {
    const loginArea = document.getElementById("login-area");
    const transactionArea = document.getElementById("transaction-area");

    // Reset the display properties
    loginArea.style.display = "flex";
    transactionArea.style.display = "none";

    // Optionally reset email and password inputs
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
});


document.getElementById("calculate-loan").addEventListener('click', function() {
    const amount = parseFloat(document.getElementById("loan-amount").value);
    const rate = parseFloat(document.getElementById("interest-rate").value) / 100 / 12;
    const period = parseInt(document.getElementById("repayment-period").value) * 12;

    const monthlyRepayment = (amount * rate) / (1 - Math.pow(1 + rate, -period));
    const totalRepayment = monthlyRepayment * period;

    document.getElementById("monthly-repayment").innerText = monthlyRepayment.toFixed(2);
    document.getElementById("total-repayment").innerText = totalRepayment.toFixed(2);
});
