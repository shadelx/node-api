const permission = (...allowedRoles) => {
    return (req, res, next) => {
      const { user } = req;
      console.log(user)
      if (user && allowedRoles.includes(user.type)) {
        return next(); // if type permission is allowed, so continue the request using the next middleware
      }
      return res.status(403).json({ message: 'Forbidden fool' });
    };
  }
  
  module.exports = permission;