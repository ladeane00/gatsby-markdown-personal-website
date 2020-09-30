import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import List from 'components/ui/List';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

const Languages = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "languages section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "language" } } }
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              language
              proficiency
            }
          }
        }
      }
    }
  `);

  const sectionTitle = markdownRemark.frontmatter;
  const languages = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />

      {languages.map((item) => {
        const {
          id,
          html,
          frontmatter: { language, proficiency }
        } = item.node;

        return (
          <List
            key={id}
            title={language}
            subtitle={proficiency}
            content={<FormatHtml content={html} />}
          />
        );
      })}
    </Container>
  );
};

export default Languages;
