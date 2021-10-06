import React from "react";

import { NewFoodFormContainer } from "./styles";

const NewFoodForm: React.FC = () => {
  return (
    <NewFoodFormContainer>
      <div className="form-field">
        <label htmlFor="type">Tipo</label>
        <span>...</span>
      </div>

      <div className="form-field">
        <label htmlFor="name">Name</label>
        <span>...</span>
      </div>

      <div className="form-field">
        <label htmlFor="description">Descrição</label>
        <span>...</span>
      </div>

      <div className="form-field">
        <label htmlFor="price">Valor</label>
        <span>...</span>
      </div>

      <div className="form-field">
        <label htmlFor="image">Imagem</label>
        <span>...</span>
      </div>
    </NewFoodFormContainer>
  );
};

export default NewFoodForm;
