import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import AwardTimeline from 'components/ui/AwardTimeline';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

const Awards = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "awards section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "award" } } }
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              award
              organization
              dateGiven
            }
          }
        }
      }
    }
  `);

  const sectionTitle = markdownRemark.frontmatter;
  const awards = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />

      {awards.map((item) => {
        const {
          id,
          html,
          frontmatter: { award, organization, dateGiven}
        } = item.node;

        return (
          <AwardTimeline
            key={id}
            title={award}
            subtitle={organization}
            content={<FormatHtml content={html} />}
            date={dateGiven}
          />
        );
      })}
    </Container>
  );
};

export default Awards;
