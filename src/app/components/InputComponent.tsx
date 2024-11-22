import React from "react";

type InputComponentType = {
  name: string;
  value: string;
  labelText?: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const InputComponent = (props: InputComponentType) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm">{props.labelText || props.name}</p>
      <input
        className="rounded-xl p-2 text-sm border-2 "
        type={props.type || "text"}
        placeholder={props.labelText}
        name={props.name}
        id={props.name}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export default InputComponent;
