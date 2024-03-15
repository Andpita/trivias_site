import styled from "styled-components";

import { ColorsEnum } from "../../../shared/colors/colors.enum";

export const SiteDivisor = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  justify-content: center;
  margin: 20px;
`;

export const GridHome = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;
  row-gap: 20px;
`;

export const GridHighlights = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  background-color: ${ColorsEnum.Fifth};
`;

export const ContainerNews = styled.article`
  margin: auto auto;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80%;
  min-height: 200px;
  background-color: ${ColorsEnum.White};
`;

export const ContainerHighlights = styled.article`
  margin: auto auto;

  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 80%;
  min-height: 100px;
  background-color: ${ColorsEnum.White};
`;

export const DivColorFifth = styled.div`
  background-color: ${ColorsEnum.Fifth};
`;
