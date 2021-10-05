import AdministrationHeader from "../../components/AdministrationHeader";
import GoBackButton from "../../components/GoBackButton";
import ClientBillContent from "./components/ClientBillContent";
import { ClientBillPageContainer } from "./styles";

const ClientBillPage: React.FC = () => {
  return (
    <ClientBillPageContainer>
      <AdministrationHeader />
      <GoBackButton title='Conta'/>
      <ClientBillContent />
    </ClientBillPageContainer>
  );
};

export default ClientBillPage;
