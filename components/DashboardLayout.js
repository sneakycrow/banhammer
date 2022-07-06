import Navigation from "./Navigation";
import { AppShell, Button, Header, Navbar } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";

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
          width={{ base: navbarOpened === "opened" ? 300 : 75 }}
          height="100vh"
          p="xs"
        >
          <Navbar.Section>
            <Button variant="subtle" fullWidth>
              Assets/Hosts
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
