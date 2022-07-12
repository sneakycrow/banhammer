import {
  SESv2Client,
  CreateContactCommand,
  AlreadyExistsException,
} from "@aws-sdk/client-sesv2";

export const handler = async (req, res) => {
  const input = {
    ContactListName: "sneakycrow",
    TopicPreferences: [
      {
        TopicName: "banhammer-launch-interest",
        SubscriptionStatus: "OPT_IN",
      },
    ],
    EmailAddress: JSON.parse(req.body).email,
  };
  const client = new SESv2Client({});
  const command = new CreateContactCommand(input);
  try {
    await client.send(command);
    res.send({
      statusCode: 200,
      status: "pending confirmation",
    });
  } catch (e) {
    if (e instanceof AlreadyExistsException) {
      res.send({ statusCode: 200, status: "pending confirmation" });
    } else {
      res.send({ statusCode: 500, status: "failure" });
    }
  }
};

export default handler;
