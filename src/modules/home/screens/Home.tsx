import { DisplayFlexCenter } from "../../../shared/components/display/display.style";
import { Screen } from "../../../shared/components/screen/Screen";
import { SubTitlePage } from "../../../shared/components/title/title.style";
import {
  ContainerHighlights,
  ContainerNews,
  DivColorFifth,
  GridHighlights,
  GridHome,
  SiteDivisor,
} from "../styles/home.style";

export const Home = () => {
  return (
    <Screen>
      <SiteDivisor>
        <div>
          <DisplayFlexCenter>
            <SubTitlePage>Novidades</SubTitlePage>
          </DisplayFlexCenter>

          <GridHome>
            <ContainerNews>1</ContainerNews>
            <ContainerNews>2</ContainerNews>
            <ContainerNews>3</ContainerNews>
            <ContainerNews>4</ContainerNews>
            <ContainerNews>5</ContainerNews>
            <ContainerNews>6</ContainerNews>
            <ContainerNews>7</ContainerNews>
            <ContainerNews>8</ContainerNews>
          </GridHome>
        </div>
        <DivColorFifth>
          <DisplayFlexCenter>
            <SubTitlePage>Highlights</SubTitlePage>
          </DisplayFlexCenter>
          <GridHighlights>
            <ContainerHighlights>1</ContainerHighlights>
            <ContainerHighlights>2</ContainerHighlights>
            <ContainerHighlights>3</ContainerHighlights>
          </GridHighlights>
          <DisplayFlexCenter>
            <SubTitlePage>Veja também</SubTitlePage>
          </DisplayFlexCenter>
          <GridHighlights>
            <ContainerHighlights>1</ContainerHighlights>
            <ContainerHighlights>2</ContainerHighlights>
            <ContainerHighlights>3</ContainerHighlights>
          </GridHighlights>
        </DivColorFifth>
      </SiteDivisor>
    </Screen>
  );
};
