const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-give");
const checkBtn = document.querySelector("#check-btn");
const message = document.querySelector(".error-msg");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const showMessage = (msg) => {
  message.style.display='block'
  message.innerText = msg;
};
const availableNotes = [2000, 500, 100, 10, 5, 1];

const calculateChange = (amountToBeReturn) => {
  availableNotes.forEach((item, idx) => {
    const NumberOfNotes = Math.trunc(amountToBeReturn / item);
    amountToBeReturn %= item;
    noOfNotes[idx].innerText = NumberOfNotes;
  });
};

checkBtn.addEventListener("click", () => {
  message.style.display='none'
  const cash = Number(cashGiven.value);
  const bill = Number(billAmount.value);

  if (bill > 0) {
    if (cash >= bill) {
      const amountToBeReturn = cash - bill;
      calculateChange(amountToBeReturn);
    } else {
      showMessage(
        "The cash provided should atleast to equal to the bill amount"
      );
    }
  } else {
    showMessage("Invalid Bill Amount..");
  }
});
