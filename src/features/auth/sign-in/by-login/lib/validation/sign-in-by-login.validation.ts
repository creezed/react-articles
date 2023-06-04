import * as yup from 'yup';
import { SignInParamsByLogin } from '@/features/auth/sign-in/by-login/model/types/sign-in-params-by-login.interface';

const LOGIN_LENGTH = {
  min: 5,
  max: 12,
};

const PASSWORD_LENGTH = {
  min: 5,
  max: 12,
};

export const signInByLoginValidation = yup.object<
  Record<keyof SignInParamsByLogin, yup.AnySchema>
>({
  login: yup
    .string()
    .min(
      LOGIN_LENGTH.min,
      `Логин должен содержать минимум ${LOGIN_LENGTH.min} символов`,
    )
    .max(
      LOGIN_LENGTH.max,
      `Логин должен содержать максимум ${LOGIN_LENGTH.max} символов`,
    )
    .required('Email is a required field'),
  password: yup
    .string()
    .min(
      PASSWORD_LENGTH.min,
      `Пароль должен содержать минимум ${PASSWORD_LENGTH.min} символов`,
    )
    .max(
      PASSWORD_LENGTH.max,
      `Пароль должен содержать минимум ${PASSWORD_LENGTH.min} символов`,
    )
    .required('Password is a required field'),
});
