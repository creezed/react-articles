import { Container, ScaleFade } from '@chakra-ui/react';
import { SignInFormByLogin } from '@/features/auth/sign-in/by-login';

const SignInPage = () => {
  return (
    <Container
      display="flex"
      height="100vh"
      width="full"
      justifyContent="center"
      alignItems="center"
      as={ScaleFade}
      in
    >
      <SignInFormByLogin />
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default SignInPage;
