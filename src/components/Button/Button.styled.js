import styled from 'styled-components';
export const ButtonB = styled.button`
  min-width: 150px;
  padding: 10px;
  margin-top: 6px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  background-color: rgb(130, 152, 166);
  /* background-color: #e9e9e9; */
  /* color: #3a383d;  */
  color:rgb(6, 70, 109);
  transition: background-color 250ms linear;
  &:hover,
  &:focus {
    background-color: #188ce8;
    color: white;
  }
`;
