import SubscribeForm from "../components/SubscribeForm";
import {
  Accordion,
  Center,
  Container,
  List,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";

const Home = () => {
  return (
    <>
      <Container>
        <Title>Banhammer</Title>
        <Space h="md" />
        <Text>
          An application for getting rid of bad actors across multiple streams
        </Text>
      </Container>
      <Container mt={100}>
        <Title order={3}>FAQ</Title>
        <Accordion initialItem={2}>
          <Accordion.Item label="What is it?">
            <Text>
              Banhammer is a web app that you can use to sync your bans with
              your friends. You and your friends sign up, then follow each
              other, and then your bans will be auto-synced across your accounts
              with fine tuned control of how you want to enforce auto bans on
              your channel.
            </Text>
            <Text>
              You can also just use Banhammer as a general ban manager. It
              records bad behavior so you can view history of you and your
              friends chatters with bad behavior.
            </Text>
          </Accordion.Item>
          <Accordion.Item label="How does it work?">
            <Text>
              When you sign up the application asks for a few permissions from
              Twitch:
            </Text>
            <Space h="xs" />

            <List>
              <List.Item>Ability to read all your bans</List.Item>
              <List.Item>
                Ability for Twitch to tell Banhammer when you&#39;ve submitted
              </List.Item>
              <List.Item>Ability to ban</List.Item>
              <List.Item>Ability to unban</List.Item>
            </List>
            <Space h="xs" />
            <Text>
              Using these permissions, we then read bans when you enforce them
              in your chat and re-enforce the ban in your peers chat. We also
              apply this method to unbanning.
            </Text>
            <Text>
              In addition to banning and unbanning, we also keep a history of
              banned chatters that you can utilize to see a history of bans,
              instead of just chat, across all your peers.
            </Text>
          </Accordion.Item>
          <Accordion.Item label="When will it launch?">
            We are targeting later this summer, but note that this is a passion
            project by volunteers. It will get finished when it gets finished.
          </Accordion.Item>
        </Accordion>
      </Container>
      <Container mt={100}>
        <Center>
          <Stack>
            <Title order={3}>Sign up to be notified when we launch!</Title>
            <SubscribeForm />
          </Stack>
        </Center>
      </Container>
    </>
  );
};

export default Home;
