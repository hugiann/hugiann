import React from "react";
import { Helmet } from "react-helmet-async";

import settings from "config/settings";

interface IMetaData {
  title: string;
  description?: string;
  bodyClass?: object;
}

// Join us on our new journey · Spectrum Support
const MetaData = ({ title, description, bodyClass }: IMetaData) => {
  title = title || settings.siteTitleMeta || settings.title;
  description = description || settings.siteDescriptionMeta;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:site_name" content={settings.title} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <html lang={settings.lang} />
      <body className={bodyClass?.toString()} />
    </Helmet>
  );
};

MetaData.defaultProps = {
  data: {},
};

export default MetaData;
