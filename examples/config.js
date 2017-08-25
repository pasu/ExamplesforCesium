/**
 * ExamplesforCesium 示例配置文件：包含示例的分类、名称、缩略图、文件路径
 */
var identification = {
    name: "ExamplesforCesium"
};

var exampleConfig = {
    "Primer": {
        name: "Primer",
        content: {
            "Hello Series": {
                name: "Hello Series",
                content: [{
                    name: "Hello Cesium",
                    thumbnail: "00_hello.jpg",
                    fileName: "00_hello"
                }, {
                    name: "Hello Cesium(requirejs)",
                    thumbnail: "00_hello.jpg",
                    fileName: "00_hello-requirejs"
                }]
            },
            "ImageryProvider": {
                name: "ImageryProvider",
                content: [{
                    name: "LocalImage",
                    thumbnail: "02_localImage.jpg",
                    fileName: "02_localImage"
                }, {
                    name: "Bing Map",
                    thumbnail: "00_hello.jpg",
                    fileName: "02_bingMap"
                },{
                    name: "Google Maps",
                    thumbnail: "02_googlemap.jpg",
                    fileName: "02_googlemaps"
                }, {
                    name: "OpenStreetMap",
                    thumbnail: "02_osm.jpg",
                    fileName: "02_openStreetMap"
                },{
                    name: "MapBox",
                    thumbnail: "02_mapbox.jpg",
                    fileName: "02_mapBox"
                },{
                    name: "WMTS for 天地图",
                    thumbnail: "02_tianditu.jpg",
                    fileName: "02_tianditu"
                }, {
                    name: "ArcGis Server",
                    thumbnail: "02_arcgis.jpg",
                    fileName: "02_arcGisServer"
                },{
                    name: "MultiImageProviders",
                    thumbnail: "02_multilayers.jpg",
                    fileName: "02_multiProvider"
                },{
                    name: "Baidu Map",
                    thumbnail: "02_bd.jpg",
                    fileName: "02_baidu"
                }]
            },
            "Terrain": {
                name: "Terrain",
                content: [{
                    name: "Globe Terrain",
                    thumbnail: "03_globeTerrain.jpg",
                    fileName: "03_globeTerrain"
                }, {
                    name: "STK Terrain",
                    thumbnail: "03_stkTerrain.jpg",
                    fileName: "03_stkTerrain"
                },{
                    name: "ArcGIS Terrain",
                    thumbnail: "03_arcgisTerrain.jpg",
                    fileName: "03_arcgisTerrain"
                }]
            }
        }
    },
    "Widgets": {
        name: "Widgets",
        content: {
            "Widgets Series": {
                name: "Widgets Series",
                content: [{
                    name: "Custom BasePicker",
                    thumbnail: "10_customBasePicker.jpg",
                    fileName: "10_customBasePicker"
                }, {
                    name: "Timeline Style",
                    thumbnail: "10_animation.jpg",
                    fileName: "10_animation"
                },{
                    name: "Timeline Event",
                    thumbnail: "10_animation2.jpg",
                    fileName: "10_animation2"
                }, {
                    name: "Default View Position",
                    thumbnail: "10_fullscreen.jpg",
                    fileName: "10_fullscreen"
                },{
                    name: "SuperMap Geocoder",
                    thumbnail: "10_geocoder.jpg",
                    fileName: "10_geocoder"
                }, {
                    name: "Custom InfoBox",
                    thumbnail: "10_infobox.jpg",
                    fileName: "10_infobox"
                },{
                    name: "Inspector",
                    thumbnail: "10_inspector.jpg",
                    fileName: "10_inspector"
                }]
            }
        }
    },
    "Visualization": {
        name: "Visualization",
        content: {
            "Environment&Planet": {
                name: "Environment&Planet",
                content: [{
                    name: "Real AQI",
                    thumbnail: "20_aqi.jpg",
                    fileName: "20_aqi"
                }, {
                    name: "Berkeley Earth",
                    thumbnail: "20_aqi_BerkeleyEarth.jpg",
                    fileName: "20_aqi_BerkeleyEarth"
                },{
                    name: "Land Temperature Tendency(2006~2017)",
                    thumbnail: "20_landtemperature.jpg",
                    fileName: "20_landtemperature"
                }, {
                    name: "Imagery Layers Split",
                    thumbnail: "20_split.jpg",
                    fileName: "20_split"
                }]
            },
            "MapV": {
                name: "MapV",
                content: [{
                    name: "taxi flow",
                    thumbnail: "21_taxisimulation.gif",
                    fileName: "21_taxisimulation"
                }]
            }
        }
    },
};
/**
 *key值：为exampleConfig配置的key值或者fileName值
 *      （为中间节点时是key值，叶结点是fileName值）
 *value值：fontawesome字体icon名
 *不分层
 */
var sideBarIconConfig = {
    "Primer": "fa-globe",
    "Widgets": "fa-desktop",
    "Visualization": "fa-pie-chart",
};

/**
 *key值：为exampleConfig配置的key值
 *value值：fontawesome字体icon名
 *与sideBarIconConfig的区别：sideBarIconConfig包括侧边栏所有层级目录的图标，exampleIconConfig仅包括一级标题的图标
 */
var exampleIconConfig = {
    "Primer": "fa-globe",
    "Widgets": "fa-desktop",
    "Visualization": "fa-pie-chart",
};