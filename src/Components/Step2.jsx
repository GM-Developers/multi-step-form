import { useForm } from 'react-hook-form';

const Step2 = ({ formData, setFormData, register, errors }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Step 2: Additional Information</h2>
      <div className="flex flex-wrap -mx-2 mb-4">
        <div className="w-full md:w-1/2 px-2">
          <label className="block text-gray-700">Date of Birth</label>
          <input
            type="date"
            {...register("dob", { required: "Date of birth is required" })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
          />
          {errors.dob && <p className="text-red-500 mt-1">{errors.dob.message}</p>}
        </div>
        <div className="w-full md:w-1/2 px-2">
          <label className="block text-gray-700">Gender</label>
          <select
            {...register("gender", { required: "Gender is required" })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="text-red-500 mt-1">{errors.gender.message}</p>}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Home Address</label>
        <input
          {...register("address", { required: "Home address is required" })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
        />
        {errors.address && <p className="text-red-500 mt-1">{errors.address.message}</p>}
      </div>
      <div className="flex flex-wrap -mx-2 mb-4">
        <div className="w-full md:w-1/2 px-2">
          <label className="block text-gray-700">City</label>
          <input
            {...register("city", { required: "City is required" })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
          />
          {errors.city && <p className="text-red-500 mt-1">{errors.city.message}</p>}
        </div>
        <div className="w-full md:w-1/2 px-2">
          <label className="block text-gray-700">Country</label>
          <input
            {...register("country", { required: "Country is required" })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
          />
          {errors.country && <p className="text-red-500 mt-1">{errors.country.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Step2;
