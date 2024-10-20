const formSection = document.querySelector(".form-section");
const contactForm = document.querySelector("#contact-form");
const formErrMsg = document.querySelector("#form-error__msg");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const message = document.querySelector("#message");
const submitBtn = document.querySelector("#contact-form__button");

async function sendFormData(data) {
  const endpoint = "https://api.jsonbin.io/v3/b";
  try {
    const res = await fetch(endpoint, {
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key":
          "$2a$10$usPOGNIgHEioNL5PZXa1e.p/H1LO0O/jrMaAK3akRhN.rxaG3rbsa",
      },
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw Error(
        "An unexpected error occured while sending this form!! please reload and try again!"
      );
    }

    const { record } = await res.json();
    formSection.innerHTML = `<p id="form-success__msg">🥳🥳🥳<br />Message successfully submitted.<br /> Thanks for contacting me ${record.firstName}. <br /><a href="./projects.html">View my projects</a></p>`;
  } catch (err) {
    formErrMsg.textContent = err.message;
  }
}

async function sendEmail(data) {
  const templateParams = {
    fullName: data.firstName + " " + data.lastName,
    email: data.email,
    phone: data.phone,
    message: data.message,
  };

  const templateParams2 = {
    fullName: data.firstName + " " + data.lastName,
    email: data.email,
  };

  //   This is taken from an sdk that is imported above the contactForm script in contact.html
  //Initial the sdk
  emailjs.init({
    publicKey: "ZXCFeU-txJ4EDiPg9",
  });

  try {
    //send email to Alfred
    emailjs.send("service_yafat67", "template_h59x9b9", templateParams);
    //send email to the user filling in the form
    emailjs.send("service_yafat67", "template_dndysgl", templateParams2);
  } catch (err) {}
}

async function handleSubmit(e) {
  e.preventDefault();

  const data = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
    createdAt: Date.now(),
  };

  //reset form
  contactForm.reset();

  //update submit button
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";
  submitBtn.classList.add("fnd");

  //reset error message
  formErrMsg.textContent = "";

  // send form data to jsonbin
  await sendFormData(data);

  //send email
  sendEmail(data);

  //reset submit button
  submitBtn.disabled = false;
  submitBtn.textContent = "Submit";
  submitBtn.classList.remove("fnd");
}

contactForm.addEventListener("submit", handleSubmit);
