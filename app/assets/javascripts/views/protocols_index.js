Protocolonel.Views.ProtocolsIndex = Backbone.View.extend({
  initialize: function() {
  },

  render: function () {
    this.$el.html(JST['protocols/index']({ protocols: this.collection }));
    var self = this;
    this.collection.each(function(protocol) {
      var protocolItem = new Protocolonel.Views.ProtocolItem({model: protocol});
      self.$('table > tbody').append(protocolItem.render().el);
    });
    return this;
  }
});
