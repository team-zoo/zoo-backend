const roles = {
  OWNER: 'owner',
  VISITOR: 'visitor'
};

const getAllRoles = () => Object.values(roles);

module.exports = {
  roles,
  getAllRoles
};
