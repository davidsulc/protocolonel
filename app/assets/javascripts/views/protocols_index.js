Protocolonel.Views.ProtocolsIndex = Support.CompositeView.extend({
  events: {
    "click a": "navigateLink"
  },
  
  initialize: function() {
    _.bindAll(this, "renderProtocols");
    _.bindAll(this, "renderNewProtocol");
    this.collection.bind("add", this.renderNewProtocol, this);
    this.collection.bind("remove", this.renderProtocols, this);
    this.collection.bind("reset", this.renderProtocols, this);
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
    var $tableBody = self.$('table > tbody').html('');
    this.collection.each(function(protocol) {
      var row = new Protocolonel.Views.ProtocolItem({model: protocol});
      self.renderChild(row);
      $tableBody.append(row.el);
    });
  },
  
  renderNewProtocol: function (protocol) {
    var row = new Protocolonel.Views.ProtocolItem({model: protocol});
    this.renderChild(row);
    self.$('table > tbody').append(row.el);
  },
  
  // navigate cancel link
  navigateLink: function(e) {
    Protocolonel.Support.navigateLink(e);
  },

  leave: function() {
    this.unbind();
    this.remove();
  }
});
