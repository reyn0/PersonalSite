// Visit counter for every page on this site.
//
// Service: Abacus, a free counting API (https://jasoncameron.dev/abacus/).
// No account, no API key, no cookies. The browser asks the API to add one to a
// counter, and the API replies with the new number, which the page then shows.
//
// Counters live under the namespace below. You can read any number yourself by
// opening these URLs in a browser:
//   https://abacus.jasoncameron.dev/get/reyn0.github.io/total
//   https://abacus.jasoncameron.dev/get/reyn0.github.io/home
//   https://abacus.jasoncameron.dev/get/reyn0.github.io/supercalc
//   https://abacus.jasoncameron.dev/get/reyn0.github.io/mortgagecalc
//
// This counts page views, not unique people. One view per browser tab session
// is counted, so a reload in the same tab does not add another.

(function () {
    'use strict';

    var API = 'https://abacus.jasoncameron.dev';
    var NAMESPACE = 'reyn0.github.io';
    var TOTAL_KEY = 'total';

    var wrapper = document.getElementById('visitorCounter');
    var display = document.getElementById('visitCount');

    // Turn the page path into a stable counter key. This works both from
    // reyn0.github.io/PersonalSite/... and from the root of a custom domain,
    // so moving to a custom domain later keeps the same counters.
    function pageKey() {
        var path = window.location.pathname
            .replace(/^\/PersonalSite/, '')
            .replace(/index\.html$/, '');

        if (path === '' || path === '/') {
            return 'home';
        }

        var match = path.match(/^\/([A-Za-z0-9_.-]{3,64})\/?$/);
        return match ? match[1] : 'other';
    }

    // Count one view per tab session, so a reload does not inflate the number.
    function firstViewThisSession(key) {
        try {
            if (window.sessionStorage.getItem('seen:' + key)) {
                return false;
            }
            window.sessionStorage.setItem('seen:' + key, '1');
            return true;
        } catch (err) {
            // Private browsing blocks sessionStorage. Count the view.
            return true;
        }
    }

    function ask(action, key) {
        return fetch(API + '/' + action + '/' + NAMESPACE + '/' + key)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('counter responded ' + response.status);
                }
                return response.json();
            });
    }

    var pageCounter = pageKey();
    var action = firstViewThisSession(pageCounter) ? 'hit' : 'get';

    // The counter for this page. The number appears on the page.
    ask(action, pageCounter).then(function (data) {
        var value = Number(data.value);
        if (!isFinite(value)) {
            throw new Error('counter returned a value that is not a number');
        }
        if (display) {
            display.textContent = value.toLocaleString();
        }
        if (wrapper) {
            wrapper.hidden = false;
        }
    }).catch(function () {
        // Offline, blocked by an ad blocker, or the API is down.
        // Show nothing rather than a broken counter.
        if (wrapper) {
            wrapper.hidden = true;
        }
    });

    // The whole of site counter. Not shown on the page. Read it at the URL above.
    if (action === 'hit') {
        ask('hit', TOTAL_KEY).catch(function () {});
    }
})();
