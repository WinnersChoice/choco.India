//  function setCookie(cname, cvalue, exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     let expires = "expires=" + d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//   }
  
//   function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for (let i = 0; i < ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   }
  
//   function checkCookie() {
//     let user = getCookie("username");
//     if (user != "") {
//       let newName = prompt("Your current name is " + user + ". Do you want to change it?", user);
//       if (newName != null && newName != "") {
//         setCookie("username", newName, 30);
//         alert("Welcome " + newName + "! Your name has been updated.");
//       } else {
//         alert("Welcome again " + user);
//       }
//     } else {
//       user = prompt("Please enter your name:", "");
//       if (user != "" && user != null) {
//         setCookie("username", user, 30);
//       }
//     }
//   }                    


  function openYouTube(){
                          alert("You are being redirected to YouTube.");
                          window.open("https://www.youtube.com/", "_blank");
  }

  function openMeta(){
    alert("You are being redirected to Meta.")
    window.open("https://about.meta.com/", "_blank");
}

function openInstagram(){
    alert("You are being redirected to Instagram.");
    window.open("https://www.instagram.com/", "_blank");
}


function redirect() {
        window.open('IMG 5.jpg', '_blank').focus();
    }

function choSite(){
        var x = confirm('You Are Redirecting To Another WebSite. Continue?' );
          if(x) {window.open('https://www.pexels.com/search/chocolate/', '_blank');}
          else{ alert('Not Opening Other Window.'); }
}  

function openBox(){
        var y = alert('You Are Being Redirected to another web site.\nIf you want to continue please Click OK.\n                 OR\nYou can close the window.');
              window.open('https://lilyobriens.com/chocolate-personalised-photo-box-290g','_blank');
}

function openGbox(){
    var y = alert('You Are Being Redirected to another web site.\nIf you want to continue please Click OK.\n                 OR\nYou can close the window.');
         window.open('https://pixabay.com/images/search/gift%20box/','_blank');
}

function openCaramels(){
        alert('You Are Being Redirected to another web site.\nIf you want to continue please Click OK.\n                 OR\nYou can close the window.');
        window.open('https://caramels.com/','_blank');
    }

function openAboutUs(){
        window.open('https://stormy-collision-79e.notion.site/ABOUT-US-c72cb603dc6a426895f8b8f5363c119b?pvs=4','_blank');    
}    

function openFaqs(){
    window.open('https://stormy-collision-79e.notion.site/FAQs-e97f2955ff2c434382715074f4dddd1c?pvs=4','_blank');
}

    function openProduct(){
        window.open('https://stormy-collision-79e.notion.site/Our-Products-8a26337e984c46d98a8be8bda4a9ddb1?pvs=4','_blank');
    }

    function delieveryInfo(){
        window.open('https://stormy-collision-79e.notion.site/Delivery-Information-4324e549b41a464e99d33a97d30c561c?pvs=4','_blank');
    }

    function privacyPolicy(){
        window.open('https://stormy-collision-79e.notion.site/Privacy-Policy-b2f8928656044c3b85c8247965f39359?pvs=4','_blank');
    }    

    function discount(){
        window.open('https://stormy-collision-79e.notion.site/Discount-Policy-ffa8ddcde2af4c6398e68d2fe999ba27?pvs=4','_blank');
    }    

  function localAdd(){
    window.open('https://maps.app.goo.gl/JLrVrysv4VCbAQvn6', '_blank');
  }

  function whatsApp(){
     window.open('https://wa.me/7043027389','_blank')
  }

  function sendEmail() {
    var recipientEmail = 'agrawaltanmay450@gmail.com';

    var mailtoLink = 'mailto:' + recipientEmail;

    window.location.href = mailtoLink;
}

function newsNdtv(){
    window.open('https://www.ndtv.com/india','_blank')
}

function checkEmail() {
    var userEmail = document.getElementById('emailInput').value;

    if (userEmail.trim() !== "") {
        var confirmation = confirm("You entered: " + userEmail + "\nDo you want to confirm it?");

    if (confirmation) {
            alert("You confirmed: " + userEmail + "\nProceeding with the confirmation.");
            document.getElementById('emailInput').value = "";
        } 
    else {
            alert("You chose to change the email address.");
        }
    } 
    else {
        alert("Please enter your email address.");
    }
}

function copyRight(){
        window.open('https://stormy-collision-79e.notion.site/Copyright-Notice-9b0c792c4118421b9ddd9fbb8784acc3?pvs=4','_blank');
}

function termUse(){
     window.open('https://stormy-collision-79e.notion.site/Terms-of-Use-8096bb0a2d5a45f78b9173a6eac6a1d1?pvs=4','_blank');
}

