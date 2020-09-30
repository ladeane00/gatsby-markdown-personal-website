import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

const AwardTimeline = ({ title, subtitle, content, date}) => (
  <Styled.AwardTimeline>
    <Styled.Point />
    <Styled.Details>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Subtitle>{subtitle}</Styled.Subtitle>
      <Styled.Date>
        {date}
      </Styled.Date>
    </Styled.Details>
    <Styled.Content>{content}</Styled.Content>
  </Styled.AwardTimeline>
);

AwardTimeline.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.any.isRequired,
  date: PropTypes.string.isRequired,
};

export default AwardTimeline;
