import styled from "styled-components";

import { ColorsEnum } from "../../colors/colors.enum";

export const TopbarContainer = styled.div`
  background-color: ${ColorsEnum.White};
  color: ${ColorsEnum.Primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3vh;
`;
