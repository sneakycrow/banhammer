import { ThemeIcon } from "@mantine/core";
import { Hammer } from "tabler-icons-react";
import DashboardLayout from "../components/DashboardLayout";

export default function Home() {
  return (
    <DashboardLayout>
      <ThemeIcon size={400} radius={400} color="red">
        <Hammer size={300} />
      </ThemeIcon>
    </DashboardLayout>
  );
}
