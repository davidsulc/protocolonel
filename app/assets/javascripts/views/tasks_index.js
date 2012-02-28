Protocolonel.Views.ProtocolsIndex = Backbone.View.extend({
  initialize: function() {
  },

  render: function () {
    this.$el.html(JST['protocols/index']({ protocols: this.collection }));
    return this;
  }
});
