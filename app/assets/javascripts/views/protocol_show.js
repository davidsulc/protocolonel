Protocolonel.Views.ProtocolShow = Backbone.View.extend({
  events: {
    "click a": "navigateLink"
  },
  
  initialize: function() {
    _.bindAll(this, "render");
    this.model.bind("change", this.render);
  },

  render: function () {
    this.$el.html(JST['protocols/show']({ model: this.model }));
    return this;
  },
  
  // navigate show/edit links
  navigateLink: function(e) {
    Protocolonel.Support.navigateLink(e);
  }
});

