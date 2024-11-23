
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  const handleGoogleLogin = () => {
    // Google Login logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="bg-base-100 p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-primary mb-6">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-base font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-base font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input input-bordered w-full"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full mt-4"
          >
            Login
          </button>
        </form>
        <div className="mt-6 flex items-center justify-center">
          <hr className="border-t w-1/3" />
          <span className="text-base-content mx-2">or</span>
          <hr className="border-t w-1/3" />
        </div>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-error w-full mt-4"
        >
          Login with Google
        </button>
        <p className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="link link-primary">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
