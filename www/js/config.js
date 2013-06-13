var dojoConfig = {
    baseUrl: "/www",
    selectorEngine: "lite",
    isDebug: true,
    parseOnLoad: true,
    async: true,
    hashPollFrequency: 100,
    packages: [
        {
            "name": "dojo",
            "location": "js/dojo"
        },
        {
            "name": "dojox",
            "location": "js/dojox"
        },
        {
            "name": "dijit",
            "location": "js/dijit"
        },
        {
            "name": "app",
            "location": "js/app"
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