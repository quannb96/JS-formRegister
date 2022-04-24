  const btnRegister = document.getElementById("btnRegister");
        btnRegister.addEventListener("click", () => {
          let isValid = true;
// ======= emailInput
          const emailInput = document.getElementById("emailInput")
          const emailValue = emailInput.value;
          const emailError = document.getElementById("emailError");

        //   if (emailValue == "") {
        if (emailValue.indexOf("@") === -1) {
            emailError.innerHTML = "This field is required.";
            isValid = false;
          } else {
            emailError.innerHTML = "";
          }
// ======= phoneInput
          const phoneInput = document.getElementById("phoneInput")
          const phoneValue = phoneInput.value;
          const phoneError = document.getElementById("phoneError");

          if (phoneValue == "" || isNaN(phoneValue)) {
            phoneError.innerHTML = "This field is required.";
            isValid = false;
          } else {
            phoneError.innerHTML = "";
          }
// ======= countrySelect
        const countrySelect = document.getElementById("countrySelect");
        const countryValue = countrySelect.value;
        const countryError = document.getElementById("countryError");

        if (countryValue === "Please select a country") {
        countryError.innerHTML = "Please select a country!";
        isValid = false
        } else {countryError.innerHTML = ""}
// get termService checkbox
        const termServiceValue = document.getElementById("termService").checked;
        const termServiceError = document.getElementById("termServiceError");

        if (termServiceValue === false) {
        termServiceError.innerHTML = "Please accept!";
        isValid = false
        } else {termServiceError.innerHTML = ""}


          if (isValid) {
            const formRegister = document.getElementById("formRegister");
            formRegister.submit();

            // formRegister.style.display = 'none';
            // const processingSpan = document.createElement('span');
            // const processingText = document.createTextNode('Processing ...');
            // processingSpan.appendChild(processingText);

            // formRegister.parentNode.insertBefore(processingSpan, formRegister);
          }
        });