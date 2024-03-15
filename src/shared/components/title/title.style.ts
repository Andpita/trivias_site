import { Typography } from "antd";
import styled from "styled-components";

import { ColorsEnum } from "../../colors/colors.enum";

const { Text } = Typography;

export const TitlePage = styled(Text)`
  color: ${ColorsEnum.Primary};
  font-size: 26px;
  font-weight: bolder;
  text-transform: uppercase;
  margin: 20px;
  width: 50%;
  text-align: center;
  background-color: ${ColorsEnum.White};
`;

export const SubTitlePage = styled(Text)`
  color: ${ColorsEnum.Second};
  font-size: 18px;
  font-weight: bolder;
  text-transform: uppercase;
  margin: 50px;
  min-width: 70%;
  padding: 0 10px;
  text-align: center;
  background-color: ${ColorsEnum.White};
`;

export const TriviaTitle = styled(Text)`
  color: ${ColorsEnum.Second};
  font-size: 20px;
  font-weight: bold;
  min-width: 20%;
  margin-bottom: 10px;
  padding: 0 10px;
  text-align: center;
  background-color: ${ColorsEnum.White};
  border: dashed 2px ${ColorsEnum.Primary};
`;
