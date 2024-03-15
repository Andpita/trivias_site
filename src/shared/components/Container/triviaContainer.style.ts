import { Button } from "antd";
import styled from "styled-components";

import { ColorsEnum } from "../../../shared/colors/colors.enum";

export const TriviaContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TriviaText = styled.div`
  max-width: 80%;
  max-height: 80%;
  background-color: ${ColorsEnum.White};
  color: ${ColorsEnum.Primary};
  padding: 20px;

  font-size: 20px;

  border-radius: 20px;
  border: dashed 2px ${ColorsEnum.Primary};
`;

export const More = styled(Button)`
  margin: 20px 0;
  color: ${ColorsEnum.Primary};
`;
