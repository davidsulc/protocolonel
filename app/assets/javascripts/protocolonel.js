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
