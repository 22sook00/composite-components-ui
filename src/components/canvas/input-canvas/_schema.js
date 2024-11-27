import * as z from "zod";
import { idRegex, nameRegex } from "./_regexPatterns";

const REQUIRED_MESSAGE = "필수 입력사항 입니다.";
const NAME_MESSAGE = "이름을 정확히 입력해주세요.";
const EMAIL_MESSAGE = "이메일을 확인해주세요.";
const ID_MESSAGE = "6자~16자 이내의 영문/숫자로만 입력하세요.";

const UserSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, REQUIRED_MESSAGE)
    .regex(nameRegex, NAME_MESSAGE),
  email: z.string().trim().min(1, REQUIRED_MESSAGE).email(EMAIL_MESSAGE),
  id: z
    .string()
    .trim()
    .min(6, ID_MESSAGE)
    .refine((id) => idRegex.test(id), ID_MESSAGE),
  password: z.string().trim().min(1, REQUIRED_MESSAGE),
  isEmail: z.boolean(),
  isSms: z.boolean(),
});

const _UserSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, REQUIRED_MESSAGE)
    .regex(nameRegex, NAME_MESSAGE)
    .or(z.string().max(0)),
  email: z.string().trim().min(1, REQUIRED_MESSAGE).email(EMAIL_MESSAGE),
  id: z
    .string()
    .trim()
    .min(6, ID_MESSAGE)
    .refine((id) => idRegex.test(id), ID_MESSAGE),
  password: z.string().trim().min(1, REQUIRED_MESSAGE),
});

const user = {
  name: "",
  email: "",
  id: "",
  password: "",
  isEmail: false,
  isSms: false,
};

export { UserSchema, _UserSchema, user };
