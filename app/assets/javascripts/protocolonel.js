var Protocolonel = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function(protocols) {
    this.protocols = new Protocolonel.Collections.Protocols(protocols);
    this.router = new Protocolonel.Routers.Protocols({collection: this.protocols});
    Backbone.history.start({ pushState: true });
  }
};

Protocolonel.Support = {
  // navigate to CRUD actions when the links are clicked
  navigateLink: function (e) {
    var target = $(e.currentTarget);
    
    // ****************************************************************
    // to be removed once edit view is implemented with backbone
    if( ! (target.html() == 'Show' || target.html() == 'Back') ){
      return true;
    }
    // ****************************************************************
    
    if( ! target.attr('data-method')){ // don't change delete links
      e.preventDefault();
      Protocolonel.router.navigate(target.attr('href'), { trigger: true });
    }
  }
}
