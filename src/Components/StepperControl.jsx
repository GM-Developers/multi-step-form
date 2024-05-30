const StepperControl = ({ handleNext, handleBack, currentStep, steps }) => {
  return (
    <div className="flex justify-between">
      <button
        onClick={handleBack}
        className={`flex items-center bg-indigo-600 text-white font-semibold mt-5 ml-5 mb-2 py-2 px-6 rounded-full ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={currentStep === 1}
      >
        Back
      </button>
      <button
        onClick={handleNext}
        className="flex items-center bg-indigo-600 text-white font-semibold mt-5 mr-5 mb-2 py-2 px-6 rounded-full hover:bg-indigo-700 transition duration-300"
      >
        {currentStep === steps.length ? 'Finish' : 'Next'}
      </button>
    </div>
  );
};

export default StepperControl;
