document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }

  var form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("#name").value.trim();
      var email = form.querySelector("#email").value.trim();
      var message = form.querySelector("#message").value.trim();
      var subject = encodeURIComponent("Website inquiry from " + (name || "website visitor"));
      var body = encodeURIComponent(message + "\n\n---\nName: " + name + "\nEmail: " + email);
      window.location.href = "mailto:michael.do@ricandc.com?subject=" + subject + "&body=" + body;
    });
  }
});
