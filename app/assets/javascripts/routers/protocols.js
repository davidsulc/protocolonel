Protocolonel.Routers.Protocols = Support.SwappingRouter.extend({
  initialize: function(options) {
    this.el = $('#protocols');
    this.collection = options.collection;
  },

  routes: {
    "":                   "index",
    "protocols":          "index",
    "protocols/:id":      "show",
    "protocols/:id/edit": "edit"
  },
  
  index: function() {
    var view = new Protocolonel.Views.ProtocolsIndex({ collection: Protocolonel.protocols });
    this.swap(view);
  },

  show: function(protocolId) {
    var protocol = this.collection.get(protocolId);
    var protocolRouter = this;
    protocol.fetch({
      success: function() {
        var view = new Protocolonel.Views.ProtocolShow({ model: protocol });
        protocolRouter.swap(view);
      }
    });
  },
  
  edit: function(protocolId) {
    var protocol = this.collection.get(protocolId);
    var protocolRouter = this;
    protocol.fetch({
      success: function() {
        var view = new Protocolonel.Views.ProtocolEdit({ model: protocol });
        protocolRouter.swap(view);
      }
    });
  }
});