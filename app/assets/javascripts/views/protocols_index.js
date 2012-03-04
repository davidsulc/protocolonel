Protocolonel.Views.ProtocolsIndex = Support.CompositeView.extend({
  initialize: function() {
  },

  render: function () {
    this.renderLayout();
    this.renderProtocols();
    return this;
  },
  
  renderLayout: function () {
    this.$el.html(JST['protocols/index']({ protocols: this.collection }));
  },
  
  renderProtocols: function () {
    var self = this;
    this.collection.each(function(protocol) {
      var row = new Protocolonel.Views.ProtocolItem({model: protocol});
      self.renderChild(row);
      self.$('table > tbody').append(row.el);
    });
  },

  leave: function() {
    this.unbind();
    this.remove();
  }
});
