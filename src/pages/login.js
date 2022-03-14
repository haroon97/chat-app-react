import { useFormik } from "formik";
import Input from "../components/input";
import Layout from "../components/layout";
import { loginConfig } from "../config/authConfig";
import * as Yup from "yup";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("form submitted", values);
    },
  });
  return (
    <Layout>
      <div className="pt-5">
        <h1 className="text-3xl text-gray-600 text-center font-semibold">
          Sign In
        </h1>
        <form className="pt-2" onSubmit={formik.handleSubmit}>
          {loginConfig.map((config) => (
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

export default Login;
