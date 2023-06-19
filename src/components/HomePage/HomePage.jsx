import LinkButton from "components/LinkButton";

import { Section, WelcomeText } from "./HomePage.styled";

const HomePage = () => {
  return (
    <Section>
      <WelcomeText>Welcome to the Tweets App!</WelcomeText>
      <LinkButton path="/tweets" text="Go to the tweets" />
    </Section>
  );
};

export default HomePage;
