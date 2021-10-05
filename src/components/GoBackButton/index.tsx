import { GoBackButtonContainer } from "./styles";
import backBlueIcon from "../../assets/icons/arrow_left_blue.png";

export type GoBackButtonProps = {
  title: string;
};

const GoBackButton: React.FC<GoBackButtonProps> = ({ title }) => {
  return (
    <GoBackButtonContainer>
      <img src={backBlueIcon} alt="Voltar" />
      <span>{title}</span>
    </GoBackButtonContainer>
  );
};

export default GoBackButton;
