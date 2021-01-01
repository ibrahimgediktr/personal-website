module.exports = {
  siteMetadata: {
    url: "ibrahimgedik.tech",
    title: `İbrahim Gedik`,
    slogan: "Frontend World",
    description: `Frontend Web Developer İbrahim Gedik`,
    author: `@ibrahimgedik`,
    socailLinks: {
      vsco: {
        name: 'VSCO',
        url: 'https://vsco.co/ibrahimgedik/gallery'
      },
      instagram: {
        name: 'Instagram',
        url: 'https://instagram.com/ibrahimgediktr'
      },
      github: {
        name: 'Github',
        url: 'https://github.com/ibrahimgediktr'
      },
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `İbrahim Gedik`,
        short_name: `İG`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Encode Sans`],
        display: "swap"
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -60,
        duration: 1200
      }
    }
  ]
}