import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  /* color: black; */
  color:rgb(76, 181, 245);
  font-weight: 500;

  &.active {
    color: white;
    background-color: rgb(130, 152, 166)
  }
`;