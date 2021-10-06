import React from "react";
import CustomerProfileCard from "../../../../components/CustomerProfileCard";
import { ClientBillContentContainer } from "./styles";
import dollarGreenIcon from "../../../../assets/icons/paid.png";
import notDollarIcon from "../../../../assets/icons/not_paid.png";
import BottomCard from "../../../../components/BottomCard";

const customer = {
  name: "Josivaldo Gomes",
  table: 5,
  profileImage:
    "https://kedimanassif.com.br/wp-content/uploads/2021/01/Como-saber-se-a-pessoa-vai-ficar-careca.jpg",
};

const billItems = [
  {
    type: "pizza",
    name: "Calabresa",
    price: "37,00",
    paid: true,
  },
  {
    type: "portion",
    name: "Batata Frita",
    price: "37,00",
    paid: false,
  },
  {
    type: "soda",
    name: "Coca-Cola 1L",
    price: "37,00",
    paid: true,
  },
  {
    type: "dessert",
    name: "Pudim de Chocolate",
    price: "37,00",
    paid: false,
  },
];

const ClientBillContent: React.FC = () => {
  return (
    <ClientBillContentContainer>
      <CustomerProfileCard
        name={customer.name}
        profileImage={customer.profileImage}
        table={customer.table}
      />

      {billItems.map((bill, index) => (
        <div className="bill-item" key={index}>
          <div id="texts">
            <h3>
              {bill.type === "pizza" && "Piz "}
              {bill.type === "portion" && "Porç "}
              {bill.type === "soda" && "Beb "}
              {bill.type === "dessert" && "Sob "}
              {bill.name}
            </h3>
            <span>R$ {bill.price}</span>
          </div>

          {bill.paid ? (
            <button>
              <img src={dollarGreenIcon} alt="Pago" />
            </button>
          ) : (
            <button>
              <img src={notDollarIcon} alt="Não pago" />
            </button>
          )}
        </div>
      ))}

      <div id="bill-resume">
        <p className="resume-item">
          <h3>Pendente: </h3> 
          <span>37,00</span>
        </p>
        <p className="resume-item">
          <h3>Total: </h3> 
          <span>R$ 250,00</span>
        </p>
      </div>

      <BottomCard title='Dispensar' />
    </ClientBillContentContainer>
  );
};

export default ClientBillContent;
