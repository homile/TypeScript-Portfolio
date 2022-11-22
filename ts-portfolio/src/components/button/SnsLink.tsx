import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  color: string;
  img: string;
}

const SnsLink = ({ title, color, img }: Props) => {
  return <Container>{title}</Container>;
};

export default SnsLink;

const Container = styled.div``;
