import React from 'react';
import styled from 'styled-components';
import { github, blog } from '../../assets/img/sns/index';

interface dataType {
  title: string;
  color: string;
  img: string;
  link: string;
}

const SnsLink = () => {
  const snsData: dataType[] = [
    {
      title: 'Blog',
      color: '#EA5220',
      img: `${blog}`,
      link: 'https://homile.tistory.com/',
    },
    {
      title: 'Github',
      color: '#000000',
      img: `${github}`,
      link: 'https://github.com/homile',
    },
  ];

  return (
    <Ul>
      {snsData.map((sns, idx: number) => {
        return (
          <Li key={idx} color={sns.color}>
            <a href={sns.link}>
              <Title color={sns.color}>{sns.title}</Title>
              <Logo src={sns.img} />
            </a>
          </Li>
        );
      })}
    </Ul>
  );
};

export default SnsLink;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  font-weight: ${(props) => props.theme.weightBold};
  font-size: ${(props) => props.theme.fontRegular};
  height: 2.75rem;
  padding-right: 0.625rem;
  margin-right: 8px;
  cursor: pointer;
  border-radius: ${(props) => props.theme.sizeBorderRadius};

  &:hover {
    border: 1px solid ${(props) => props.color};
    border-radius: ${(props) => props.theme.sizeBorderRadius};
  }

  a {
    display: flex;
    align-items: center;
  }
`;

const Title = styled.span`
  color: ${(props) => props.color};
  padding: 0 0.625rem;
`;

const Logo = styled.img`
  width: 2.25rem;
  height: 2.25rem;
`;
