sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"riskmgn/test/integration/pages/RisksList.gen",
	"riskmgn/test/integration/pages/RisksObjectPage.gen"
], function (JourneyRunner, RisksListGenerated, RisksObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('riskmgn') + '/test/flp.html#app-preview',
        pages: {
			onTheRisksListGenerated: RisksListGenerated,
			onTheRisksObjectPageGenerated: RisksObjectPageGenerated
        },
        async: true
    });

    return runner;
});

