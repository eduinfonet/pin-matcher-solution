

function getTextElementValueByID(elementId) {
  const phoneTotalElement = document.getElementById(elementId);
  const phoneTotalElementString = phoneTotalElement.innerText;
  const currentPhoneTotal = parseInt(phoneTotalElementString);

  return currentPhoneTotal;
}

function setTextElementValueById(elementId, value) {
  const subTotalElement = document.getElementById(elementId);
  subTotalElement.innerText = value;
}

function calculateSubTotal() {
  // calculate total
  const currentPhoneTotal = getTextElementValueByID("phone-total");
  const newCaseNumber = getTextElementValueByID("case-total");
  const currentSubTotal = currentPhoneTotal + newCaseNumber;
  setTextElementValueById("sub-total", currentSubTotal);

  //   const subTotalElement = document.getElementById("sub-total");
  //   subTotalElement.innerText = currentSubTotal;

  //calculate tax

  //const taxAmount = (currentSubTotal * 0.1).toFixed(2); //10%
  const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
  const taxAmount = parseFloat(taxAmountString);
  setTextElementValueById("tax-total", taxAmount);

  const finalAmount = currentSubTotal + taxAmount;

  setTextElementValueById("final-total", finalAmount);
}
