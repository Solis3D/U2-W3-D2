const LOCALSTORAGE_KEY = "saved-text";
const SESSIONSTORAGE_KEY = "counter";
const h4 = document.getElementById("show-name");

// SAVE FUNCTION
const saveFunction = function () {
  const inputName = document.getElementById("input-name");
  const currentName = inputName.value;

  if (currentName !== "") {
    console.log(currentName);

    localStorage.setItem(LOCALSTORAGE_KEY, currentName);

    const savedName = localStorage.getItem(LOCALSTORAGE_KEY);

    if (savedName !== null) {
      h4.innerText = savedName;
      h4.classList.remove("d-none");
    }

    inputName.value = "";
  }
};

// DELETE FUNCTION
const deleteFunction = function () {
  const inputName = document.getElementById("input-name");
  inputName.value = "";

  localStorage.removeItem(LOCALSTORAGE_KEY);
  h4.innerText = "";
  h4.classList.add("d-none");
};

// COUNTER FUNCTION
const counterSeconds = function () {
  let seconds = sessionStorage.getItem(SESSIONSTORAGE_KEY);
  console.log(seconds);
  console.log(typeof seconds);
  const btnCounter = document.getElementById("seconds-counter");
  // Number è un constructor che ritorna un numero e se il valore iniziale è null ritorna 0, undefined è NaN
  seconds = Number(seconds);
  console.log(typeof seconds);
  btnCounter.innerText = seconds;

  setInterval(() => {
    seconds++;
    sessionStorage.setItem(SESSIONSTORAGE_KEY, seconds);

    btnCounter.innerText = seconds;
  }, 1000);

  // Resetta il counter al click del bottone
  btnCounter.addEventListener("click", function () {
    sessionStorage.setItem(SESSIONSTORAGE_KEY, "0");
    seconds = 0;
  });
};

counterSeconds();

const saveButton = document.getElementById("btn-save");
saveButton.addEventListener("click", saveFunction);

const deleteButton = document.getElementById("btn-delete");
deleteButton.addEventListener("click", deleteFunction);
