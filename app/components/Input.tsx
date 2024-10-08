import Image from "next/image";
import EyeClosed from "../assets/icons/EyeClosed.svg";

interface InputProps {
  label: string;
  placeholder: string;
  icon: string;
  type: string;
}

export default function Input({ label, placeholder, icon, type }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-manrope text-primary-600 font-normal text-xs tracking-wide">
        {label}
      </label>
      <div className="relative">
        <div className="flex items-center absolute inset-y-0 pl-3">
          <Image src={icon} alt="" width={20} height={20} />
        </div>
        <input
          type={type}
          className="flex w-full pl-10 py-4 rounded-tl-lg border-b border-primary-500 bg-primary-50 placeholder:text-primary-600 text-primary-900 rounded-tr-lg font-light text-base font-manrope tracking-wide"
          placeholder={placeholder}
        ></input>
        {type === "password" ? (
          <div className="flex items-center absolute inset-y-0 right-0 pr-3">
            <Image src={EyeClosed} alt="" width={20} height={20} />
          </div>
        ) : null}
      </div>
    </div>
  );
}