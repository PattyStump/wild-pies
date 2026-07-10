// Wild Pies — visual-only form confirmations.
// Mirrors the prototype: submitting swaps the form for an inline thank-you.
// No data is sent anywhere. To make these live, POST to a form service
// (e.g. Formspree) in each handler before revealing the confirmation.

(function () {
  'use strict';

  var booking = document.getElementById('booking-form');
  var bookingDone = document.getElementById('booking-done');
  if (booking && bookingDone) {
    booking.addEventListener('submit', function (e) {
      e.preventDefault();
      booking.hidden = true;
      bookingDone.hidden = false;
      bookingDone.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  var signup = document.getElementById('signup-form');
  var signupDone = document.getElementById('signup-done');
  if (signup && signupDone) {
    signup.addEventListener('submit', function (e) {
      e.preventDefault();
      signup.hidden = true;
      signupDone.hidden = false;
    });
  }
})();
