import { useContext, useEffect } from "react";
import { FormikHelpers, useFormik } from "formik";
import { Rating } from "primereact/rating";
import { Button } from "primereact/button";
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { IReview } from "../../../interfaces/review";
import { validationSchema } from "../validation";
import { ReviewFormFields } from "../../../consts/enums";
import { ReviewContext } from "../../../context/reviewContext";
import "./ReviewForm.styles.css";

const formInitialValues: IReview = {
  authorName: "",
  date: new Date(),
  rating: 0,
  comment: "",
  email: "",
  phone: "",
  saveUserInfo: false,
};

export const ReviewForm = () => {
  const { addReview } = useContext(ReviewContext);

  const onSubmit = async (
    values: IReview,
    { resetForm }: FormikHelpers<IReview>
  ) => {
    addReview(values);
    resetForm();
  };

  const formik = useFormik({
    initialValues: formInitialValues,
    validationSchema,
    onSubmit,
    validateOnChange: true,
  });

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
    setFieldValue,
  } = formik;

  const handleSaveToLocalStorage = (e: CheckboxChangeEvent) => {
    if (e.checked) {
      const userData = JSON.stringify({
        authorName: values.authorName,
        email: values.email,
      });
      window.localStorage.setItem("userData", userData);
    } else {
      window.localStorage.clear();
    }
  };

  const saveCheckBoxDisabled =
    !!errors.authorName ||
    !!errors.email ||
    !values.authorName ||
    !values.email;

  useEffect(() => {
    const userData = window.localStorage.getItem("userData");
    if (userData) {
      const parsedData = JSON.parse(userData);
      setFieldValue(ReviewFormFields.authorName, parsedData.authorName);
      setFieldValue(ReviewFormFields.email, parsedData.email);
    }
  }, [setFieldValue]);

  return (
    <form className="mt-10 bg-slate-200" onSubmit={handleSubmit}>
      <div className="flex flex-col mb-4">
        <InputTextarea
          autoResize
          id={ReviewFormFields.comment}
          name={ReviewFormFields.comment}
          value={values.comment}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Comment *"
          maxLength={500}
        />
        {errors.comment && touched.comment && (
          <div className="p-error">{errors.comment}</div>
        )}
      </div>
      <div className="flex flex-col mb-4">
        <label className="mr-4 mb-2" htmlFor={ReviewFormFields.rating}>
          Rating
        </label>
        <Rating
          id={ReviewFormFields.rating}
          name={ReviewFormFields.rating}
          value={values.rating}
          onChange={handleChange}
        />
        {errors.rating && touched.rating && (
          <div className="p-error">{errors.rating}</div>
        )}
      </div>

      <div className="flex justify-between gap-4">
        <div className="flex flex-col mb-4 w-1/2">
          <InputText
            id={ReviewFormFields.authorName}
            name={ReviewFormFields.authorName}
            value={values.authorName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Name *"
          />
          {errors.authorName && touched.authorName && (
            <div className="p-error">{errors.authorName}</div>
          )}
        </div>
        <div className="flex flex-col mb-4 w-1/2">
          <InputText
            id={ReviewFormFields.email}
            name={ReviewFormFields.email}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Email *"
          />
          {errors.email && touched.email && (
            <div className="p-error">{errors.email}</div>
          )}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col mb-4 w-full">
          <InputText
            id={ReviewFormFields.phone}
            name={ReviewFormFields.phone}
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Phone(optional)"
          />
          {errors.phone && touched.phone && (
            <div className="p-error">{errors.phone}</div>
          )}
        </div>
      </div>
      <div className="flex items-center">
        <Checkbox
          id={ReviewFormFields.saveUserInfo}
          name={ReviewFormFields.saveUserInfo}
          value={values.saveUserInfo}
          onChange={(e) => {
            handleChange(e), handleSaveToLocalStorage(e);
          }}
          disabled={saveCheckBoxDisabled}
          onBlur={handleBlur}
          placeholder="Email(optional)"
          checked={values.saveUserInfo}
          className="mr-2"
        />
        <label className="mr-4 text-lg" htmlFor={ReviewFormFields.saveUserInfo}>
          Save my name, email and website in this browser for the next time I
          comment
        </label>
      </div>
      <div className="flex mt-6">
        <Button
          className="rounded-full text-white uppercase bg-bismark py-3 w-1/3"
          label="Post review"
          type="submit"
          loading={isSubmitting}
          disabled={isSubmitting}
        />
      </div>
    </form>
  );
};
