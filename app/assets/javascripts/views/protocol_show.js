Protocolonel.Views.ProtocolShow = Backbone.View.extend({
  initialize: function() {
    this.model.bind("change", this.render);
  },

  render: function () {
    this.$el.html(JST['protocols/show']({ model: this.model }));
    return this;
  }
});

