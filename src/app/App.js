define([
    'dojo/text!app/templates/App.html',

    'dojo/_base/declare',
    'dojo/_base/array',

    'dojo/dom',
    'dojo/dom-style',

    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dijit/registry',
    './Guage',

    './config'
], function(
    template,

    declare,
    array,

    dom,
    domStyle,

    _WidgetBase,
    _TemplatedMixin,
    _WidgetsInTemplateMixin,
    registry,

    Guage,

    config
) {
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        // summary:
        //      The main widget for the app

        widgetsInTemplate: true,
        templateString: template,
        baseClass: 'app',

        // childWidgets: Object[]
        //      container for holding custom child widgets
        childWidgets: null,

        // map: agrc.widgets.map.Basemap
        map: null,

        constructor: function() {
            // summary:
            //      first function to fire after page loads
            console.info('app.App::constructor', arguments);

            config.app = this;
            this.childWidgets = [];


            this.inherited(arguments);
        },
        postCreate: function() {
            // summary:
            //      Fires when
            console.log('app.App::postCreate', arguments);

            this.initMap();

            /*this.childWidgets.push(
                new SideBarToggler({
                    sidebar: this.sideBar,
                    map: this.map,
                    centerContainer: this.centerContainer
                }, this.sidebarToggle),
                new FindAddress({
                    map: this.map,
                    apiKey: config.apiKey
                }, this.geocodeNode),
                new MagicZoom({
                    map: this.map,
                    mapServiceURL: config.urls.vector,
                    searchLayerIndex: 4,
                    searchField: 'NAME',
                    placeHolder: 'place name...',
                    maxResultsToDisplay: 10,
                    'class': 'first'
                }, this.gnisNode),
                new MagicZoom({
                    map: this.map,
                    mapServiceURL: config.urls.vector,
                    searchLayerIndex: 1,
                    searchField: 'NAME',
                    placeHolder: 'city name...',
                    maxResultsToDisplay: 10
                }, this.cityNode),
                this.printer = new Print({
                    map: this.map,
                    url: config.exportWebMapUrl,
                    templates: [{
                        label: 'Portrait (PDF)',
                        format: 'PDF',
                        layout: 'Letter ANSI A Portrait',
                        options: {
                            legendLayers: []
                        }
                    }, {
                        label: 'Landscape (PDF)',
                        format: 'PDF',
                        layout: 'Letter ANSI A Landscape',
                        options: {
                            legendLayers: []
                        }
                    }]
                }, this.printDiv)
            );*/

        new Guage({
            integrationProgress: '',
            currentCallVolume: '',
            netSentiment: '',
            mentions: ''
        }, 'guageContainer');

            this.inherited(arguments);
        },
        startup: function() {
            // summary:
            //      Fires after postCreate when all of the child widgets are finished laying out.
            console.log('app.App::startup', arguments);

            var that = this;
            array.forEach(this.childWidgets, function(widget) {
                console.log(widget.declaredClass);
                that.own(widget);
                widget.startup();
            });

            this.inherited(arguments);
        },
        initMap: function() {
            // summary:
            //      Sets up the map
            console.info('app.App::initMap', arguments);

            var map;

            require(["esri/map", "dojo/domReady!"], function(Map) {
                map = new Map("map", {
                    basemap: "topo", //For full list of pre-defined basemaps, navigate to http://arcg.is/1JVo6Wd
                    center: [-122.45, 37.75], // longitude, latitude
                    zoom: 13
                });
            });
        }
    });
});
