import React from "react";

import { AdministrationHeaderContainer } from "./styles";

const AdministrationHeader: React.FC = () => {
  return (
    <AdministrationHeaderContainer>
      <h1>Pizza House</h1>
      <h3>Administração</h3>
    </AdministrationHeaderContainer>
  );
};

export default AdministrationHeader;
