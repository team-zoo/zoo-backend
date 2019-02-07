module.exports = query => {
  let buildQuery = {};

  if(query.name) {
    buildQuery.name = query.name;
  }

  if(query.color) {
    buildQuery.color = query.color;

  }

  if(query.type) {
    buildQuery.type = query.type;
  }

  return buildQuery;
};
