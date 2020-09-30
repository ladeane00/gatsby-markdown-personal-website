import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import List from 'components/ui/List';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

const Interests = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "interests section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "interest" } } }
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              interest
              add
            }
          }
        }
      }
    }
  `);

  const sectionTitle = markdownRemark.frontmatter;
  const interests = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />

      {interests.map((item) => {
        const {
          id,
          html,
          frontmatter: { interest, add }
        } = item.node;

        return (
          <List
            key={id}
            title={interest}
            subtitle={add}
            content={<FormatHtml content={html} />}
          />
        );
      })}
    </Container>
  );
};

export default Interests;
