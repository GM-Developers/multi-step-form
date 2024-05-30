import { useForm } from 'react-hook-form';

const Step3 = ({ formData, setFormData, register, errors }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Step 3: Preferences</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Preferred Communication Method</label>
        <select
          {...register("communicationMethod", { required: "Preferred communication method is required" })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
        >
          <option value="">Select Method</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="sms">SMS</option>
        </select>
        {errors.communicationMethod && <p className="text-red-500 mt-1">{errors.communicationMethod.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Areas of Interest</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              {...register("interests")}
              value="technology"
              className="mr-2"
            />
            <span>Technology</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              {...register("interests")}
              value="health"
              className="mr-2"
            />
            <span>Health</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              {...register("interests")}
              value="finance"
              className="mr-2"
            />
            <span>Finance</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              {...register("interests")}
              value="education"
              className="mr-2"
            />
            <span>Education</span>
          </label>
        </div>
        {errors.interests && <p className="text-red-500 mt-1">Please select at least one area of interest</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Additional Comments</label>
        <textarea
          {...register("comments")}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
          rows="4"
          placeholder="Write your comments here..."
        ></textarea>
      </div>
    </div>
  );
};

export default Step3;
