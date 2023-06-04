import * as yup from 'yup';
import { SignUpParamsByLogin } from '../../model/types/sign-up-params-by-login.interface';

const NAME_LENGTH = {
  min: 3,
  max: 12,
};

const USERNAME_LENGTH = {
  min: 5,
  max: 12,
};

const LOGIN_LENGTH = {
  min: 5,
  max: 12,
};

const PASSWORD_LENGTH = {
  min: 5,
  max: 12,
};

export const signUpByLoginValidation = yup.object<
  Record<keyof SignUpParamsByLogin, yup.AnySchema>
>({
  name: yup
    .string()
    .min(
      NAME_LENGTH.min,
      `Имя должно содержать минимум ${NAME_LENGTH.min} символов`,
    )
    .max(
      NAME_LENGTH.max,
      `Имя должно содержать максимум ${NAME_LENGTH.max} символов`,
    )
    .required(),
  nickname: yup
    .string()
    .min(
      USERNAME_LENGTH.min,
      `Никнейм должен содержать минимум ${USERNAME_LENGTH.min} символов`,
    )
    .max(
      USERNAME_LENGTH.max,
      `Никнейм должен содержать максимум ${USERNAME_LENGTH.max} символов`,
    )
    .required(),
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
