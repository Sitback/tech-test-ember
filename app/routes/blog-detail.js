import Ember from 'ember';

export default Ember.Route.extend({
  model(request) {
    return this.get('store').queryRecord('blog', {
      filter: {
        slug: request.slug
      }
    });
  }
});
