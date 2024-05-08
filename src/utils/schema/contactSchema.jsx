import * as Yup from "yup";
export const contactSchema = Yup.object({
  name: Yup.string().required("Please enter name"),
  email: Yup.string().email().required("please enter email"),
  rating: Yup.number().required("please enter rating"),
  isHelpFull: Yup.string().required("please select one of the options"),
  message: Yup.string().required("please enter message "),
});
