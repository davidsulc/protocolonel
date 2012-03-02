Protocolonel.Routers.Protocols = Support.SwappingRouter.extend({
  initialize: function() {
  },

  routes: {
    "":          "index",
    "protocols": "index"
  },
  
  index: function() {
    var view = new Protocolonel.Views.ProtocolsIndex({ collection: Protocolonel.protocols });
    $('body').html(view.render().el);
  }
});