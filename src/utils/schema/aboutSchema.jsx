import * as Yup from "yup";
export const aboutSchema = Yup.object({
  name: Yup.string().min(2).required("Please enter name"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter email"),
  feedback: Yup.string(),
  //   password:Yup.string().min(4).required("Please enter password"),
  //   confirm_password:Yup.string().oneOf([Yup.ref("password"),null],"please eneter same password")
});
