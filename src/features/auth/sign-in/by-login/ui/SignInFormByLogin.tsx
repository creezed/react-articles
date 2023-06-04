/* eslint-disable react/jsx-props-no-spreading */
import {
  Button,
  CloseButton,
  Collapse,
  Divider,
  Flex,
  FormControl,
  Heading,
  Highlight,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { signInByLoginValidation } from '@/features/auth/sign-in/by-login/lib/validation/sign-in-by-login.validation';
import { SignInParamsByLogin } from '@/features/auth/sign-in/by-login/model/types/sign-in-params-by-login.interface';
import { AppRoutes } from '@/shared/enums/router';
import { useHiddenPassword } from '@/shared/hooks/useHiddenPassword';

export const SignInFormByLogin = () => {
  const { passwordIsShow, handleToggleShowPassword } = useHiddenPassword();

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignInParamsByLogin>({
    mode: 'onChange',
    resolver: yupResolver(signInByLoginValidation),
  });
  const onSubmit = () => {
    navigate(AppRoutes.HOME);
  };

  return (
    <Flex
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      flexDirection="column"
      gap="20px"
      alignItems="flex-start"
      w="full"
    >
      <CloseButton
        onClick={() => navigate(AppRoutes.HOME)}
        size="lg"
        mb="12px"
        ml="-12px"
      />
      <Heading fontWeight={400} color="blackAlpha.900">
        Добро пожаловать!
      </Heading>
      <Text as="p" color="blackAlpha.600" fontSize={18}>
        С возвращением
      </Text>
      <FormControl isInvalid={Boolean(errors.login)}>
        <Input placeholder="Логин" size="lg" {...register('login')} />
        <Collapse in={Boolean(errors.login)} unmountOnExit>
          <Text color="red.400">{errors.login && errors.login.message}</Text>
        </Collapse>
      </FormControl>

      <FormControl isInvalid={Boolean(errors.password)}>
        <InputGroup>
          <Input
            placeholder="Пароль"
            size="lg"
            type={passwordIsShow ? 'text' : 'password'}
            {...register('password')}
          />
          <InputRightElement
            width="3rem"
            onClick={handleToggleShowPassword}
            color="gray.500"
            cursor="pointer"
            height="full"
            userSelect="none"
          >
            {passwordIsShow ? (
              <Icon fontSize={18} as={AiOutlineEye} />
            ) : (
              <Icon fontSize={18} as={AiOutlineEyeInvisible} />
            )}
          </InputRightElement>
        </InputGroup>

        <Collapse in={Boolean(errors.password)} unmountOnExit>
          <Text color="red.400">
            {errors.password && errors.password.message}
          </Text>
        </Collapse>
      </FormControl>
      <Button
        width="full"
        fontWeight={400}
        colorScheme="green"
        size="lg"
        type="submit"
      >
        Войти
      </Button>
      <Divider width="full" />
      <Flex gap={2} justify="center" align="center" width="full">
        <Text fontSize={18}>Ещё не зарегистрировались?</Text>
        <Text as={Link} to={AppRoutes.REGISTRATION} fontSize={18}>
          <Highlight
            query="Создать аккаунт"
            styles={{
              px: '2',
              py: '1',
              rounded: 'full',
              bg: 'green.100',
              transition: '.25s',
              _hover: { bg: 'green.200' },
            }}
          >
            Создать аккаунт
          </Highlight>
        </Text>
      </Flex>
    </Flex>
  );
};
