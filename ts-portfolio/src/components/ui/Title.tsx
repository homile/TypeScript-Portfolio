import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
}

const Title = (props: Props) => {
  return <H1>{props.title}</H1>;
};

export default Title;

const H1 = styled.h1`
  font-weight: ${(props) => props.theme.weightBold};
  font-size: 36px;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid ${(props) => props.theme.colorBlack};
`;
