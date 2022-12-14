import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { skillActions } from '../../redux/reducers/skillReducer';

const filter: string[] = ['Front-end', 'Back-end', 'Deploy', 'Etc'];

const SkillFilter = () => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState(0);

  const skillCheck = (idx: number) => {
    setSelect(idx);
    dispatch(skillActions.skillSelected({ skillSelected: idx }));
  };

  return (
    <FilterContainer>
      {filter.map((el, idx: number) => {
        return (
          <FilterButton
            key={idx}
            selected={select === idx}
            onClick={() => skillCheck(idx)}
          >
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
  width: 100%;
  margin: 60px 0;
  flex-wrap: wrap;

  @media screen and (max-width: 767px) {
    margin: 20px 0;
  }
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

  @media screen and (max-width: 767px) {
    margin: 10px 10px;
  }
`;
