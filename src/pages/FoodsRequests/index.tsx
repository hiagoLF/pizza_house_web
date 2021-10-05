import BottomCard from "../../components/BottomCard";
import UserHeader from "../../components/UserHeader";
import OrdersFood from "./components/OrdersFood";
import ConfirmModal from "../../components/ConfirmModal";
import { FoodsRequestsPageContainer } from "./styles";
import { useState } from "react";

const FoodsRequestsPage: React.FC = () => {
  return (
    <FoodsRequestsPageContainer>
      <UserHeader />

      <OrdersFood />
    </FoodsRequestsPageContainer>
  );
};

export default FoodsRequestsPage;
