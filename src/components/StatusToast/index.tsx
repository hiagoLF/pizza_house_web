import React from "react";
import { StatusToastContainer } from "./styles";
import cancelRedButton from '../../assets/icons/cancel.png'

export type StatusToastProps = {
  status?: "cart" | "row" | "preparing" | "delivered" | "canceled";
};

const StatusToast: React.FC<StatusToastProps> = ({ status }) => {
  return (
    <StatusToastContainer status={status}>
      <div id="toast">
        {status === "row" && "Na fila"}
        {status === "preparing" && "Em preparo"}
        {status === "delivered" && "Entregue"}
        {status === "canceled" && "Cancelado"}
      </div>

      {status === 'row' && (
        <img src={cancelRedButton} alt='Cancelar' />
      )}
    </StatusToastContainer>
  );
};

export default StatusToast;
