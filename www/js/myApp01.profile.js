var profile = {
    action: "release",
    releaseDir: "release",
    selectorEngine: "acme",
    stripConsole: "normal",
    copyTests: false,
    cssOptimize: "comments.keepLines",
    mini: true,
    webkitMobile: true,
    localeList: "en-us",
    layers: {
        "dojo": {
            customBase: true,
            include: [
				"dojox/mobile",
				"dojox/mobile/parser",
                "dojox/mobile/compat",
                "dojox/mobile/deviceTheme",
				"dojox/mobile/View",
                "dojox/mobile/Heading",
                "dojox/mobile/RoundRectCategory",
                "dojox/mobile/RoundRectList",
                "dojox/mobile/ListItem",
                "dojox/mobile/RoundRectCategory",
                "dojox/mobile/RoundRectCategory",
                "dojox/mobile/RoundRectCategory",
                "dojox/dgauges/components/default/CircularLinearGauge",
                "dojox/dgauges/components/default/HorizontalLinearGauge",
                "dojox/dgauges/components/classic/CircularLinearGauge",
                "dojox/dgauges/components/classic/HorizontalLinearGauge"
            ]
        }
    },
    staticHasFeatures: {
        webkit: true
    },
    packages: [
		{
		    name: "dojo",
		    location: "D:/dojo/dojo-release-1.9.0-src/dojo"
		},
		{
		    name: "dijit",
		    location: "D:/dojo/dojo-release-1.9.0-src/dijit"
		},
		{
		    name: "dojox",
		    location: "D:/dojo/dojo-release-1.9.0-src/dojox"
		}
    ]
};
