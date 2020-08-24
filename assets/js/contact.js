window.addEventListener("DOMContentLoaded", function() {
    // UI elements
    var form = document.getElementById("contactForm");
    var button = document.getElementById("sendButton");
    var status = document.getElementById("formStatus");

    // // content
    // var name = document.getElementById("input#name");
    // var email = document.getElementById("input#email");
    // var phone = document.getElementById("input#phone");
    // var message = document.getElementById("textarea#message");

    function success() {
        form.reset();
        button.style = "display: none ";
        status.innerHTML = "Sent!";
    }

    function error() {
        status.innerHTML = "Oops! There was a problem.";
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        var data = new FormData(form);
        request(form.method, form.action, data, success, error);
    })
})


function request(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) {
            return;
        }
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data)
}

function validateEmail() {

}

function validatePhone() {

}