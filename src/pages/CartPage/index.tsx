import BottomCard from "../../components/BottomCard";
import UserHeader from "../../components/UserHeader";
import CartItens from "./components/CartItens";
import ConfirmModal from "../../components/ConfirmModal";
import { CartPageContainer } from "./styles";
import { useState } from "react";

const CartPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);
  const confirm = () => alert("Confirmando Pedido");

  return (
    <CartPageContainer>
      <ConfirmModal
        modalOpen={modalOpen}
        onModalRequestClose={closeModal}
        onConfirm={confirm}
        onCancel={closeModal}
        title='Deseja Finalizar Pedido?'
      />

      <UserHeader />

      <CartItens />

      <BottomCard
        title="Finalizar Pedido"
        nextIcon={true}
        onClick={openModal}
      />
    </CartPageContainer>
  );
};

export default CartPage;
