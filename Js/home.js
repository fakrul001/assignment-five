document.getElementById("btn-blog").addEventListener("click", function () {
  window.location.href = "blog.html";
});

document.getElementById("btn-donation").addEventListener("click", function () {
  changeButtonColor("btn-donation");
  showSectionById("donation");
});

// Noakhali Donation:

document
  .getElementById("btn-donation-noakhali")
  .addEventListener("click", function () {
    const donationInput = document.getElementById("input-donation-noakhali");
    const donationInputValue = donationInput.value;
    const donationInputNumber = parseFloat(donationInputValue);
    const donationInputIntegerNumber = Math.floor(donationInputNumber)
    const currentBalance = document.getElementById("current-balance");
    const currentBalanceAmount = currentBalance.innerText;
    const currentBalanceNumber = parseFloat(currentBalanceAmount);
    const modal = document.getElementById('modal_noakhali')

    const title = document.getElementById("donation-noakhali-title").innerText;

    const date = new Date();


    // validation:
    if (donationInputIntegerNumber > currentBalanceNumber) {
      alert(
        `Insufficient Balance!! Please provide amount within the range of current balance.`
      );
      document.getElementById("current-balance").innerText =
        currentBalanceAmount;
      donationInput.value = "";
      modal.close();
      return;
    } else if (isNaN(donationInputIntegerNumber) || donationInputNumber < 0) {
      alert(`Please provide valid donation amount`);
      document.getElementById("current-balance").innerText =
      currentBalanceAmount;
      donationInput.value = "";
      modal.close();
      return;
    } else if (donationInputIntegerNumber === "") {
      alert(`Please provide valid donation amount`);
      document.getElementById("current-balance").innerText =
      currentBalanceNumber;
      modal.close();
      return;
    }
    addingDonation("donation-noakhali", "input-donation-noakhali");
    donationInput.value = '';


    // show donation history:
    const div = document.createElement("div");
    div.classList.add(
      "border-2",
      "border-slate-400",
      "p-4",
      "rounded-lg",
      "mb-4"
    );
    div.innerHTML = `
    <h3 class = "text-2xl font-bold mb-4">${donationInputIntegerNumber} taka is donated for ${title}</h3>
    <p class = "font-semibold">Date: ${date}</p>
    `;
    document.getElementById("history").appendChild(div);
  });

// Feni Donation:

document
  .getElementById("btn-donation-feni")
  .addEventListener("click", function () {
    const donationInput = document.getElementById("input-donation-feni");
    const donationInputValue = donationInput.value;
    const donationInputNumber = parseFloat(donationInputValue);
    const donationInputIntegerNumber = Math.floor(donationInputNumber);
    const currentBalance = document.getElementById("current-balance");
    const currentBalanceAmount = currentBalance.innerText;
    const currentBalanceNumber = parseFloat(currentBalanceAmount);
    const modal = document.getElementById('modal_feni')
    
    const title = document.getElementById("donation-feni-title").innerText;

    const date = new Date();

    // validation:
    if (donationInputIntegerNumber > currentBalanceNumber) {
      alert(
        `Insufficient Balance!! Please provide amount within the range of current balance.`
      );
      document.getElementById("current-balance").innerText =
        currentBalanceAmount;
      donationInput.value = "";
      modal.close();
      return;
    } else if (isNaN(donationInputIntegerNumber) || donationInputNumber < 0) {
      alert(`Please provide valid donation amount`);
      document.getElementById("current-balance").innerText =
      currentBalanceAmount;
      donationInput.value = "";
      modal.close();
      return;
    } else if (donationInputIntegerNumber === "") {
      alert(`Please provide valid donation amount`);
      document.getElementById("current-balance").innerText =
      currentBalanceNumber;
      modal.close();
      return;
    }

    addingDonation("donation-feni", "input-donation-feni");
    donationInputValue.value = "";

    // show donation history:
    const div = document.createElement("div");
    div.classList.add(
      "border-2",
      "border-slate-400",
      "p-4",
      "rounded-lg",
      "mb-4"
    );
    div.innerHTML = `
        <h3 class = "text-2xl font-bold mb-4">${donationInputIntegerNumber} taka is donated for ${title}</h3>
        <p class = "font-semibold">Date: ${date}</p>
    `;
    document.getElementById("history").appendChild(div);
  });

// Quota Movement Donation:

document
  .getElementById("btn-donation-quota")
  .addEventListener("click", function () {
    const donationInput = document.getElementById("input-donation-quota");
    const donationInputValue = donationInput.value;
    const donationInputNumber = parseFloat(donationInputValue);
    const donationInputIntegerNumber = Math.floor(donationInputNumber);
    const currentBalance = document.getElementById("current-balance");
    const currentBalanceAmount = currentBalance.innerText;
    const currentBalanceNumber = parseFloat(currentBalanceAmount);
    const modal = document.getElementById('modal_quota')

    const title = document.getElementById("donation-quota-title").innerText;

    const date = new Date();

    // validation:
    if (donationInputIntegerNumber > currentBalanceNumber) {
      alert(
        `Insufficient Balance!! Please provide amount within the range of current balance.`
      );
      document.getElementById("current-balance").innerText =
        currentBalanceAmount;
      donationInput.value = "";
      modal.close();
      return;
    } else if (isNaN(donationInputIntegerNumber) || donationInputNumber < 0) {
      alert(`Please provide valid donation amount`);
      document.getElementById("current-balance").innerText =
      currentBalanceAmount;
      donationInput.value = "";
      modal.close();
      return;
    } else if (donationInputIntegerNumber === "") {
      alert(`Please provide valid donation amount`);
      document.getElementById("current-balance").innerText =
      currentBalanceNumber;
      modal.close();
      return;
    }

    addingDonation("donation-quota", "input-donation-quota");
    donationInputValue.value = "";

    // show donation history:
    const div = document.createElement("div");
    div.classList.add(
      "border-2",
      "border-slate-400",
      "p-4",
      "rounded-lg",
      "mb-4"
    );
    div.innerHTML = `
            <h3 class = "text-2xl font-bold mb-4">${donationInputIntegerNumber} taka is donated for ${title}</h3>
            <p class = "font-semibold">Date: ${date}</p>
        `;
    document.getElementById("history").appendChild(div);
  });


document.getElementById("btn-history").addEventListener("click", function () {
  changeButtonColor("btn-history");
  showSectionById("history");
});
