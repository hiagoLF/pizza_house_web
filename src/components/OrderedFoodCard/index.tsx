import acceptGreenIcon from "../../assets/icons/check.png";
import cancelRedIcon from "../../assets/icons/cancel.png";
import clearBlackIcon from "../../assets/icons/delete.png";
import deliverGreenIcon from "../../assets/icons/deliver.png";
import { OrderedFoodCardContainer } from "./styles";

export type FoodStatus = "to-accept" | "to-deliver";

export type OrderedFoodCardProps = {
  foodTitle?: string;
  details?: string;
  customer?: string;
  table?: number;
  status?: FoodStatus;
};

const OrderedFoodCard: React.FC<OrderedFoodCardProps> = ({
  foodTitle,
  details,
  customer,
  table,
  status,
}) => {
  return (
    <OrderedFoodCardContainer>
      <div id="texts-container">
        <h3>{foodTitle}</h3>
        <p>{details}</p>
        <h3>{customer}</h3>
        <span>Mesa {table}</span>
      </div>

      {status === "to-accept" ? (
        <div className="buttons-container">
          <button>
            <img id="accept" src={acceptGreenIcon} alt="Aceitar" />
          </button>
          <button>
            <img id="cancel" src={cancelRedIcon} alt="Cancelar" />
          </button>
          <button>
            <img id="clear" src={clearBlackIcon} alt="Remover" />
          </button>
        </div>
      ) : (
        <div className="buttons-container">
          <button>
            <img id="deliver" src={deliverGreenIcon} alt="Entregar" />
          </button>
          <button>
            <img id="cancel" src={cancelRedIcon} alt="Cancelar" />
          </button>
        </div>
      )}
    </OrderedFoodCardContainer>
  );
};

export default OrderedFoodCard;
