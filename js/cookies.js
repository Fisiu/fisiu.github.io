function setCookie(cookieName, value, expiryDays) {
  var date = new Date();
  date.setDate(date.getDate() + expiryDays);
  var cookieValue = escape(value) + ((expiryDays == null) ? "" : "; expires=" + date.toUTCString()) + "; path=/";
  document.cookie = cookieName+ "=" + cookieValue;
}

function getCookie(cookieName) {
  var i, x, y, cookies = document.cookie.split(";");
  for (i = 0; i < cookies.length; i++) {
    x = cookies[i].substr(0, cookies[i].indexOf("="));
    y = cookies[i].substr(cookies[i].indexOf("=") + 1);
    x = x.replace(/^\s+|\s+$/g, "");
    if (x == cookieName) {
      return unescape(y);
    }
  }
}

$(document).ready(function () {
  var info = 'Niniejsza strona wykorzystuje pliki cookies. Informacje uzyskane za pomocą cookies wykorzystywane są głównie w celach statystycznych oraz reklamowych. Pozostając na stronie godzisz się na ich zapisywanie w Twojej przeglądarce. '
  var accept = 'Ok, rozumiem';

  var superbox = '<div id="cookie-modal" class="modal fade" tabindex="-1" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-body" style="padding: 10px"><p>' + info + '</p></div><div class="modal-footer"style="margin-top: 0px; padding: 10px;"><button id="cookie-accept" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">' + accept + ' <i class="fa fa-check"></i></button></div></div></div></div>';

  var cookie = getCookie('cookie-alert');
  if (cookie != 1) {
    $('body').prepend(superbox);
    $('#cookie-modal').modal({
        backdrop: 'static',
        keyboard: false,
        show: true
    });
  }

  $('#cookie-accept').click(function () {
    setCookie('cookie-alert', 1, 365);
  });
});
