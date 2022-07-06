import React from "react";
import { Button, Container, Grid, Group, UnstyledButton } from "@mantine/core";
import Branding from "./Branding";
import { signIn, useSession } from "next-auth/react";
import Profile from "./Profile";
import { Menu2 } from "tabler-icons-react";

const Navigation = ({ onMenuClick, children }) => {
  const { data: session } = useSession();
  return (
    <Container size={200} py={8} fluid>
      <Grid align="center" justify="center">
        <Grid.Col span={1}>
          <Group>
            <Branding />
            <UnstyledButton onClick={onMenuClick}>
              <Menu2 />
            </UnstyledButton>
          </Group>
        </Grid.Col>
        <Grid.Col span={8}>{children}</Grid.Col>
        <Grid.Col span={3}>
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
