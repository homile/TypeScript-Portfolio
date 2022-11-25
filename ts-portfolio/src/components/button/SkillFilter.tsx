import React, { useState } from 'react';
import styled from 'styled-components';

const filter: string[] = ['Front-end', 'Back-end', 'Deploy', 'Etc'];

const SkillFilter = () => {
  const [select, setSelect] = useState('Front-end');

  return (
    <FilterContainer>
      {filter.map((el, idx: number) => {
        return (
          <FilterButton key={idx} selected={select === el}>
            {el}
          </FilterButton>
        );
      })}
    </FilterContainer>
  );
};

export default SkillFilter;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 532px;
  margin: 60px 0;
`;

const FilterButton = styled.button<{ selected: boolean }>`
  width: 100px;
  height: 40px;
  padding: 0.8rem;
  border: 1px solid ${(props) => props.theme.colorLightWhite};
  margin: 0 22px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 4px;
  background: ${(props) => props.selected && props.theme.colorLightBlue};
  color: ${(props) => props.selected && props.theme.colorWhite};

  &:hover {
    color: ${(props) => props.theme.colorWhite};
    background: ${(props) => props.theme.colorLightBlue};
  }
`;
