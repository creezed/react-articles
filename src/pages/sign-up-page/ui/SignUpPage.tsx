import { Container, ScaleFade } from '@chakra-ui/react';
import { SignUpFormByLogin } from '@/features/auth/sign-up/by-login';

const SignUpPage = () => {
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
      <SignUpFormByLogin />
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default SignUpPage;
