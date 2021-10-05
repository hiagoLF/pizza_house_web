import { CustomerProfileCardContainer } from "./styles";

export type CustomerProfileCardProps = {
  name: string;
  profileImage: string;
  table: number;
};

const CustomerProfileCard: React.FC<CustomerProfileCardProps> = ({
  name,
  profileImage,
  table,
}) => {
  return (
    <CustomerProfileCardContainer>
      <div id="profile">
        <img src={profileImage} alt="Ricardo Teixeira" />

        <div id="description">
          <h3>Cliente</h3>
          <div id="name">{name}</div>
        </div>
      </div>

      <div id="table-num">
        Mesa
        <br />
        {table}
      </div>
    </CustomerProfileCardContainer>
  );
};

export default CustomerProfileCard;
