document.addEventListener('DOMContentLoaded', function () {

    var dataEntryForm = document.getElementById('dataEntryForm');
    var allCookies = Cookies.get(); // an object

    // if Cookies.get() has cookies, then output the cookies to #welcomeMessage
    if (Object.keys(allCookies).length !== 0) {
        var html = '<h3>Welcome Back!</h3><p>It looks like you have saved some cookies here:</p><pre>' + JSON.stringify(allCookies) + '</pre>';
        showWelcomeMessage(html);
    } else {
        var html = "No cookies found (yet).";
        showWelcomeMessage(html);
    }

    dataEntryForm.addEventListener('submit', function (e) {
        e.preventDefault();

        var formText = document.getElementById('dataEntryFormInput').value;
        var dataEntryFormOutputDiv = document.getElementById('dataEntryFormOutputDiv');

        Cookies.set('yourTrackingCookie', formText);
        dataEntryFormOutputDiv.innerText = 'Your data was saved. Please go to the next step in the list. If you reload the page, your cookie will be visible at the top.';
        dataEntryFormOutputDiv.classList.add('highlight');
    });

    function showWelcomeMessage(html) {
        var welcomeMessageDiv = document.getElementById('welcomeMessage');
        welcomeMessageDiv.innerHTML = html;
        welcomeMessageDiv.classList.add('highlight');
    }

});
