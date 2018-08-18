export var Service = function(){
    var that = this;
    this.data;

    this.init = function(){
        var deferred = $.Deferred();
        $.getJSON( "./data/data.json", function(data) {
            //console.log( "success" );
          })
            .done(function(data) {
              that.data = data;
              deferred.resolve(that.data);
            })
            .fail(function(e) {
              console.log( "error: can not get employee data" );
              deferred.fail(e)
            })
            .always(function() {
              //console.log( "finished" );
            });  
        return deferred.promise( this.data );
    }
}