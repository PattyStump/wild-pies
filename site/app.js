// Wild Pies — booking form submission.
// The booking form POSTs to Web3Forms (https://api.web3forms.com/submit), which
// relays each inquiry as an email to the address tied to the access_key hidden
// field. We submit in the background (fetch) so the inline "Request sent"
// confirmation still shows without the page navigating away. If JS is
// unavailable, the form falls back to a normal POST (the action/method on the
// <form> handle it). No activation step — the access key is the authorization.

(function () {
  'use strict';

  var booking = document.getElementById('booking-form');
  var bookingDone = document.getElementById('booking-done');

  function reveal() {
    booking.hidden = true;
    bookingDone.hidden = false;
    bookingDone.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  if (booking && bookingDone) {
    booking.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = booking.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

      fetch(booking.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(booking)
      })
        .then(function () { reveal(); })
        .catch(function () {
          // Network failure — let the browser do a normal POST as a fallback
          // so the inquiry still goes through.
          booking.submit();
        });
    });
  }
})();
