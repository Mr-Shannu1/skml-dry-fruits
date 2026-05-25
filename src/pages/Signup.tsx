import { motion } from "framer-motion";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Account created successfully!");
      console.log(data);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8EE] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md"
      >
        <h1 className="text-4xl font-bold text-green-950 text-center">
          Create Account
        </h1>

        <p className="text-gray-600 text-center mt-3">
          Join SKML Dry Fruits today
        </p>

        <div className="mt-8">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 border rounded-2xl mb-5 outline-none focus:border-green-900"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border rounded-2xl mb-5 outline-none focus:border-green-900"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 border rounded-2xl mb-5 outline-none focus:border-green-900"
          />

          <button
            onClick={handleSignup}
            className="w-full bg-green-950 text-white py-4 rounded-2xl hover:scale-105 transition"
          >
            Create Account
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Signup;
