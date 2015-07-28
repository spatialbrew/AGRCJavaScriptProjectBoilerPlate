define([
    'dojo/_base/array',
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/on',

    'esri/map',
 
    'put-selector/put'

], function (
    array,
    declare,
    lang,
    on,

    Map,

    put
) {
    return declare(null, {
        _layers: [], //temp array for layer loading
        constructor: function (config) {
            config = config || {};
           
            this.initMap(config);
        },
        initMap: function (config) {
        var map = new Map(put(document.body, 'div.map'), {
                basemap: "topo", //For full list of pre-defined basemaps, navigate to http://arcg.is/1JVo6Wd
                center: [-122.45, 37.75], // longitude, latitude
                zoom: 13
            } || {});

        this.inherited(arguments);

        }
    });
});