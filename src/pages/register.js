import { useFormik } from "formik";
import Input from "../components/input";
import Layout from "../components/layout";
import { registerConfig } from "../config/authConfig";
import * as Yup from "yup";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Name is required"),
      username: Yup.string().required("Username is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("form submitted: ", values);
    },
  });
  return (
    <Layout>
      <div className="pt-5">
        <h1 className="text-3xl text-gray-600 text-center font-semibold">
          Sign Up
        </h1>
        <form className="pt-2" onSubmit={formik.handleSubmit}>
          {registerConfig.map((config) => (
            <div
              className="flex justify-center flex-col items-center py-2"
              key={config.id}
            >
              <Input
                id={config.id}
                name={config.id}
                type={config.type}
                placeholder={config.placeholder}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[config.id]}
              />
              {formik.touched[config.id] && formik.errors[config.id] && (
                <p className="text-xs text-red-400 mt-1">
                  {formik.errors[config.id]}
                </p>
              )}
            </div>
          ))}
          <div className="text-center pt-2">
            <Input type="submit" />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
