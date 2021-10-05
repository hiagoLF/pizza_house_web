import BottomCard from "../../components/BottomCard";
import UserHeader from "../../components/UserHeader";
import Foods from "./components/Foods";
import { FoodIndexContainer } from "./styles";

const FoodIndex: React.FC = () => {
  return (
    <FoodIndexContainer>
      <UserHeader />

      <Foods />

      <BottomCard title="Carrinho" nextIcon={true} detail="2 ítens" />
    </FoodIndexContainer>
  );
};

export default FoodIndex;
