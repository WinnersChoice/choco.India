
function saveFormData() {
    var formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        whatsapp: document.getElementById("whatsapp").value,
        instagram: document.getElementById("instagram").value,
        address: document.getElementById("address").value,
        pinCode: document.getElementById("pin-code").value,
        chocolatePreference: document.getElementById("chocolatePreference").value,
        additionalComments: document.getElementById("additionalComments").value
    };

    localStorage.setItem("formData", JSON.stringify(formData));
}

function loadFormData() {
    var storedData = localStorage.getItem("formData");

    if (storedData) {
        var formData = JSON.parse(storedData);
        document.getElementById("name").value = formData.name;
        document.getElementById("email").value = formData.email;
        document.getElementById("whatsapp").value = formData.whatsapp;
        document.getElementById("instagram").value = formData.instagram;
        document.getElementById("address").value = formData.address;
        document.getElementById("pin-code").value = formData.pinCode;
        document.getElementById("chocolatePreference").value = formData.chocolatePreference;
        document.getElementById("additionalComments").value = formData.additionalComments;
    }
}

window.onload = loadFormData;

document.getElementById("name").addEventListener("input", saveFormData);
document.getElementById("email").addEventListener("input", saveFormData);
document.getElementById("whatsapp").addEventListener("input", saveFormData);
document.getElementById("instagram").addEventListener("input", saveFormData);
document.getElementById("address").addEventListener("input", saveFormData);
document.getElementById("pin-code").addEventListener("input", saveFormData);
document.getElementById("chocolatePreference").addEventListener("change", saveFormData);
document.getElementById("additionalComments").addEventListener("input", saveFormData); 


function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var whatsapp = document.getElementById("whatsapp").value;
    var instagram = document.getElementById("instagram").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pin-code").value;
    var chocolatePreference = document.getElementById("chocolatePreference").value;
    var additionalComments = document.getElementById("additionalComments").value;

    if (!name || !email || !address || !whatsapp || !pincode) {
        alert('Please fill out all required fields.');
        preventDefault(); 
    }

    var userConfirmation = confirm("Are you sure you want to submit the form?");

   if (userConfirmation) {

        alert("Thank you for your submission!");

        sendEmailUsingEmail(name, email, whatsapp, instagram, address, pincode, chocolatePreference, additionalComments);

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("whatsapp").value = "";
        document.getElementById("instagram").value = "";
        document.getElementById("address").value = "";
        document.getElementById("pin-code").value = "";
        document.getElementById("chocolatePreference").value = "";
        document.getElementById("additionalComments").value = "";
    }
}

function sendEmailUsingEmail(userName, userEmail, userWhatsapp, userInstagram, userAddress, userpincode, chocolatePreference, additionalComments) {
    emailjs.send('service_zjpdf5q', 'template_jfrxvgn', {   
        to_name: "AGRAWAL TANMAY",
        from_name: userName,
        from_email: userEmail,
        whatsapp: userWhatsapp,
        instagram: userInstagram,
        address: userAddress,
        pincode: userpincode,
        chocolate_preference: chocolatePreference,
        additional_comments: additionalComments,
    }).then(
        function(response) {
            console.log("Email sent:", response);
        },
        function(error) {
            console.error("Email failed to send:", error);
        }
    );
}


