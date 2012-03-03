Protocolonel.Views.ProtocolEdit = Support.CompositeView.extend({
  events: {
    "click a": "navigateLink",
    "submit #form": "editProtocol"
  },
  
  initialize: function() {
    _.bindAll(this, "renderForm");
    this.model.bind("change", this.renderForm);
  },
  
  render: function () {
    this.renderLayout();
    this.renderForm();
  },
  
  renderLayout: function () {
    this.$el.html(JST['protocols/edit']({ protocol: this.model }));
  },
  
  renderForm: function () {
    var form = JST['protocols/form']({ protocol: this.model, action: "protocols/" + this.model.id });
    this.$('#form').html(form);
  },
  
  // navigate cancel link
  navigateLink: function(e) {
    Protocolonel.Support.navigateLink(e);
  },
  
  editProtocol: function(e) {
    var attributes = new FormAttributes(this.$('form')).attributes();
    var protocol = this.model;
    
    this.model.save(attributes, {
      success: function() { Protocolonel.router.navigate("/protocols/" + protocol.id, { trigger: true }); },
      error: function() { alert("failure"); }
    });
    e.preventDefault();
  }
});
