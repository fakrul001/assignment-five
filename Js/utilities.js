function addingDonation(donation, input){
    const currentBalance = document.getElementById('current-balance').innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const donationAmount = document.getElementById(donation).innerText;
    const donationAmountNumber = parseFloat(donationAmount);
    const inputDonation = document.getElementById(input).value;
    const inputDonationNumber = parseFloat(inputDonation);

    const currentTotalBalance = currentBalanceNumber - inputDonationNumber ;
    const totalDonation = donationAmountNumber + inputDonationNumber;

    document.getElementById('current-balance').innerText = `${currentTotalBalance} BDT`;
    document.getElementById(donation).innerText = `${totalDonation} BDT`;
    document.getElementById(input).value = '';
}

function showSectionById(id){
    document.getElementById('donation').classList.add('hidden')
    document.getElementById('history').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}
