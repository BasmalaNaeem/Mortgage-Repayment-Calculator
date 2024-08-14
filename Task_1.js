document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('mortgageForm');
    const clearBtn = document.getElementById('clearbtn');
    const repayBtn = document.getElementById('repaybtn');
    const rightSection = document.querySelector('.right-section');
    const mortgageInput = document.getElementById('MortgageInput');
    const termInput = document.getElementById('TermInput');
    const rateInput = document.getElementById('RateInput');
    const checkbox1 = document.getElementById('Checkbox1');
    const checkbox2 = document.getElementById('Checkbox2');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const mortgageAmount = parseFloat(mortgageInput.value);
        const termInYears = parseFloat(termInput.value);
        const interestRate = parseFloat(rateInput.value) / 100; 

        if (isNaN(mortgageAmount) || isNaN(termInYears) || isNaN(interestRate)) {
            alert('Please enter valid values.');
            return;
        }

        const monthlyInterestRate = interestRate / 12;
        const numberOfPayments = termInYears * 12;
        const monthlyPayment = mortgageAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
        const totalPayment = monthlyPayment * numberOfPayments;

        rightSection.innerHTML = `
            <div id="rescont">
                <h3>Your Results</h3>
                <p id="result">Your results are shown below based on the information you provided. To adjust the results, edit the form and click "Calculate repayments" again.</p>
                <div class="result-card">
                    <p>Your monthly repayments: <br><h3>$${monthlyPayment.toFixed(2)}<h3></p><hr>
                    <p>Total you will repay over the term: <br><h4>$${totalPayment.toFixed(2)}<h4></p>
                </div>
            </div>
        `;
    });

    clearBtn.addEventListener('click', function() {
        mortgageInput.value = '';
        termInput.value = '';
        rateInput.value = '';
        checkbox1.checked = false;
        checkbox2.checked = false;

        rightSection.innerHTML = `
            <img src="./illustration-empty.svg" alt="Illustration">
            <h3>Results Shown Here</h3>
            <p>Complete the form and click "Calculate repayments" to see what your monthly repayments would be.</p>
        `;
    });

});
