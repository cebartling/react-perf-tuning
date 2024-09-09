import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';

const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: transparent;
  width: 100%;
`;

const ToolbarButton = styled.button`
  background-color: #00158a;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

export const Toolbar = ({
  handleOnClickAddButton,
  disabled,
}: {
  handleOnClickAddButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
}) => {
  return (
    <ToolbarContainer role="toolbar">
      <ToolbarButton role="button" onClick={handleOnClickAddButton} disabled={disabled}>
        <FiPlus />
      </ToolbarButton>
    </ToolbarContainer>
  );
};
