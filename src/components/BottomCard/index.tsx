import whiteRightArrowIcon from "../../assets/icons/arrow_right_white.png";
import { BottomCardContainer } from "./styles";

const BottomCard: React.FC = () => {
  return (
    <BottomCardContainer>
      <div id="bottom-card-content">
        <h2>Carrinho</h2>

        <div id="next">
          <span>2 ítens</span>
          <img src={whiteRightArrowIcon} alt="next" />
        </div>
      </div>
    </BottomCardContainer>
  );
};

export default BottomCard;
