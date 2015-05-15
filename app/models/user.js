import DS from 'ember-data';

export default DS.Model.extend({
  userName: DS.attr('string'),
  dispName: DS.attr('string'),
  email:    DS.attr('string')
}).reopenClass({
  FIXTURES: [
    {
      id: 1,
      userName: 'ahundiak',
      dispName: 'Art Hundiak',
      email: 'ahundiak@example.com'
    },
    {
      id: 2,
      userName: 'bobbaily',
      dispName: 'Bob Bailey',
      email: 'bbaily@example.com'
    },
    {
      id: 3,
      userName: 'rroberts',
      dispName: 'Rick Roberts',
      email: 'rroberts@example.com'
    }
  ]
});
