import { useForm } from 'react-hook-form';

const Step1 = ({ formData, setFormData, register, errors }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Step 1: Personal Information</h2>
      <div className="flex flex-wrap -mx-2 mb-4">
        <div className="w-full md:w-1/2 px-2">
          <label className="block text-gray-700">First Name</label>
          <input
            {...register("firstName", { required: "First name is required" })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
          />
          {errors.firstName && <p className="text-red-500 mt-1">{errors.firstName.message}</p>}
        </div>
        <div className="w-full md:w-1/2 px-2">
          <label className="block text-gray-700">Last Name</label>
          <input
            {...register("lastName", { required: "Last name is required" })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
          />
          {errors.lastName && <p className="text-red-500 mt-1">{errors.lastName.message}</p>}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
        />
        {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone</label>
        <input
          type="tel"
          {...register("phone", { required: "Phone is required" })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
        />
        {errors.phone && <p className="text-red-500 mt-1">{errors.phone.message}</p>}
      </div>
    </div>
  );
};

export default Step1;
