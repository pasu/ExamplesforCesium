var developMode = true;

if(developMode){
	require.config({
	baseUrl : '../Source',

    paths: {
        echarts: '../examples/js/echarts.simple.min'
    },
    shim: {
        echarts : {

            exports : 'echarts'
        }
    }
	});
} else{
	require.config({
		  paths: {
				'Cesium': '../../Build/Cesium/Cesium',
              'echarts': './echarts.simple.min'
		  },
		  shim: {
			  Cesium: {
				  exports: 'Cesium'
			  },
              echarts : {
                  exports : 'echarts'
              }
		  }
	});
}

if (typeof Cesium !== "undefined" && typeof echarts !== "undefined") {
    onload(Cesium,echarts);
} else if (typeof require === "function") {
    require(["Cesium","echarts"], onload);
}
