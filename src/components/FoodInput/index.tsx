import React from "react";
import { FoodInputContainer } from "./styles";

type FoodInputProps = {
  title: string;
  placeholder: string;
  multiline?: boolean;
};

const FoodInput: React.FC<FoodInputProps> = ({
  title,
  placeholder,
  multiline,
}) => {
  return (
    <FoodInputContainer>
      <label htmlFor={title}>{title}</label>
      <div id="input-container">
        {multiline ? (
          <textarea id="text-input" name={title} placeholder={placeholder} rows={3}/>
        ) : (
          <input
            id="text-input"
            type="text"
            name={title}
            placeholder={placeholder}
          />
        )}
      </div>
    </FoodInputContainer>
  );
};

export default FoodInput;
