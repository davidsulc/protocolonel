Protocolonel.Views.ProtocolItem = Backbone.View.extend({
  tagName: "tr",
  
  events: {
    "click a": "navigateLink"
  },
  
  initialize: function() {
  },
  
  render: function () {
    this.$el
      .attr('id', "protocol_" + this.model.id)
      .attr('data-id', this.model.id)
      .html(JST['protocols/item']({ model: this.model }));
    return this;
  },
  
  // navigate show/edit links
  navigateLink: function(e) {
    Protocolonel.Support.navigateLink(e);
  }
});
