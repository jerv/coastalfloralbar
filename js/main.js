(function () {
  "use strict";

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var targetId = this.getAttribute("href");
      if (targetId === "#") return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        // Close mobile menu if open
        var navLinks = document.querySelector(".nav-links");
        var toggle = document.querySelector(".nav-toggle");
        if (navLinks && navLinks.classList.contains("is-open")) {
          navLinks.classList.remove("is-open");
          if (toggle) toggle.setAttribute("aria-expanded", "false");
        }
      }
    });
  });

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".nav-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Copyright year
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Pricing estimate calculator
  var guestInput = document.getElementById("guest-count");
  var estimateTotal = document.getElementById("estimate-total");
  var estimateDeposit = document.getElementById("estimate-deposit");
  var estimateBalance = document.getElementById("estimate-balance");
  var estimateNote = document.getElementById("estimate-note");
  var pricePerGuest = 20;
  var guestMinimum = 20;

  function formatCurrency(amount) {
    var hasCents = amount % 1 !== 0;
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: hasCents ? 2 : 0,
      maximumFractionDigits: hasCents ? 2 : 0
    });
  }

  function updateEstimate() {
    if (!guestInput || !estimateTotal || !estimateDeposit || !estimateBalance || !estimateNote) return;
    var guestCount = parseInt(guestInput.value, 10);
    if (isNaN(guestCount) || guestCount < 0) guestCount = 0;

    var billableGuests = Math.max(guestCount, guestMinimum);
    var total = billableGuests * pricePerGuest;
    var deposit = total * 0.5;
    var balance = total - deposit;

    estimateTotal.textContent = formatCurrency(total);
    estimateDeposit.textContent = formatCurrency(deposit);
    estimateBalance.textContent = formatCurrency(balance);
    estimateNote.textContent = guestCount < guestMinimum
      ? "20 guest minimum applied."
      : "Estimate based on " + billableGuests + " guests at $20 each.";
  }

  if (guestInput) {
    guestInput.addEventListener("input", updateEstimate);
    updateEstimate();
  }

  // Header scroll effect
  var header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }
})();
