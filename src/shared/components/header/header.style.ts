import styled from "styled-components";

import { ColorsEnum } from "../../colors/colors.enum";

export const HeaderContainer = styled.header`
  height: 20vh;
  background-color: ${ColorsEnum.Primary};
  display: flex;
`;

export const ImageHeader = styled.img`
  width: 70%;
  max-height: 90%;
  object-fit: cover;
  margin: auto auto;
`;
