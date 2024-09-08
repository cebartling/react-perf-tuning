import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';

const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f3f3f3;
`;

const ToolbarButton = styled.button`
  background-color: #4caf50;
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
}: {
  handleOnClickAddButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <ToolbarContainer role="toolbar">
      <ToolbarButton role="button" onClick={handleOnClickAddButton}>
        <FiPlus />
      </ToolbarButton>
    </ToolbarContainer>
  );
};
