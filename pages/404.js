import { Center, Container, Text, Title } from "@mantine/core";
import Navigation from "../components/Navigation";

const FourOhFour = () => {
  return (
    <Container fluid sx={{ minHeight: "75vh" }}>
      <Navigation />
      <Center>
        <Title>404</Title>
        <Text>Page not found</Text>
      </Center>
    </Container>
  );
};

export default FourOhFour;
