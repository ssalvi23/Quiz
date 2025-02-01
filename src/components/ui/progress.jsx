// src/components/ui/progress.jsx
export const Progress = ({ value = 0, className = "", ...props }) => {
  return (
    <div className={`w-full h-2 bg-gray-900 rounded-full ${className}`} {...props}>
      <div
        className="h-full bg-[#ffb700] rounded-full transition-all duration-300"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};