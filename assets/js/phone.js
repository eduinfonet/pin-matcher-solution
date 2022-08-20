


function updatePhoneNumber(isIncrease){
  const phoneNumberField = document.getElementById("phone-number-field");
  const phoneNumberFieldString = phoneNumberField.value;
  const phoneNumber = parseInt(phoneNumberFieldString);

  let newPhoneNumber;
  if( isIncrease){
    newPhoneNumber = phoneNumber + 1;

  }else {
    newPhoneNumber = phoneNumber - 1;
  } 

   phoneNumberField.value = newPhoneNumber;
   return newPhoneNumber;
}

function updatePhoneNumberPrice(newPhoneNumber) {
const phoneTotalPrice = newPhoneNumber * 1219;
const phoneTotalElement = document.getElementById("phone-total");
phoneTotalElement.innerText = phoneTotalPrice; 

}

function getTextElementValueByID( elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const phoneTotalElementString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(phoneTotalElementString);

    return currentPhoneTotal;

}

function calculateSubTotal(){
    const currentPhoneTotal = getTextElementValueByID("phone-total");
    const newCaseNumber = getTextElementValueByID("case-total");
    const currentSubTotal = currentPhoneTotal + newCaseNumber;

    const subTotalElement = document.getElementById("sub-total");
    subTotalElement.innerText = currentSubTotal;

}


document.getElementById("btn-phone-plus").addEventListener('click', function(){
// const phoneNumberField = document.getElementById("phone-number-field");
// const phoneNumberFieldString = phoneNumberField.value;
// const phoneNumber = parseInt(phoneNumberFieldString);

// const newPhoneNumber = phoneNumber +1;
// phoneNumberField.value = newPhoneNumber;
//updatePhoneNumber(true);

const newPhoneNumber = updatePhoneNumber(true);
// const phoneTotalPrice = newPhoneNumber * 1219;
// const phoneTotalElement = document.getElementById("phone-total");
// phoneTotalElement.innerText = phoneTotalPrice; 
 updatePhoneNumberPrice(newPhoneNumber);
 calculateSubTotal();

 //-------------calculate total---------------
 const currentPhoneTotal = getTextElementValueByID('phone-total');
 const newCaseNumber = getTextElementValueByID("case-total");
 const currentSubTotal = currentPhoneTotal + newCaseNumber;

 const subTotalElement = document.getElementById("sub-total");
 subTotalElement.innerText = currentSubTotal;

//  const phoneTotalElement = document.getElementById("phone-total");
//  const phoneTotalElementString = phoneTotalElement.innerText;
//  const phoneTotal = parseFloat(phoneTotalElementString);

 
})

document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {   

const newPhoneNumber = updatePhoneNumber(false);
updatePhoneNumberPrice(newPhoneNumber);
calculateSubTotal();
 
    

  });

