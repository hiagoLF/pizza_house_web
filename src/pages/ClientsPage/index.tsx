import React from "react";
import AdministrationHeader from "../../components/AdministrationHeader";
import AdministrationNavigator from "../../components/AdministrationNavigator";
import Clients from "./components/Clients";

import { ClientsPageContainer } from './styles';

const ClientsPage: React.FC = () => {
  return (
    <ClientsPageContainer>
      <AdministrationHeader />
      <AdministrationNavigator positionSelected={2} />
      <Clients />
    </ClientsPageContainer>
  );
};

export default ClientsPage;
