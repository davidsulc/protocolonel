Protocolonel.Views.ProtocolItem = Backbone.View.extend({
  tagName: "tr",
  
  events: {
    "click a": "navigateLink",
    'click a[data-method="delete"]': "destroy"
  },
  
  initialize: function() {
    this.model.bind("change", this.render, this);
    this.model.bind("destroy", this.remove, this);
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
  },
  
  remove: function() {
    $(this.el).remove();
  },
  
  destroy: function(e) {
    if(confirm("Are you sure ?")){
      this.model.destroy();
      e.preventDefault();
      e.stopPropagation();
    }
  },

  leave: function() {
    this.unbind();
    this.remove();
  }
});
