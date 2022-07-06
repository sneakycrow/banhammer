import { Group, Space, Text, ThemeIcon, Title } from "@mantine/core";
import { Hammer } from "tabler-icons-react";
import DashboardLayout from "../components/DashboardLayout";

export default function Home() {
  return (
    <DashboardLayout>
      <Group>
        <ThemeIcon size={200} radius={200} color="red">
          <Hammer size={150} />
        </ThemeIcon>
        <Title order={2}>Banhammer</Title>
      </Group>
      <Space h="xl" />
      <Text size="lg">
        Banhammer is a tool to share bans between any streamer connected to the
        application.
      </Text>
    </DashboardLayout>
  );
}
