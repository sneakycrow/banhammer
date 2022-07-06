import { Avatar } from "@mantine/core";
import Link from "next/link";
import { Hammer } from "tabler-icons-react";

const Branding = ({ ...rest }) => (
  <Link href="/" {...rest}>
    <Avatar sx={{ cursor: "pointer" }}>
      <Hammer size={24} />
    </Avatar>
  </Link>
);

export default Branding;
