var dojoConfig = {
    selectorEngine: "lite",
    isDebug: true,
    parseOnLoad: true,
    async: true,
    hashPollFrequency: 100,
    packages: [
        {
            "name": "dojox",
            "location": "/www/js/dojox"
        },
        {
            "name": "app",
            "location": "/www/js/app"
        }
    ],
    locale: (location.search.match(/locale=([\w\-]+)/) ? RegExp.$1 : "en"),
    extraLocale: [
        "en",
        "zh",
        "zh-cn"
    ],
    dojoBlankHtmlUrl: "js/dojo/resources/blank.html"
};