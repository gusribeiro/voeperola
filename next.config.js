const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./i18n.ts"
);

module.exports = withNextIntl({
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en", // Matched parameters can be used in the destination
        permanent: true,
      },
    ];
  },
});
