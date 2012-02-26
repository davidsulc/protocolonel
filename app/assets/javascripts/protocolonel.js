var Protocolonel = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
    new Protocolonel.Routers.Protocols();
    Backbone.history.start({ pushState: true });
  }
};
