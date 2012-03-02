Protocolonel.Views.ProtocolItem = Backbone.View.extend({
  tagName: "tr",
  
  initialize: function() {
  },
  
  render: function () {
    this.$el.attr('id', "protocol_" + this.model.id).html(JST['protocols/item']({ model: this.model }));
    return this;
  }
});
