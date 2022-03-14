import Input from "../components/input";
import Layout from "../components/layout";
import { registerConfig } from "../config/authConfig";

const Register = () => {
  return (
    <Layout>
      <div className="pt-5">
        <h1 className="text-3xl text-gray-600 text-center font-semibold">
          Sign Up
        </h1>
        <form className="pt-2">
          {registerConfig.map((config, index) => (
            <div
              className="flex justify-center flex-col items-center py-2"
              key={index}
            >
              <Input type={config.type} placeholder={config.placeholder} />
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
