import React, { useState } from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useAppStore } from "../../stores/app-store";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
  const createUser = useAppStore((state) => state.createUser);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    await createUser(data);
    navigate("/login");
  };
  return (
    <form onSubmit={handleRegister}>
      <div className="space-y-2">
        <InputForm name="name" placeholder="Jhon Doe" type="text" />
        <InputForm name="email" placeholder="jhondoe@gmail.com" type="text" />
        <InputForm name="password" placeholder="password" type="password" />
      </div>
      <Button
        type="submit"
        classname={`justify-center w-full mt-4 text-white ${
          isLoading
            ? "bg-black/40 shadow hover:bg-black/40 animate-pulse"
            : "bg-black shadow hover:bg-black/90"
        }`}
      >
        {isLoading ? "Sabar ye..." : "Register"}
      </Button>
    </form>
  );
};

export default FormRegister;
