import { useState } from "react";
import TextField from "../../components/TextField";
import { useAuth } from "../../customHooks/useAuth";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="h-96 relative top-24 ">
      <h1 className="text-gray-200 text-4xl font-semibold pb-5 font-Roboto m-5">
        Welcome back
      </h1>
      <form className="mt-5 m-5  mr-10" onSubmit={handleSubmit}>
        <TextField
          label="Username"
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          label="Password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          type="submit"
          className="btn btn-primary mt-5 w-full font-Roboto "
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
