module.exports = {
  siteMetadata: {
      title: `Savio Sebastian's Personal Website`,
      siteUrl: `https://saviosebastian.com`,
      description: `Personal site - Software Development`,
  },
  plugins: ["gatsby-plugin-sass", 
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "217868485"
      }
    }, 
    "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    "gatsby-plugin-mdx", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    /**
     * Installed this after running Lighthouse and its recommendation
     * @since 20220123 0522
     */
    'gatsby-plugin-minify',
    /**
     * Installed this after running Lighthouse and its recommendation
     * From YouTube: https://www.youtube.com/watch?v=ASOlzKN1T-Y
     * https://www.gatsbyjs.com/plugins/gatsby-plugin-html-attributes/
     * @since 20220123 0523
     */
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
  ]
};