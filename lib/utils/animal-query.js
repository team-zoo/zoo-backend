module.exports = query => {
  let buildQuery = {};

  if(query.name) {
    buildQuery.name = query.name;
  }

  if(query.colors) {
    buildQuery.colors = query.colors;

  }

  if(query.type) {
    buildQuery.type = query.type;
  }

  if(query.legs) {
    buildQuery.legs = query.legs;
  }

  if(query.status) {
    buildQuery.status = query.status;
  }

  return buildQuery;
};
