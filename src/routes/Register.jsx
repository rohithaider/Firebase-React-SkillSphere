import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../contexts/AuthProvider";

const Register = () => {
const {createUser,setUser} = useContext(AuthContext)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Password Validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(formData.password)) {
      setError(
        "Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      toast.error("Password does not meet the required criteria.");
      return;
    }

    // Handle registration logic (e.g., sending data to an API)
    createUser(formData.email,formData.password)
    .then((result)=>{
      const user = result.user;
      setUser({
        ...user,
        displayName:formData.name,
        photoURL:formData.photoURL,
      })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage)
    })

    // Show success message
    toast.success("Registration successful!");

    // Reset error and form state after successful registration
    setError("");
    setFormData({
      name: "",
      email: "",
      photoURL: "",
      password: "",
    });
  };

  const handleGoogleLogin = () => {
    // Google Login logic
    console.log("Google Login");
    toast.info("Redirecting to Google login...");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="bg-base-100 p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-primary mb-6">
          Register
        </h2>
        <form onSubmit={handleRegister}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-base font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input input-bordered w-full"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
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
              name="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="photoURL"
              className="block text-base font-medium text-gray-700"
            >
              Photo URL
            </label>
            <input
              type="url"
              id="photoURL"
              name="photoURL"
              className="input input-bordered w-full"
              placeholder="Enter your photo URL"
              value={formData.photoURL}
              onChange={handleChange}
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
              name="password"
              className="input input-bordered w-full"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {error && (
            <div className="mb-4 text-red-500 text-sm">
              <p>{error}</p>
            </div>
          )}

          <button type="submit" className="btn btn-primary w-full mt-4">
            Register
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
          Register with Google
        </button>

        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="link link-primary">
            Login here
          </Link>
        </p>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Register;