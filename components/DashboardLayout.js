import Navigation from "./Navigation";
import { Anchor, AppShell, Header, Navbar } from "@mantine/core";
import Link from "next/link";

export const DashboardLayout = ({ children }) => {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          <Link href={"/dashboard"}>
            <Anchor component={"a"}>Dashboard</Anchor>
          </Link>
        </Navbar>
      }
      header={
        <Header>
          <Navigation />
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
