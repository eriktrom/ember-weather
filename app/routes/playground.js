var Playground = Ember.Route.extend({

  model: function(){
    return this.store.find('playground');
  }

});

export default Playground;
