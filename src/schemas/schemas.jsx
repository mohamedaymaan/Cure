import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .test(
      "not-empty",
      "Name must not be only spaces",
      (value) => value && value.trim().length > 0
    )
    .test(
      "min-length",
      "Name must be at least 3 characters",
      (value) => value && value.trim().length >= 3
    )
    .test(
      "no-symbols",
      "Name must contain only letters and spaces",
      (value) => {
        if (!value) return false;
        const lettersRegex = /^[\p{L}\s]+$/u;
        return lettersRegex.test(value.trim());
      }
    ),

  email: yup.string().email("Invalid email address").required("Required"),

  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    // .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    // .matches(/[a-z]/, "Must contain at least one lowercase letter")
    // .matches(/[0-9]/, "Must contain at least one digit")
    // .matches(/[!@#$%^&*_]/, "Must contain at least one special character")
    .required("Required"),

  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export const loginSchema = yup.object({
  email: yup.string().email("Invalid email address").required("Required"),
  password: yup.string().required("Required"),
});

export const ResetPasswordSchema = yup.object({
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    // .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    // .matches(/[a-z]/, "Must contain at least one lowercase letter")
    // .matches(/[0-9]/, "Must contain at least one digit")
    // .matches(/[!@#$%^&*_]/, "Must contain at least one special character")
    .required("Required"),

  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});
