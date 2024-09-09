import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    background-color: #a9a9a9;
    cursor: not-allowed;
  }
  &:enabled {
    opacity: 1;
  }
`;

// opacity: ${(props) => (!props.enabled ? 0.5 : 1)};
