import { useState } from "react";
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import StepperControl from './StepperControl';
import ProgressBar from './ProgressBar';
import SubmissionMessage from './SubmissionMessage'; // Import the SubmissionMessage component
import { useForm } from 'react-hook-form';

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false); // Add state for form submission

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    address: '',
    gender: '',
    city: '',
    country: '',
    feedback: '',
    communicationMethod: '',
    interests: [],
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: formData
  });

  const steps = [
    <Step1 key="step1" formData={formData} setFormData={setFormData} register={register} errors={errors} />,
    <Step2 key="step2" formData={formData} setFormData={setFormData} register={register} errors={errors} />,
    <Step3 key="step3" formData={formData} setFormData={setFormData} register={register} errors={errors} />,
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prevStep => prevStep + 1);
    } else {
      handleFinish();
    }
  };

  const handleBack = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  const handleFinish = () => {
    // For now, just set the formSubmitted flag to true
    console.log(formData);
    setFormSubmitted(true);
  };

  return (
    <>
      {currentStep <= steps.length && !formSubmitted ? ( // Render steps if form not submitted
        <>
          <StepperControl
            handleNext={handleSubmit(handleNext)} // Use handleSubmit for validation
            handleBack={handleBack}
            currentStep={currentStep}
            steps={steps}
          />
          <div>
            <ProgressBar step={currentStep} steps={steps} />
            <div className="flex flex-col justify-center items-center mt-6">
              <div className="font-bold text-2xl justify-center items-center">
                Step # {currentStep}
              </div>
            </div>
            <div className="max-w-4xl mx-auto mt-6 p-6 bg-white rounded-md shadow-md">
              {steps[currentStep - 1]}
            </div>
          </div>
        </>
      ) : (
        <SubmissionMessage /> // Render SubmissionMessage if form submitted
      )}
    </>
  );
};

export default Stepper;
