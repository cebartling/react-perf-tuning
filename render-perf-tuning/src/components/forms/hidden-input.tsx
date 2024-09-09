import styled from 'styled-components';

export const HiddenInput = styled.input.attrs(() => ({
  type: 'hidden',
}))`
  display: none;
`;
