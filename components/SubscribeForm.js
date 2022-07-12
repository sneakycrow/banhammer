import {
  Transition,
  Alert,
  TextInput,
  Button,
  Group,
  Box,
} from "@mantine/core";
import { Check, AlertCircle } from "tabler-icons-react";
import { useForm } from "@mantine/form";
import { useState } from "react";

function SubscribeForm() {
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const form = useForm({
    initialValues: {
      email: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleSubmitForm = async (values) => {
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify(values),
      });
      const json = await res.json();
      if (json.status === "pending confirmation") {
        setFormStatus("pending");
      }

      if (json.status === "already exists") {
        setFormStatus("success");
      }

      setFormSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      {!isFormSubmitted && (
        <form onSubmit={form.onSubmit((values) => handleSubmitForm(values))}>
          <TextInput
            required
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />

          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      )}
      <Transition mounted={isFormSubmitted} transition="pop" duration={200}>
        {(styles) => {
          const isSuccess =
            formStatus === "pending" || formStatus === "success";
          return (
            <Alert
              style={styles}
              icon={isSuccess ? <Check size={16} /> : <AlertCircle size={16} />}
              title={isSuccess ? "Thank you" : "Bummer!"}
              color={isSuccess ? "green" : "yellow"}
            >
              {isSuccess
                ? "Keep an eye on your inbox for the confirmation email"
                : "Something went wrong. Refresh the page and try again.\n"}
            </Alert>
          );
        }}
      </Transition>
    </Box>
  );
}

export default SubscribeForm;
