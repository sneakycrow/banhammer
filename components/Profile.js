import React, { useState } from "react";
import {
  Avatar,
  Button,
  Group,
  Popover,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { signOut } from "next-auth/react";
import { DotsVertical, Logout } from "tabler-icons-react";
import DebugModal from "./DebugModal";

const Profile = ({ avatarURL = "", name = "", email }) => {
  const [opened, setOpened] = useState(false);
  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      target={
        <Group>
          <div>
            <Text>{name}</Text>
            <Text size="xs" color="gray">
              {email}
            </Text>
          </div>
          <Avatar
            color="cyan"
            radius="xl"
            size={40}
            src={avatarURL}
            sx={{ cursor: "pointer" }}
          />
          <UnstyledButton onClick={() => setOpened(!opened)}>
            <DotsVertical />
          </UnstyledButton>
        </Group>
      }
      position="bottom"
      placement="end"
    >
      <Group position="right">
        <Button onClick={() => signOut()} size={"sm"} color="red">
          <Group>
            <Text>Sign Out</Text>
            <Logout />
          </Group>
        </Button>
        <DebugModal />
      </Group>
    </Popover>
  );
};

export default Profile;
