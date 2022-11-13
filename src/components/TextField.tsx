import React from 'react'

type TextFieldProps = {
    label:string
    type:React.HTMLInputTypeAttribute
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

function TextField({label,type,onChange}:TextFieldProps) {
  
    return (
    <div className="mt-3">
      <p className="text-gray-200 font-semibold font-Roboto mb-1">{label}</p>
      <input
        type={type}
        onChange={(e) => {
          onChange(e);
        }}
        className="input w-full outline-none border-primary border-0 focus:outline-none focus:border-2"
      />
    </div>
  );
}

export default TextField;
