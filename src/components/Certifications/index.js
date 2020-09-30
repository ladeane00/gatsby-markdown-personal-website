import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import List from 'components/ui/List';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

const Certifications = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "certifications section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "certification" } } }
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              certif
              organization
            }
          }
        }
      }
    }
  `);

  const sectionTitle = markdownRemark.frontmatter;
  const certifications = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />

      {certifications.map((item) => {
        const {
          id,
          html,
          frontmatter: { certif, organization }
        } = item.node;

        return (
          <List
            key={id}
            title={certif}
            subtitle={organization}
            content={<FormatHtml content={html} />}
          />
        );
      })}
    </Container>
  );
};

export default Certifications;
