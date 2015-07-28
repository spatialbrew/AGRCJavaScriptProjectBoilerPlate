define([
   

    'dijit/_WidgetBase',

    'dojo/_base/array',
    'dojo/_base/declare',
    'dojo/_base/lang'
    

], function (
   
    _WidgetBase,

    array,
    declare,
    lang
) {
    return declare([_WidgetBase], {
        
        baseClass: 'helloworld-widget',

        constructor: function (params) {
            

            lang.mixin(this, params);

        
        },
        helloTest: function(){
			return 'Hello world!';
		}
    });
});
