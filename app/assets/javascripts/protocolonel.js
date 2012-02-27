var Protocolonel = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function(protocols) {
    new Protocolonel.Routers.Protocols();
    this.protocols = new Protocolonel.Collections.Protocols(protocols);
    Backbone.history.start({ pushState: true });
  }
};
