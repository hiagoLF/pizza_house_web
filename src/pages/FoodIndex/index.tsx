import BottomCard from "../../components/BottomCard";
import UserHeader from "../../components/UserHeader";
import Foods from "./components/Foods";
import { FoodIndexContainer } from "./styles";

const FoodIndex: React.FC = () => {
  return (
    <FoodIndexContainer>
      <UserHeader/>

      <Foods />

      <BottomCard />
    </FoodIndexContainer>
  );
};

export default FoodIndex;
