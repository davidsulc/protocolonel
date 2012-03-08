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
    
    if( ! target.attr('data-method')){ // don't change delete links
      e.preventDefault();
      Protocolonel.router.navigate(target.attr('href'), { trigger: true });
    }
  }
}

// inspired by the "Backbone.js on Rails" book by Thoughtbot, section "6.3 Validations"
FormAttributes = function(form) {
  this.form = form;
}
_.extend(FormAttributes.prototype, {
  // takes a string like "protocol[name]" and returns "name"
  extractAttributeName: function (string) {
    var regex = /\[([^\[\]]+)\]/i;
    return string.match(regex)[1];
  },
  
  attributes: function() {
    var self = this;
    var attributes = {};
    _.each($('input, select, textarea', this.form), function(element) {
      var element = $(element);
      if(element.attr('name') != "commit") {
        var name = self.extractAttributeName(element.attr('name'));
        attributes[name] = element.val();
      }
    });
    return attributes;
  }
});

