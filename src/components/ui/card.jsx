// card.jsx
export const Card = ({ children, className = "", ...props }) => {
  return (
    <div className={`bg-white-900 rounded-lg shadow-md p-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = "", ...props }) => {
  return <div className={`mb-4 ${className}`} {...props}>{children}</div>;
};

export const CardContent = ({ children, className = "", ...props }) => {
  return <div className={`${className}`} {...props}>{children}</div>;
};

export default Card;