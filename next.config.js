
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['iLjXCzcn1QyYBAnX42PvJC'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  