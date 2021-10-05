import whiteRightArrowIcon from "../../assets/icons/arrow_right_white.png";
import { BottomCardContainer } from "./styles";

type BottomCardType = {
  title?: string;
  detail?: string;
  nextIcon?: boolean;
  onClick?: () => void
};

const BottomCard: React.FC<BottomCardType> = ({ title, detail, nextIcon, onClick }) => {
  return (
    <BottomCardContainer onClick={onClick}>
      <div id="bottom-card-content">
        {title && <h2>{title}</h2>}

        {(detail || nextIcon) && (
          <div id="next">
            <span>{detail}</span>
            {nextIcon && <img src={whiteRightArrowIcon} alt="next" />}
          </div>
        )}
      </div>
    </BottomCardContainer>
  );
};

export default BottomCard;
