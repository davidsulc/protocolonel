Protocolonel.Views.ProtocolItem = Backbone.View.extend({
  tagName: "tr",
  
  events: {
    "click a": "navigateCRUD"
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
  
  // navigate to CRUD actions when the links are clicked
  navigateCRUD: function (e) {
    var target = $(e.currentTarget);
    if( ! target.attr('data-method')){ // don't change delete links
      e.preventDefault();
      Protocolonel.router.navigate(target.attr('href'), { trigger: true });
    }
  }
});
