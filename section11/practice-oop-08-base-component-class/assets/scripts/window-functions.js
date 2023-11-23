/*
    setTimeout()
    - Executes a function, once, after waiting a specified number of milliseconds
    - https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
    - setTimeout(() => {}, 1000);
        - First parameter is doing something after 1000 milliseconds.
        - Second parameter is waiting time in milliseconds.
    - setTimeout() function is returning a number.
        - This number is id of setTimeout() function.
    - We can use clearTimeout() function for stopping setTimeout() function.
        - clearTimeout(id);
        - id is id of setTimeout() function.
    - setTimeout not lock the main thread and page is not freezing.

    2000 milliseconds = 2 seconds

*/

const id = window.setTimeout((person, ...others) => {
    console.log(`Hello ${person.name} ${person.age}`);
    console.log(others);
}, 2000, {name: "Huseyin", age: 30}, 10, 20);

window.clearTimeout(id);


/*
    location:
    - https://developer.mozilla.org/en-US/docs/Web/API/Location
    - location is giving information about url.
    - location.href is giving full url. And we can change url with location.href.
    - location.host is giving host name.
        - academind.com
    - location.hostname is giving host name without port.
        - academind.com
    - location.protocol is giving protocol.
        - https:
    - location.origin is giving origin.
        - https://academind.com
    - location.pathname is giving path name.
        - /courses/
    - location.search is giving query string.
        - ?course=react&page=1
    - location.hash is giving hash.
        - #section1
    - location.assign(url) is changing url.
        - It's working like location.href = url.
    - location.replace(url) is changing url without history.
        - I can set new url but I can't go back to previous url.
    - location.reload() is reloading page.


    history:
    - https://developer.mozilla.org/en-US/docs/Web/API/History
    - history is giving information about history.
    - history.length is giving history length.
    - history.back() is going back to previous page.
    - history.forward() is going forward to next page.
    - history.go(-2) is going back to 2 pages.
    - history.go(2) is going forward to 2 pages.
    - history.pushState({page: 1}, 'title', '?page=1') is adding new history.
        - first parameter is state.
        - second parameter is title.
        - third parameter is url.
        - For example, history.pushState({page: 1}, 'http://localhost:8080', '?page=1');


    navigator:
    - https://developer.mozilla.org/en-US/docs/Web/API/Navigator
    - navigator is giving information about browser.
    - navigator.userAgent is giving user agent.
        - Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36
        (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36
        - This means I'm using Chrome on Mac.
    - navigator.clipboard is giving clipboard.
    - navigator.geolocation is giving geolocation.
        - navigator.geolocation.getCurrentPosition(success, error, options);
            - success is success function.
            - error is error function.
            - options is options.
        - navigator.geolocation.getCurrentPosition((data) => console.log(data));
    - navigator.language is giving language.
        - en-US
    - navigator.languages is giving languages.
        - ["en-US", "en"]
    - navigator.onLine is giving online status.
        - true
    - navigator.platform is giving platform.
        - MacIntel
    - navigator.storage is giving storage.
    - ... and more.
*/

/*
    Dates:
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    - const date = new Date();
    - const date = new Date('May 5 2021');
    - const date = new Date('2021-05-05');
        - 2021-05-05 is ISO 8601 format.
        - We can change "-" with "/".
            - const date = new Date('2021/05/05');
        - We can change order of date.
            - const date = new Date('05/05/2021');
    - const date = new Date(2021, 4, 5);
        - 4 is May.
    - const date = new Date(2021, 4, 5, 20);
        - 20 is hour.
    - ... and more.

    - String dates is converting to date with browser's timezone.
    - We can set timezone with new Date('2021-05-05T20:00:00+02:00');
        - +02:00 is timezone.


    - getDate() is giving day of the month.
    - getDay() is giving day of the week.
    - getFullYear() is giving year.
    - getHours() is giving hour.
    - getMilliseconds() is giving milliseconds.
    - getMinutes() is giving minutes.
    - getMonth() is giving month.
    - getSeconds() is giving seconds.
    - getTime() is giving time.
        - 1 January 1970 00:00:00 UTC is 0.
        - getTime() is giving milliseconds.
    - getTimezoneOffset() is giving timezone offset.
        - getTimezoneOffset() is giving minutes.

*/

const date = new Date();