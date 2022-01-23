import * as React from "react";
import { Helmet } from "react-helmet";
import { siteMetadata } from "../../gatsby-config";

// markup
const IndexPage = () => {
  return (
    <main>
      <Helmet
        meta={[
          {
            name: 'title',
            content:  siteMetadata.title,
          },
          {
              name: 'description',
              content:  siteMetadata.description,
          },
      ]} >
        <title>{siteMetadata.title}</title>
      </Helmet>

      <h1 >
        Welcome to saviosebastian.com
      </h1>
      <h2>
        I'm just figuring this out for now... there's nothing much here! <i>go some place else!....</i>
      </h2>
    </main>
  )
}

export default IndexPage
