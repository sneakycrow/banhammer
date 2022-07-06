import { getProviders, signIn, useSession } from "next-auth/react";
import { Button, Center, Container, Stack } from "@mantine/core";
import { colors } from "../../lib/theme";

export default function SignIn({ providers }) {
  const { data: session } = useSession();
  if (session) {
    window.location = "/";
  }

  const variants = {
    twitch: {
      backgroundColor: colors.twitch.backgroundColor,
      color: colors.twitch.textColor,
      "&:hover": {
        backgroundColor: colors.twitch.accentColor,
      },
    },
  };

  return (
    <Container>
      <Center sx={{ height: "100vh" }}>
        <Stack>
          {Object.values(providers).map((provider) => (
            <Button
              sx={{
                ...variants[provider.id],
              }}
              onClick={() => signIn(provider.id)}
              key={provider.name}
            >
              Sign in with {provider.name}
            </Button>
          ))}
        </Stack>
      </Center>
    </Container>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
