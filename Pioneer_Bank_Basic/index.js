//login button handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transaction = document.getElementById("transaction-area");
  transaction.style.display = "block";
});

//deposit button event handler
var depostitBtn = document.getElementById("addDeposit");
depostitBtn.addEventListener("click", function () {
  // const despositAmount = document.getElementById("depositAmount").value;
  // const despositNumber = parseFloat(despositAmount);
  const despositNumber = getInputNumber("depositAmount");
  // const currentDeposit = document.getElementById("carrentDeposit").innerText;
  // const postDeposit = parseFloat(currentDeposit);
  // const total = despositNumber + postDeposit;
  // document.getElementById("carrentDeposit").innerText = total;

  updatespanText("carrentDeposit", despositNumber);

  // const currantBalance = document.getElementById("currantBalance").innerText;
  // const currnatNumber = parseFloat(currantBalance);
  // const totalBalance = despositNumber + currnatNumber;
  // document.getElementById("currantBalance").innerText = totalBalance;
  updatespanText("currantBalance", despositNumber);

  document.getElementById("depositAmount").value = "";
});

function getInputNumber(id) {
  const despositAmount = document.getElementById(id).value;
  const despositNumber = parseFloat(despositAmount);
  return despositNumber;
}

function updatespanText(id, despositNumber) {
  const currantBalance = document.getElementById(id).innerText;
  const currnatNumber = parseFloat(currantBalance);
  const totalBalance = despositNumber + currnatNumber;
  document.getElementById(id).innerText = totalBalance;
}

//withdrow button event handler
const withdrowBtn = document.getElementById("removeWithdrow");
withdrowBtn.addEventListener("click", function () {
  // const withDrowAmount1 = document.getElementById("withDrowAmount").value;
  // const withDrowNumber = parseFloat(withDrowAmount1);
  const withDrowNumber = getInputNumber("withDrowAmount");

  // const carrentWithdrow = document.getElementById("carrentWithdrow").innerText;
  // const currentNumber = parseFloat(carrentWithdrow);
  // const withTotal = withDrowNumber + currentNumber;
  // document.getElementById("carrentWithdrow").innerText = withTotal;

  updatespanText("carrentWithdrow", withDrowNumber);
  updatespanText("currantBalance", -1 * withDrowNumber);
  // const currantBalance = document.getElementById("currantBalance").innerText;
  // const currnatNumber = parseFloat(currantBalance);
  // const totalBalance = currnatNumber - withDrowNumber;
  // document.getElementById("currantBalance").innerText = totalBalance;

  document.getElementById("withDrowAmount").value = "";
});
