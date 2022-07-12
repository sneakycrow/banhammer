import {
  Affix,
  Button,
  CloseButton,
  Container,
  Group,
  Paper,
  Select,
  Stack,
  TextInput,
  Transition,
} from "@mantine/core";
import { Prism } from "@mantine/prism";
import { ArrowUp, Send } from "tabler-icons-react";
import { useEffect, useState } from "react";
import { useWindowScroll } from "@mantine/hooks";

const HTTPTester = () => {
  const supportedRequests = [
    { value: "GET", label: "GET" },
    { value: "POST", label: "POST" },
  ];
  const [requestType, setRequestType] = useState("GET");
  const [requestURL, setRequestURL] = useState("");
  const [requestURLError, setRequestURLError] = useState(null);
  const [responseBody, setResponseBody] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [scroll, scrollTo] = useWindowScroll();

  useEffect(() => {
    setRequestURLError(null);
  }, [requestURL]);

  const isURL = (source) => {
    const regex =
      /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
    return regex.exec(source);
  };

  const sendRequest = async () => {
    setLoading(true);
    try {
      if (!isURL(requestURL)) {
        setRequestURLError("Must be a URL");
        setLoading(false);
      }

      const res = await fetch(requestURL, {
        method: requestType,
      });

      const body = await res.json();
      setResponseBody(body);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Container
      size={600}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftIcon={<ArrowUp />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
      <Stack>
        <form>
          <Group noWrap postiion="left" spacing={0} align={"flex-start"}>
            <TextInput
              size="lg"
              sx={{ width: 500 }}
              type="url"
              value={requestURL}
              onChange={(event) => setRequestURL(event.currentTarget.value)}
              placeholder="https://example.com/api/get-posts"
              radius={0}
              error={requestURLError}
              rightSection={<CloseButton onClick={() => setRequestURL("")} />}
            />
            <Select
              size="lg"
              color="dark"
              radius={0}
              allowDeselect
              sx={{ maxWidth: 125 }}
              value={requestType}
              onChange={setRequestType}
              data={supportedRequests}
            />
            <Button
              color="dark"
              radius={0}
              size="lg"
              leftIcon={<Send size={14} />}
              loading={isLoading}
              onClick={sendRequest}
            >
              Send
            </Button>
          </Group>
        </form>
        <Paper p="md" radius={0}>
          <Prism withLineNumbers sx={{ borderRadius: 0 }} language="json" trim>
            {JSON.stringify(responseBody, null, 2)}
          </Prism>
        </Paper>
      </Stack>
    </Container>
  );
};

export default HTTPTester;
