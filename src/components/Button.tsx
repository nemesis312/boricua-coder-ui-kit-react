import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${variant}`}
      style={{
        padding: "10px 20px",
        borderRadius: "5px",
        background: variant === "primary" ? "#007bff" : "#6c757d",
        color: "#fff",
        border: "none",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};