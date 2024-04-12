import React from 'react';
import { useForm } from 'react-hook-form';

interface InputFieldProps {
  label: string;
  placeholder: string;
  register: any;
}

const InputField = ({ label, placeholder, register }: InputFieldProps) => {
  return (
    <div className="mb-4">
      <label className="block mb-2">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full p-4 bg-gray-700 border-none text-white"
        {...register}
      />
    </div>
  );
};

const IndexPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="bg-black text-white p-8 h-screen box-border">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-gray-400 mr-4 flex items-center justify-center">
          icon
        </div>
        <div className="w-full">
          <InputField
            label="color"
            placeholder="color"
            register={register('color')}
          />
        </div>
      </div>
      <InputField
        label="code"
        placeholder="code"
        register={register('code')}
      />
      <InputField
        label="name"
        placeholder="name"
        register={register('name')}
      />
      <InputField
        label="shortName"
        placeholder="shortName"
        register={register('shortName')}
      />
      <div className="flex justify-between">
        <button
          className="p-4 bg-gray-700 border-none text-white cursor-pointer"
          onClick={handleSubmit(onSubmit)}
        >
          Button
        </button>
        <button
          className="p-4 bg-gray-700 border-none text-white cursor-pointer"
          onClick={handleSubmit(onSubmit)}
        >
          Button
        </button>
      </div>
    </div>
  );
};

export default IndexPage;
