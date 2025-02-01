// alert.jsx
export const Alert = ({ children, className = "", variant = "default", ...props }) => {
  const variantClasses = {
    default: "bg-[#FFEA00]/20",
    destructive: "bg-red-100 text-[#FF7B00]",
  };

  return (
    <div className={`p-4 rounded-md ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
};

export const AlertDescription = ({ children, className = "", ...props }) => {
  return <div className={`text-sm ${className}`} {...props}>{children}</div>;
};

export default Alert;