import React, { ChangeEvent, useState } from "react";
import { FoodImageInputContainer } from "./styles";
import imageIcon from "../../assets/icons/image-black.png";

const FoodImageInput: React.FC = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  function handleSelectImage(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }

    const selectedImages = Array.from(event.target.files);

    setImageFile(selectedImages[0]);

    const selectedImagesPreview = selectedImages.map((image) => {
      return URL.createObjectURL(image);
    });

    setImagePreview(selectedImagesPreview[0]);
  }

  console.log(imageFile);

  return (
    <FoodImageInputContainer>
      <div>
        {imagePreview ? (
          <img
            id="preview"
            src={imagePreview}
            alt="Pré-visualização"
            onClick={() => {
              setImagePreview(null);
              setImageFile(null);
            }}
          />
        ) : (
          <div>
            <input type="file" id="select-file" onChange={handleSelectImage} />
            <label htmlFor="select-file">
              <img src={imageIcon} alt="Adicionar Imagem" />
            </label>
          </div>
        )}
      </div>
    </FoodImageInputContainer>
  );
};

export default FoodImageInput;
