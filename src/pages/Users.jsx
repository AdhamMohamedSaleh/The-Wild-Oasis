import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";

function NewUsers() {
  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
      <p>
        Demo login:
        <br />
        Email: demo@example.com
        <br />
        Password: demo1234
      </p>
    </>
  );
}

export default NewUsers;
