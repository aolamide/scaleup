const contactForm = document.querySelector("form");
const btnSubmit = document.querySelector(".btn-submit");
const btnSubmitText = document.querySelector(".btn-submit span");
const error = document.getElementById("contact-error");
const success = document.getElementById("contact-success");

const onSubmit = (e) => {
    e.preventDefault();
    error.innerText = "";
    success.innerText = "";
    const formData = new FormData(contactForm);
    const formObject = {};
    for (let entry of formData.entries()) {
        const key = entry[0];
        formObject[key] = entry[1];
    }

    btnSubmitText.innerText = "Sending...";
    btnSubmit.disabled = true;

    fetch("https://site-server.herokuapp.com/send", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            ...formObject,
            name : formObject.firstName + " " + formObject.lastName,
            scaleupContact: true,
        }),
    })
        .then((res) => res.json())
        .then((result) => {
            if (result.error) {
                error.innerText = result.error;
            } else {
                success.innerText =
                    "Thank you, Your message has been sent. We will reach out to you as soon as possible.";
                contactForm.reset();
            }
        })
        .catch((err) => {
            console.log(err);
            error.innerText = "Network error, please retry.";
        })
        .finally(() => {
            btnSubmitText.innerText = "Submit";
            btnSubmit.disabled = false;
        });
};

contactForm.addEventListener("submit", onSubmit);
