import Ember from 'ember';

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
];

// The [propertyType] means you are passed an array, but taking the first element
// {{my-helper "foo" "bar"}} would result in myHelper(["foo", "bar"]).
// See: https://guides.emberjs.com/v2.13.0/tutorial/hbs-helper/
export function rentalPropertyType([propertyType]) {
  if (communityPropertyTypes.includes(propertyType)) {
    return 'Community';
  }
  return 'Standalone';
};

export default Ember.Helper.helper(rentalPropertyType);
