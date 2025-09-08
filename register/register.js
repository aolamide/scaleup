const form = document.getElementById('register-form');
const btnSubmit = document.querySelector(".btn-submit");
const btnSubmitText = document.querySelector(".btn-submit span");
const error = document.getElementById("apply-error");
const success = document.getElementById("apply-success");

const registerUser = (e) => {
    e.preventDefault();
    error.innerText = "";
    success.innerText = "";
    const formData = new FormData(form);
    const formObject = {};
    for (let entry of formData.entries()) {
        const key = entry[0];
        formObject[key] = entry[1];
    }
    btnSubmitText.innerText = "Applying...";
    btnSubmit.disabled = true;
    fetch("https://contact-api.aolamide.tech/send", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({...formObject, scaleup : true}),
    })
        .then((res) => res.json())
        .then((result) => {
            if (result.error) {
                error.innerText = result.error;
            } else {
                success.innerText =
                    "Thank you, Your application has been sent. We will reach out to you as soon as possible.";
                form.reset();
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
}
form.addEventListener('submit', registerUser);
