import Navigation from "./Navigation";
import { AppShell, Button, Header, Navbar } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { News, Prison, Sword } from "tabler-icons-react";

export const DashboardLayout = ({ children }) => {
  const [navbarOpened, setNavbarOpened] = useLocalStorage({
    key: "navbar-state",
    defaultValue: "opened",
  });
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar
          sx={(theme) => ({
            height: "100vh",
            padding: theme.spacing.xs,
            width: navbarOpened === "opened" ? 300 : 75,
            display: "flex",
            flexDirection: "column",
            ">*": {
              marginTop: 10,
            },
          })}
        >
          <Navbar.Section>
            <Button
              styles={{ label: { width: "100%" } }}
              fullWidth
              variant="subtle"
              leftIcon={<News size={24} />}
            >
              News
            </Button>
          </Navbar.Section>
          <Navbar.Section>
            <Button
              styles={{ label: { width: "100%" } }}
              fullWidth
              variant="subtle"
              leftIcon={<Prison size={24} />}
            >
              Master Ban Index
            </Button>
          </Navbar.Section>
          <Navbar.Section>
            <Button
              styles={{ label: { width: "100%" } }}
              fullWidth
              variant="subtle"
              leftIcon={<Sword size={24} />}
            >
              Personal Ban Index
            </Button>
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header>
          <Navigation
            onMenuClick={() =>
              setNavbarOpened(navbarOpened === "opened" ? "closed" : "opened")
            }
          />
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
};

export default DashboardLayout;
