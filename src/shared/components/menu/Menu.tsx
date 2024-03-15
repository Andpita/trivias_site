import { Menu as MenuAntd, MenuProps } from "antd";
import {
  GiCalendar,
  GiEmptyHourglass,
  GiHouse,
  GiMailbox,
  GiStarFormation,
} from "react-icons/gi";
import { useNavigate } from "react-router-dom";

import { RoutesEnum } from "../../routes/routes.enum";
import { MenuContainer } from "./menu.style";

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "",
    icon: <GiHouse />,
  },
  {
    label: "Trivia do Dia",
    key: "day",
    icon: <GiCalendar />,
  },
  {
    label: "Hoje na Historia",
    key: "history",
    icon: <GiEmptyHourglass />,
  },
  {
    label: "Nascimentos e Mortes",
    key: "Celebrity",
    icon: <GiStarFormation />,
  },

  {
    label: "Contato",
    key: "Contact",
    icon: <GiMailbox />,
  },
];

export const Menu = () => {
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(RoutesEnum.DEFAULT.replace("{e}", `${e.key}`));
  };

  return (
    <MenuContainer>
      <MenuAntd
        onClick={onClick}
        mode="horizontal"
        items={items}
        theme="light"
      />
    </MenuContainer>
  );
};
