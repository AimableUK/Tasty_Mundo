import * as yup from "yup";

export const contactUsSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "The name must be at least 3 characters")
    .required("Name is required"),

  email: yup
    .string()
    .email("Please enter a valid email address")
    .nullable()
    .notRequired(),

  phone: yup
    .string()
    .matches(/^\d{10,15}$/, "Enter a valid phone number")
    .required("Phone number is required"),

  subject: yup
    .string()
    .min(5, "The Subject must be atleast 5 characters Long")
    .required("Subject is required"),

  message: yup
    .string()
    .min(10, "Enter atleast 10 characters long message")
    .required("Your Message is required"),
});
