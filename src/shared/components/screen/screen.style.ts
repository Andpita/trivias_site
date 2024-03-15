import styled from "styled-components";

import { ColorsEnum } from "../../colors/colors.enum";

export const Container = styled.div`
  margin: 0px 2%;
  min-height: 100vh;
`;

export const ScreenContainer = styled.div`
  min-height: 60vh;
  height: 100%;
  background-color: ${ColorsEnum.Third};
  padding: 20px 10px 10px 10px;
`;
