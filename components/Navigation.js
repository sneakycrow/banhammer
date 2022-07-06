import React from "react";
import { Button, Container, Grid, Group } from "@mantine/core";
import Branding from "./Branding";
import { signIn, useSession } from "next-auth/react";
import Profile from "./Profile";

const Navigation = () => {
  const { data: session } = useSession();
  return (
    <Container size={200} py={8} fluid>
      <Grid>
        <Grid.Col span={1}>
          <Branding />
        </Grid.Col>
        <Grid.Col span={3} offset={8}>
          {session ? (
            <Group position={"right"}>
              <Profile
                avatarURL={session.user.image}
                name={session.user.name}
                email={session.user.email}
              />
            </Group>
          ) : (
            <Group position={"right"}>
              <Button onClick={() => signIn()}>Sign In</Button>
            </Group>
          )}
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Navigation;
