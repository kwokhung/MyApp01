var dojoConfig = {
    baseUrl: "/www",
    tlmSiblingOfDojo: false,
    selectorEngine: "lite",
    isDebug: true,
    parseOnLoad: true,
    async: true,
    hashPollFrequency: 100,
    packages: [
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