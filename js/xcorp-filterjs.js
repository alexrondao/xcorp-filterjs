var teste = "Hello";

(function($) {
        $.fn.filter = function(options) {
            // não há necessidade de fazer $ (this) porque
            // "this" já é um objeto jquery

            var defaults = {
                "target": "div",
                "typeStyle": "B", //-->> B - Bootstrap, M - Material
                "data": [
                    { "id": "", "type": "", "data": [], "displayName": "", "format": "", "placeholder": "", onBegin: function() {} }
                ],
                onApplied: function() {},
                onRemoved: function() {}

            };
            var settings = $.extend({}, defaults, options);


        })(jQuery);