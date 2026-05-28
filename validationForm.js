function validateData() {
  // 1. Tangkap semua value dari inputan HTML
  const fullName = document.getElementById("fullname").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const favoriteItem = document.getElementById("favorite-item").value;
  const address = document.getElementById("address").value.trim();

  // Tangkap status checkbox (true/false)
  const termsChecked = document.getElementById("terms").checked;
  const privacyChecked = document.getElementById("privacy").checked;

  // 2. Evaluasi Step-by-Step
  if (fullName.length <= 5) {
    alert("Full Name must be more than 5 characters.");
  } else if (!onlyNumber(phone)) {
    alert("Phone number must contain only numbers.");
  } else if (!email.endsWith("@gmail.com")) {
    alert("Email must end with @gmail.com");
  } else if (favoriteItem === "") {
    alert("Please pick your favorite item.");
  } else if (address.length === 0) {
    alert("Please enter your home address.");
  } else if (!termsChecked) {
    alert("You must agree to the terms and conditions.");
  } else if (!privacyChecked) {
    alert("You must agree to the privacy and policy.");
  } else {
    // Jika semua lolos evaluasi
    alert("Registration Successful!");
    document.getElementById("registration-form").reset(); // Bersihkan form
  }
}

function onlyNumber(num) {
  if (num.length === 0) {
    return false;
  }
  for (let i = 0; i < num.length; i++) {
    if (num[i] < "0" || num[i] > "9") {
      return false;
    }
  }
  return true;
}
