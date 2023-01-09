import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
`;

export const CardWrapper = styled.div`
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Title = styled.h3`
  margin-top: 10px;
`;
export const Link = styled(NavLink)`
  padding: 6px 20px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active,
  &:hover {
    color: white;
    background-color: orangered;
  }
`;

export const Wrap = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  margin: 20px;
`;
