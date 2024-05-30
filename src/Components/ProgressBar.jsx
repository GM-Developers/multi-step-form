// src/components/ProgressBar.jsx

const ProgressBar = ({ step, steps }) => {
  const percentage = (step / steps.length) * 100;

  const roundedPercentage = Math.round(percentage);

  return (
    <div className="relative w-full bg-gray-200 h-3.5 rounded-full">
      <div
        className="bg-indigo-600 h-full rounded-full"
        style={{ width: `${roundedPercentage}%` }}
      ></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <span
          className={`${
            percentage < 34 ? "text-indigo-600" : "text-white"
          } font-semibold text-sm`}
        >
          {roundedPercentage}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
