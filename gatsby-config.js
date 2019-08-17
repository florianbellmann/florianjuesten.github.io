module.exports = {
	siteMetadata: {
    title: `Florian Jüsten Website`,
    description:`My simple website`,
    author:"Florian Jüsten"
	},
	plugins: [
		{
			resolve: `gatsby-plugin-typescript`,
			options: {}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`
			}
		},
		{
			resolve: `gatsby-plugin-sharp`,
			options: {}
		},
		{
			resolve: `gatsby-transformer-sharp`,
			options: {}
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Florian Jüsten`,
        short_name: `florianjuesten`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`
	]
};
