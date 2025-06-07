import * as Yup from "yup";

const reservationSchema = Yup.object().shape({
  name: Yup.string().trim().required("Name is required"),

  email: Yup.string()
    .email("Email is invalid")
    .trim()
    .required("Email is required"),

  date: Yup.date()
    .required("Please select a date")
    .min(new Date(), "Date cannot be in the past")
    .max(
      new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      "Date is too far in the future"
    ),

  time: Yup.string().required("Please select a time"),

  persons: Yup.number()
    .required("Please choose number of persons")
    .min(1, "At least one person is required")
    .max(10, "Max 10 persons are allowed"),
});

export default reservationSchema;
