/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    $(document).ready(function() {
        $('#fullpage').fullpage({
            verticalCentered: true,
            sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#4BBFC3'],
            afterRender: function(){

                //playing the video
                $('video').get(0).play();
            }
        });
    });
})(jQuery); // End of use strict
