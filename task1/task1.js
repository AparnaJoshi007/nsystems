let currentTab = 0;

window.onload = () => {
    showTab(currentTab);
};

const showTab = (n) => {
    let totalTabs = document.getElementsByClassName("tab");
    totalTabs[n].style.display = "block";
    if(n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }

    if(n == (totalTabs.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }

    updateStepIndicator(n);
}

const switchTabs = (n) => {
    let totalTabs = document.getElementsByClassName("tab");
    if (n == 1 && !validateForm()) return false;
    totalTabs[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= totalTabs.length) {
        document.getElementById("regForm").submit();
        return false;
    }
    showTab(currentTab);
}

const validateForm = () => {
    let valid = true;
    let totalTabs = document.getElementsByClassName("tab");
    let currentInput = totalTabs[currentTab].getElementsByTagName("input");
    let emailRegex =  /\S+@\S+\.\S+/;
    let phoneRegex = /^\d{10}$/;

    for (let i = 0; i < currentInput.length; i++) {
      if (currentInput[i].value == "") {
        currentInput[i].className += " invalid";
        valid = false;
      }
      if(currentInput[i].name == "email" && emailRegex.test(currentInput[i].value) == false ) {
        currentInput[i].className += " invalid";
        valid = false;
      }
      if(currentInput[i].name == "phone" && phoneRegex.test(currentInput[i].value) == false) {
        currentInput[i].className += " invalid";
        valid = false;
      }
    }
    console.log(valid)
    return valid;
  }


const updateStepIndicator = (n) => {
    let step = document.getElementsByClassName("step");
    for (let i = 0; i < step.length; i++) {
        step[i].className = step[i].className.replace(" active", "");
    }
    step[n].className += " active";
}