(function () {
  "use strict";

  var link = document.querySelector("[data-back-link]");
  if (!link) {
    return;
  }

  link.addEventListener("click", function (event) {
    event.preventDefault();

    var fallback = link.getAttribute("data-fallback") || link.getAttribute("href") || "/";
    var referrer = document.referrer;
    var sameOriginReferrer = false;

    if (referrer) {
      try {
        sameOriginReferrer =
          new URL(referrer, window.location.href).origin === window.location.origin;
      } catch (error) {
        sameOriginReferrer = false;
      }
    }

    if (sameOriginReferrer && window.history.length > 1) {
      window.history.back();
      return;
    }

    window.location.href = fallback;
  });
})();
