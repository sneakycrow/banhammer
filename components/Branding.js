import { Avatar, Group } from "@mantine/core";
import Link from "next/link";
import { Hammer } from "tabler-icons-react";

const Branding = ({ ...rest }) => {
  return (
    <Group direction="row" noWrap>
      <Link href="/" {...rest}>
        <Avatar sx={{ cursor: "pointer" }}>
          <Hammer size={24} />
        </Avatar>
      </Link>
    </Group>
  );
};

export default Branding;
