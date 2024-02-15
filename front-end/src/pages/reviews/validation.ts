import * as Yup from "yup";
import { ReviewFormFields } from "../../consts/enums";

export const validationSchema = () => {
  return Yup.object({
    [ReviewFormFields.authorName]: Yup.string()
      .max(100, "Author name must be at most 100 characters")
      .required("Required field"),
    [ReviewFormFields.comment]: Yup.string()
      .max(500, "Comment length should not exceed 500 characters")
      .required("Required field"),
    [ReviewFormFields.email]: Yup.string().email(
      "Please provide a valid email"
    ),
  });
};
