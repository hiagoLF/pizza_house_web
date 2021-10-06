import React from "react";
import BottomCard from "../../../../components/BottomCard";
import FoodImageInput from "../../../../components/FoodImageInput";
import FoodInput from "../../../../components/FoodInput";
import FoodsSelect from "../../../../components/FoodsSelect";

import { NewFoodFormContainer } from "./styles";

const NewFoodForm: React.FC = () => {
  return (
    <NewFoodFormContainer>
      <FoodsSelect />

      <FoodInput title='Nome' placeholder='Refeição'/>

      <FoodInput title='Descrição' placeholder='Conte sobre...' multiline={true}/>

      <FoodInput title='Valor' placeholder='R$ 00,00'/>

      <FoodImageInput />

      <BottomCard title='Enviar'/>
    </NewFoodFormContainer>
  );
};

export default NewFoodForm;
