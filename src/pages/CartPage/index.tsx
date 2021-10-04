import BottomCard from "../../components/BottomCard";
import UserHeader from "../../components/UserHeader";
import CartItens from "./components/CartItens";
import { CartPageContainer } from "./styles";

const CartPage: React.FC = () => {
  return (
    <CartPageContainer>
      <UserHeader/>

      <CartItens />

      <BottomCard />
    </CartPageContainer>
  );
};

export default CartPage;
