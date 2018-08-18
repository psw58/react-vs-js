
export var JsView = function( service ){
    var that = this;
    this.init = function(){
        this.$el = $('<div/>');
        this.$el.on('keyup', '.search', findByName )
    }

    this.template = function( data ){
        return '<input class="search" type="text" placeholder="search Employes" /><br><div class="list" />';
    }

    this.listTemplate = function( employees ){
        var hinner = '';
        $.each(employees, function(i, el){
            hinner += '<div class="row">'+
                '<div class="col-md-6">'+
                    '<div class="contact-box center-version">'+
                        '<a href="#profile.html">'+
                            '<img alt="image" class="img-circle" src="'+el.picture+'">'+
                            '<h3 class="m-b-xs"><strong>'+ el.firstName + ' ' +el.lastName+'</strong></h3>'+            
                        '</a>'+
                       '<div class="contact-box-footer">'+
                            '<div class="m-t-xs btn-group">'+
                                '<a class="btn btn-xs btn-white"><i class="fa fa-phone"></i> Call </a>'+
                                el.phone+
                            '</div>'+
                        '</div>'+
                
                    '</div>'+
                '</div>'+
            '</div>';    
        })
        return hinner;
    }

    this.render = function( data ){
        this.$el.html( this.template( data ) )
        return this;
    }

    function renderList( employees ){
        that.$el.find('.list').html( that.listTemplate(employees) );
    }

    function findByName() {
        var searchStr = $('.search').val()
        if (searchStr ){
            var results = service.data.filter(function(element) {
                var fullName = element.firstName+ " " + element.lastName;
                return fullName.toLowerCase().indexOf(searchStr .toLowerCase()) > -1;
            });
            renderList(results);
        }else{
            renderList([]);
        }
    };

    this.init();
}