// src/components/ui/button.jsx
export const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md bg-[#ffb700] text-white hover:bg-[#e6a600] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};