'use strict';

module.exports = {
  mapping: {
    "MarkdownRemark.frontmatter.faqs": `FaqYaml`,
  },
  siteMetadata: {
    title: 'EasyDisplay',
    subtitle: 'EasyDisplay',
    description: 'EasyDisplay, the cloud browser, support desktop display made easy',
    siteUrl: 'https://www.easydisplay.info',
    macosLatestVersiion: '0.1.2',
    downloadLink: 'https://downloads.easydisplay.info/downloads/EasyDisplay-0.1.2.dmg',
    itunesLink: 'https://itunes.apple.com/us/app/easydisplay/id1434962745?ls=1&mt=8',
    twitter: 'tillawy',
    github: 'https://github.com/easy-display',
    author: {
      name: 'Mohammed O. Tillawy',
      url: 'https://twitter.com/tillawy',
      email: 'tillawy@gmail.com'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          `gatsby-transformer-yaml`,
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
