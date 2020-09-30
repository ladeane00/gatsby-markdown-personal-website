import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

const List = ({ title, subtitle, content}) => (
  <Styled.List>
    <Styled.Point />
    <Styled.Details>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Subtitle>{subtitle}</Styled.Subtitle>
    </Styled.Details>
    <Styled.Content>{content}</Styled.Content>
  </Styled.List>
);

List.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.any.isRequired,
};

export default List;
