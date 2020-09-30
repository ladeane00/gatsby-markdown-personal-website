import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import Projects from 'components/Projects';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <HeroBanner />
      <Projects />
    </Layout>
  );
};

export default IndexPage;
