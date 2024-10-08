document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href = 'blog.html'
})

document.getElementById('btn-donation').addEventListener('click', function(){
    changeButtonColor('btn-donation');
    showSectionById('donation')
})


// Noakhali Donation:

document.getElementById('btn-donation-noakhali').addEventListener('click', function(){
    const donationInput = document.getElementById('input-donation-noakhali');
    const donationInputValue = donationInput.value;
    const donationInputNumber = parseFloat(donationInputValue);
    const currentBalance = document.getElementById('current-balance')
    const currentBalanceAmount = currentBalance.innerText;
    const currentBalanceNumber = parseFloat(currentBalanceAmount);

    const title = document.getElementById('donation-noakhali-title').innerText;

    // validation:
    if(donationInputNumber > currentBalanceNumber){
        alert(`You do not have sufficient balance`);
        document.getElementById('current-balance').innerText = currentBalanceAmount;
        donationInput.value = '';
        return;
    }
    
    
    if(isNaN(donationInputNumber) || donationInputNumber < 0){
        alert('Invalid input!!!, Please provide valid amount')
        document.getElementById('current-balance').innerText = currentBalanceAmount;
        donationInput.value = '';
        return;
    }
    
    if(donationInputNumber === ''){
        alert(`Please provide valid donation amount`);
        document.getElementById('current-balance').innerText = currentBalanceNumber;
        return;
    }
    addingDonation('donation-noakhali', 'input-donation-noakhali');
    // donationInputValue.value = '';

    // show donation history:
    const div = document.createElement('div');
    div.innerHTML = `
        <h3 class = "text-2xl font-bold my-4">${donationInputValue} taka is donated for ${title}</h3>
    `
    document.getElementById('history').appendChild(div);
})


// Feni Donation:

document.getElementById('btn-donation-feni').addEventListener('click', function(){
    const donationInput = document.getElementById('input-donation-feni');
    const donationInputValue = donationInput.value;
    const donationInputNumber = parseFloat(donationInputValue);
    const currentBalance = document.getElementById('current-balance')
    const currentBalanceAmount = currentBalance.innerText;
    const currentBalanceNumber = parseFloat(currentBalanceAmount);

    // validation:
    if(donationInputNumber > currentBalanceNumber){
        alert(`You do not have sufficient balance`);
        document.getElementById('current-balance').innerText = currentBalanceAmount;
        donationInput.value = '';
        return;
    }
    
    
    if(isNaN(donationInputNumber) || donationInputNumber < 0){
        alert('Invalid input!!!, Please provide valid amount')
        document.getElementById('current-balance').innerText = currentBalanceAmount;
        donationInput.value = '';
        return;
    }
    
    if(donationInputNumber === ''){
        alert(`Please provide valid donation amount`);
        document.getElementById('current-balance').innerText = currentBalanceNumber;
        return;
    }
    addingDonation('donation-feni', 'input-donation-feni');
    
    donationInputValue.value = '';
})


// Quota Movement Donation:

document.getElementById('btn-donation-quota').addEventListener('click', function(){
    const donationInput = document.getElementById('input-donation-quota');
    const donationInputValue = donationInput.value;
    const donationInputNumber = parseFloat(donationInputValue);
    const currentBalance = document.getElementById('current-balance')
    const currentBalanceAmount = currentBalance.innerText;
    const currentBalanceNumber = parseFloat(currentBalanceAmount);
    
    // validation:
    if(donationInputNumber > currentBalanceNumber){
        alert(`You do not have sufficient balance`);
        document.getElementById('current-balance').innerText = currentBalanceAmount;
        donationInput.value = '';
        return;
    }
    
    
    if(isNaN(donationInputNumber) || donationInputNumber < 0){
        alert('Invalid input!!!, Please provide valid amount')
        document.getElementById('current-balance').innerText = currentBalanceAmount;
        donationInput.value = '';
        return;
    }
    
    if(donationInputNumber === ''){
        alert(`Please provide valid donation amount`);
        document.getElementById('current-balance').innerText = currentBalanceNumber;
        return;
    }
    addingDonation('donation-quota', 'input-donation-quota');
    
    donationInputValue.value = '';
})



document.getElementById('btn-history').addEventListener('click', function(){
    changeButtonColor('btn-history'); 
    showSectionById('history');
})