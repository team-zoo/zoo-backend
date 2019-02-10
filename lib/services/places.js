const request = require('superagent');

const getGeoLocation = zip => {
  request
    .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=${process.env.API_KEY}`)
    .then(locationRes => {
      const { lat, lng } = locationRes.body.results[0].geometry.location;

      return { lat, lng };
    });
};

const findZoos = ({ lat, lng }, radius = 100) => {
  request
    .get(`https://maps.googleapis.com/maps/api/place/textsearch/json?type=zoo&location=${lat},${lng}&radius=${radius}&key=${process.env.API_KEY}`)
    .then(apiRes => {
      return apiRes.body.results.map(zoo => ({
        placeId: zoo.place_id,
        name: zoo.name,
        address: zoo.formatted_address,
        rating: zoo.rating
      }));
    });
};

const findZoosByZip = (zip, radius) => {
  return getGeoLocation(zip)
    .then(location => findZoos(location, radius));
};

module.exports = {
  getGeoLocation,
  findZoos,
  findZoosByZip
};
