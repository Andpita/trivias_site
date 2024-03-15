import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Menu } from "../menu/Menu";
import { TopBar } from "../topbar/TopBar";
import { Container, ScreenContainer } from "./screen.style";

interface ScreenProps {
  children: React.ReactNode;
}

export const Screen = ({ children, ...props }: ScreenProps) => {
  return (
    <Container>
      <TopBar />
      <Header />
      <Menu />
      <ScreenContainer {...props}>{children}</ScreenContainer>
      <Footer />
    </Container>
  );
};
