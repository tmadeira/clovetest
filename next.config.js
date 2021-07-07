
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['eV7Xi9hgseajGR8GcVFgnT'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  