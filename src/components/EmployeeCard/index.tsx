import React from "react";
import { EmployeeCardContainer } from "./styles";
import cancelIcon from '../../assets/icons/cancel.png'

type EmployeeCardProps = {
  name: string;
  email: string;
  type: number;
  image: string;
};

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  name,
  email,
  type,
  image,
}) => {
  return (
    <EmployeeCardContainer>
      <img src={image} alt={name} />
      <div id="texts">
        <h3>{name}</h3>
        <span>{email}</span>
        <h4>{type === 0 ? "Chefe" : "Funcionário"}</h4>
      </div>
      <button>
        <img src={cancelIcon} alt="Remover" />
      </button>
    </EmployeeCardContainer>
  );
};

export default EmployeeCard;
