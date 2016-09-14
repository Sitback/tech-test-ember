export default function() {

  this.namespace = '/api/v1.0';

  this.get('/blogs', (schema, request) => {
    let slug = request.queryParams['filter[slug]'];

    if (slug) {
      let result = schema.blogs.where({slug: slug});
      if (result.models.length) {
        return schema.blogs.find(result.models[0].attrs.id);
      }
      return {errors: ['blog post not found']};
    }
    else {
      return schema.blogs.all();
    }
  });

  this.logging = true;

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
}
