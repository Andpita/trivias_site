import {
  More,
  TriviaContainer,
  TriviaText,
} from "../../../shared/components/Container/triviaContainer.style";
import { DisplayFlexCenter } from "../../../shared/components/display/display.style";
import { Screen } from "../../../shared/components/screen/Screen";
import {
  TitlePage,
  TriviaTitle,
} from "../../../shared/components/title/title.style";

export const Day = () => {
  return (
    <Screen>
      <DisplayFlexCenter>
        <TitlePage>Trivia do dia</TitlePage>
      </DisplayFlexCenter>

      <TriviaContainer>
        <TriviaTitle>O Buraco negro...</TriviaTitle>
        <TriviaText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa neque
          odit distinctio eligendi architecto sed harum? Totam distinctio nisi
          obcaecati ea deserunt laboriosam, dolorem dolore ut quasi amet quam
          quo. Unde, accusantium soluta corrupti et dolore amet rerum modi ipsa
          eligendi dolorem aliquam ea porro fugit facilis officia. Adipisci
          ipsum laudantium labore ullam ab similique minus magnam provident,
          impedit quas? Porro doloribus quia optio ad molestias laudantium quasi
          pariatur laborum quos, suscipit dignissimos hic, asperiores, libero
          praesentium mollitia quas placeat impedit unde deleniti blanditiis
          harum accusamus esse sunt? Deserunt, quam.
        </TriviaText>
        <More type="dashed">Saiba mais clicando aqui...</More>
      </TriviaContainer>
    </Screen>
  );
};
