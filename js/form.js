window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("ajax-contact");
  var button = document.getElementById("submit-contact");
  var status = document.getElementById("form-messages");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    button.style = "display: none ";
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

// $(function () {
//   // Get the form.
//   var form = $("#ajax-contact");

//   // Get the messages div.
//   var formMessages = $("#form-messages");

//   // Set up an event listener for the contact form.
//   $(form).submit(function (e) {
//     // Stop the browser from submitting the form.
//     e.preventDefault();

//     // Serialize the form data.
//     var formData = $(form).serialize();

//     // Submit the form using AJAX.
//     $.ajax({
//       type: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       url: "/",
//       data: formData,
//     })
//       .done(function (response) {
//         // Make sure that the formMessages div has the 'success' class.
//         $(formMessages).removeClass("bg-danger");
//         $(formMessages).addClass("bg-success");

//         // Set the message text.
//         $(formMessages).text("Your message successfully sent");

//         // Clear the form.
//         $("#name, #email, #message").val("");
//       })
//       .fail(function (data) {
//         // Make sure that the formMessages div has the 'error' class.
//         $(formMessages).removeClass("bg-success");
//         $(formMessages).addClass("bg-danger");

//         // Set the message text.
//         if (data.responseText !== "") {
//           $(formMessages).text(data.responseText);
//         } else {
//           $(formMessages).text(
//             "Oops! An error occured and your message could not be sent."
//           );
//         }
//       });
//   });
// });
