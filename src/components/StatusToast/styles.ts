import styled from "styled-components";

type StatusToastContainerProps = {
  status?: "cart" | "row" | "preparing" | "delivered" | "canceled";
};

export const StatusToastContainer = styled.div<StatusToastContainerProps>`
  display: flex;

  #toast {
    padding: 5px;
    font-size: 14px;
    font-family: "Secular One", sans-serif;
    background-color: ${({ status }) => {
      if (status === "canceled") return "#B33634";
      if (status === "row") return "#238276";
      if (status === "preparing") return "#138700";
      if (status === "delivered") return "#010047";
    }};
    color: #fff;
    border-radius: 5px;
    margin-left: 10px;
  }
`;
