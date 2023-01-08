import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  /* position: relative; */
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const SearchFormInput = styled.input`
  width: 350px;
  margin-right: 10px;
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;

export const Icon = styled(HiSearch)`
  width: 30px;
  height: 30px;
  /* position: absolute; */
`;

export const SearchFormButton = styled.button`
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;
