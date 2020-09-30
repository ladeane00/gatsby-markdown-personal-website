import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import List from 'components/ui/List';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

const Activities = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "activities section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "activity" } } }
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              activity
              organization
            }
          }
        }
      }
    }
  `);

  const sectionTitle = markdownRemark.frontmatter;
  const activities = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />

      {activities.map((item) => {
        const {
          id,
          html,
          frontmatter: { activity, organization }
        } = item.node;

        return (
          <List
            key={id}
            title={activity}
            subtitle={organization}
            content={<FormatHtml content={html} />}
          />
        );
      })}
    </Container>
  );
};

export default Activities;
