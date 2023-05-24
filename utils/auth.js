const withAuth = (req, res, next) => { // Create a middleware function that redirects the user to the login page if they try to access a route while not logged in
    // If the user isn't logged in, redirect them to the login page
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else { // If the user is logged in, execute the route function that will allow them to view the site
      next();
    }
  };
  
  module.exports = withAuth; // Export the withAuth function for use in other files
  