/* ============================================================
   Navatanee Golf Course & Club — Welcome Splash
   ------------------------------------------------------------
   On page load, tries to show a welcome image located at:

       assets/images/first_image.<ext>

   Supported extensions are listed in EXTENSIONS below and are
   tried in order. If one loads successfully, an overlay is
   shown with a close button; the visitor must close it to
   enter the site.

   If NO first_image.* file exists (none of the extensions
   load), the overlay is never shown and the site loads
   normally — no action required from the visitor.

   HOW TO USE:
   - To enable the splash, drop an image named "first_image"
     (e.g. first_image.jpg or first_image.png) into
     assets/images/.
   - To disable it, simply remove that file.
   ============================================================ */
(function () {
  "use strict";

  var BASE_PATH = "assets/images/first_image";
  var EXTENSIONS = ["jpg", "jpeg", "png", "webp", "gif"];

  function init() {
    var splash = document.getElementById("splash");
    var img = document.getElementById("splashImg");
    var closeBtn = document.getElementById("splashClose");
    var backdrop = splash ? splash.querySelector("[data-splash-close]") : null;
    if (!splash || !img || !closeBtn) return;

    // Probe each candidate path until one loads; if none do, do nothing.
    findImage(0);

    function findImage(index) {
      if (index >= EXTENSIONS.length) {
        // No first_image.* found — enter the site directly.
        return;
      }

      var candidate = BASE_PATH + "." + EXTENSIONS[index];
      var probe = new Image();

      probe.onload = function () {
        showSplash(candidate);
      };
      probe.onerror = function () {
        findImage(index + 1); // try next extension
      };
      probe.src = candidate;
    }

    function showSplash(src) {
      img.src = src;
      splash.hidden = false;
      // Force reflow so the CSS transition runs, then reveal.
      void splash.offsetWidth;
      splash.classList.add("is-visible");
      document.body.classList.add("splash-open");
      closeBtn.focus();

      closeBtn.addEventListener("click", closeSplash);
      if (backdrop) backdrop.addEventListener("click", closeSplash);
      document.addEventListener("keydown", onKeydown);
    }

    function onKeydown(e) {
      if (e.key === "Escape") closeSplash();
    }

    function closeSplash() {
      splash.classList.remove("is-visible");
      document.body.classList.remove("splash-open");
      document.removeEventListener("keydown", onKeydown);

      // Remove from the accessibility tree after the fade-out.
      window.setTimeout(function () {
        splash.hidden = true;
      }, 400);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
