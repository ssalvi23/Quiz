// src/components/ui/alert.jsx
export const Alert = ({ children, className = "", variant = "default", ...props }) => {
  const variantClasses = {
    default: "bg-gray-100",
    destructive: "bg-red-100 text-red-800",
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