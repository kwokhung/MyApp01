var dojoConfig = {
    baseUrl: "C:/Projects/MyApp01/www",
    selectorEngine: "lite",
    isDebug: true,
    parseOnLoad: true,
    async: true,
    hashPollFrequency: 100,
    packages: [
        {
            "name": "dojox",
            "location": "C:/Projects/MyApp01/www/js/dojox"
        },
        {
            "name": "dijit",
            "location": "C:/Projects/MyApp01/www/js/dijit"
        },
        {
            "name": "app",
            "location": "C:/Projects/MyApp01/www/js/app"
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