/**
 * index.js
 * - initialize the app
 */
import { Service } from "./scripts/service/service.js";
import { JsView } from "./scripts/jQuery-app.js";

//use anonymous self-invoking function to not pollute namespace
(function () {

    var service = new Service;
    service.init()
        .done(
            function(data){
                if (data){
                    var jsView = new JsView(service);
                    $('#example1').html( jsView.render().$el );
                }
            }

        )
        .fail( 
            //handle this
        )
        
})();