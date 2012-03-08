Protocolonel.Views.ProtocolNew = Support.CompositeView.extend({
  events: {
    "click a": "navigateLink",
    "submit #form": "createProtocol"
  },
  
  initialize: function() {
  },
  
  render: function () {
    this.renderLayout();
    this.renderForm();
    return this;
  },
  
  renderLayout: function () {
    this.$el.html(JST['protocols/new']({ protocol: this.model }));
  },
  
  renderForm: function () {
    var form = JST['protocols/form']({ protocol: this.model, action: "protocols" });
    this.$('#form').html(form);
  },
  
  // navigate cancel link
  navigateLink: function(e) {
    Protocolonel.Support.navigateLink(e);
  },
  
  createProtocol: function(e) {
    var attributes = new FormAttributes(this.$('form')).attributes();
    var protocol = this.model;
    var collection = this.collection;
    
    protocol.save(attributes, {
      success: function() {
        var view = new Protocolonel.Views.ProtocolShow({ model: protocol });
        Protocolonel.router.swap(view);
        $('#notice').text('Protocol was successfully created.');
        Protocolonel.router.navigate("/protocols/" + protocol.id);
        collection.add(protocol);
      },
      error: function() { alert("failure"); }
    });
    e.preventDefault();
  },

  leave: function() {
    this.unbind();
    this.remove();
  }
});
