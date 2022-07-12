import { Button, Group, Modal } from "@mantine/core";
import { useState } from "react";
import HTTPTester from "./HTTPTester";
import { Hammer } from "tabler-icons-react";

const DebugModal = () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        title="Introduce yourself!"
        size="xl"
      >
        <HTTPTester />
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)} color="green">
          <Hammer size={14} />
        </Button>
      </Group>
    </>
  );
};

export default DebugModal;
