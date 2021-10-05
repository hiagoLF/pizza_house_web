import CrazyModal from "react-crazy-modal";
import { ModalContent } from "./styles";

const animations = {
  modal: {
    appear: "showByDownSlide",
    disappear: "fadeByUpSlide",
    time: 200,
    timingFunction: "ease",
  },
  background: {
    appear: "showByOpacity",
    disappear: "fadeByOpacity",
    time: 300,
    timingFunction: "ease",
  },
};

export type ConfirmModalProps = {
  modalOpen: boolean;
  onModalRequestClose: () => void;
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  modalOpen,
  onModalRequestClose,
  onConfirm,
  onCancel,
}) => {
  return (
    <CrazyModal
      open={modalOpen}
      onBackGroundClick={onModalRequestClose}
      animations={animations}
    >
      <ModalContent>
        <h3>Deseja Finalizar Pedido?</h3>
        <div id="buttons">
          <button id="no" onClick={onConfirm}>
            Não
          </button>
          <button id="yes" onClick={onCancel}>
            Sim
          </button>
        </div>
      </ModalContent>
    </CrazyModal>
  );
};

export default ConfirmModal;
