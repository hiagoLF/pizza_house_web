import React from "react";
import rightRedArrowIcon from "../../assets/icons/arrow_right_red.png";
import downRedArrowIcon from "../../assets/icons/arrow_down_red.png";
import { HiddenMenuContainer } from "./styles";

type HiddenMenuProps = {
  title: string;
  hidden: boolean;
  onHeaderClick: () => void;
};

const HiddenMenu: React.FC<HiddenMenuProps> = ({
  title,
  hidden,
  onHeaderClick,
  children,
}) => {
  return (
    <HiddenMenuContainer>
      <div id="header" onClick={onHeaderClick}>
        <span>{title}</span>

        {hidden ? (
          <img src={rightRedArrowIcon} alt="Abrir" />
        ) : (
          <img src={downRedArrowIcon} alt="Fechar" />
        )}
      </div>

      {!hidden && <div id="menu-content">{children}</div>}
    </HiddenMenuContainer>
  );
};

export default HiddenMenu;
