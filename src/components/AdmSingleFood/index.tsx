import React from "react";
import { AdmSingleFoodContainer } from "./styles";
import cancelRedIcon from '../../assets/icons/cancel.png'

export type AdmSingleFoodProps = {
  title: string;
  details: string;
  price: string;
  image: string;
};

const AdmSingleFood: React.FC<AdmSingleFoodProps> = ({
  title,
  details,
  price,
  image,
}) => {
  return (
    <AdmSingleFoodContainer>
      <img src={image} alt={title} />
      <div id="texts">
        <h3>{title}</h3>
        <p>{details}</p>
        <span>R$ {price}</span>
      </div>
      <button>
        <img src={cancelRedIcon} alt='Remover' />
      </button>
    </AdmSingleFoodContainer>
  );
};

export default AdmSingleFood;
