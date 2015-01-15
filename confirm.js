/**
 * Simple jQuery plugin : to ask confirmation on delete
 * usage : $(whatever).confirm();
 * see README.md for the variables you have to set
 * tested with jQuery 1.7.1 and Bootbox 3.3.0
 *
 */
(function($){

    $.fn.extend({

        /**
         * @param url URL to the controller method to remove element
         * @param message Name of the element to display in the confirm window
         * @param removeId ID of the elements to hide (identified by data-confirm-id and class confirm-hide)
         * @returns {*}
         */
        confirm: function(options) {

            var defaults = {
                url: null,
                message: null,
                removeId: null,
                hideClass: "confirm-hide"
            }

            var options =  $.extend(defaults, options);

            return this.each(function() {
                var o = options;
                $(this).click( function(e) {
                   // We define here default values for url, message, removeId, so that they depend on the element we're currently managing.
                    var url = (!o.url) ? $(this).data('confirm-target') : o.url;
                    var message = (!o.message) ? $(this).data('confirm-name') : o.message;
                    var removeId = (!o.removeId) ? $(this).data('confirm-id') : o.removeId;
                    bootbox.confirm("Voulez-vous vraiment supprimer "+message+" ?", "Annuler", "Supprimer", function(result) {
                        if (result) {
                            $.ajax(url, {'success': function () {
                                $("."+o.hideClass+"[data-confirm-id='"+removeId+"']").hide();
                            }
                            });
                        }
                    });
                });
            });
        }
    });

})(jQuery);
