import * as React from "react";
import { Helmet } from "react-helmet";
import { siteMetadata } from "../../gatsby-config";

const Seo = () => {
  return <Helmet
    meta={[
      {
        name: 'title',
        content: siteMetadata.title,
      },
      {
        name: 'description',
        content: siteMetadata.description,
      },
    ]}>
    <title>{siteMetadata.title}</title>
  </Helmet>;
};

export default Seo;
