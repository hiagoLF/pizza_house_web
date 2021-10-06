import styled from "styled-components";
import plusBlackIcon from "../../assets/icons/add.png";

const PlusButton: React.FC = () => {
  return (
    <StyledPlusButton>
      <img src={plusBlackIcon} alt="Adicionar" />
    </StyledPlusButton>
  );
};

const StyledPlusButton = styled.button`
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  padding: 10px;
  margin: 10px;
`;

export default PlusButton;
