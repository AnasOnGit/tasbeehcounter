const preloader = document.querySelector(".preloader");
const note = document.querySelector(".tasbeeh-textarea");
const noteValue = note.value;
const slideMenu = document.querySelector(".slide-menu");
const slideMenuItems = document.querySelectorAll(".slide-menu li");
const hamMenu = document.querySelector(".ham-menu");
const localStorageClear = document.querySelector(".local-storage");
const optionsButton = document.querySelector(".options-button");
const optionsContainer = document.querySelector(".options-container");

hamMenu.addEventListener("click", () => {
  slideMenu.classList.toggle("slide");
  // Animate Link
  slideMenuItems.forEach((link, index) => {
    if (link.getElementsByClassName.animation) {
      link.style.animation = ``;
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
        0.5}s`;
    }
  });
  // Burger Slide
  hamMenu.classList.toggle("toggle");
});

optionsButton.addEventListener("click", function() {
  optionsContainer.classList.toggle("toggle-options");
});

localStorageClear.addEventListener("click", function() {
  if (confirm("Press'Ok'if you want to clear local storage?")) {
    localStorage.clear();
  }
});

const vibrateDevice = milsec => {
  return navigator.vibrate(milsec);
};
const digitalTasbeeh = () => {
  const digitalInput = document.querySelector(".digital-tasbeeh-value");
  let digitalInputValue = digitalInput.value;
  const digitalResetButton = document.querySelector(".reset");
  const digitalAddButton = document.querySelector(".add");
  const digitalDeductButton = document.querySelector(".deduct");

  window.addEventListener("load", function() {
    digitalValue = getFromLocalStorage("digital");
    console.log(digitalValue);
    if (digitalValue == null) {
      digitalValue = 0;
      digitalInput.value = 0;
      digitalInputValue = digitalInput.value;
    } else {
      digitalInput.value = digitalValue;
      digitalInputValue = digitalInput.value;
    }
  });

  //   Resetting input filed to 0
  digitalResetButton.addEventListener("click", function() {
    const resetDT = confirm("Are you sure you want to reset your record?");
    if (resetDT == true) {
      vibrateDevice(100);
      digitalInputValue = parseInt(digitalInputValue);
      digitalInputValue = digitalInputValue - digitalInputValue;
      digitalInput.value = digitalInputValue;
      setLocalStorage("digital", digitalInputValue);
    }
  });

  //   Adding one to input filed
  digitalAddButton.addEventListener("click", function() {
    vibrateDevice(200);
    digitalInputValue = parseInt(digitalInputValue);
    digitalInputValue = digitalInputValue + 1;
    digitalInput.value = digitalInputValue;
    setLocalStorage("digital", digitalInputValue);
  });

  //   Deducting one to input filed
  digitalDeductButton.addEventListener("click", function() {
    vibrateDevice(200);
    digitalInputValue = parseInt(digitalInputValue);
    if (digitalInputValue == 0) {
      digitalInputValue = 0;
    } else {
      digitalInputValue = digitalInputValue - 1;
    }
    setLocalStorage("digital", digitalInputValue);
    digitalInput.value = digitalInputValue;
  });
};

//Setting localStorage
const setLocalStorage = (key, val) => {
  localStorage.setItem(key, val);
  // console.log(localStorage.getItem(key));
};
//   Getting item from localstorage
const getFromLocalStorage = key => {
  const storeVal = localStorage.getItem(key);
  return storeVal;
};

note.addEventListener("keyup", function() {
  setLocalStorage("note", note.value);
});

window.addEventListener("load", function() {
  preloader.classList.add("loading-finish");
  if (getFromLocalStorage("note") != null) {
    note.vaule = getFromLocalStorage("note");
  }
});

digitalTasbeeh();
