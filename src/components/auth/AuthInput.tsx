type InputType = 'text' | 'email' | 'password';

interface AuthInputProps {
  label: string;
  value: any;
  type?: InputType;
  required?: boolean;
  shouldRender?: boolean;
  onChange?: (newValue: any) => void;
}

// export default function AuthInput(props: AuthInputProps) {
export default function AuthInput({
  label,
  value,
  type,
  required,
  shouldRender,
  onChange,
}: AuthInputProps) {
  //   const { label, value, type, required, shouldRender, onChange } = props;

  const getInputId = (id: string) => `inputAuth${id}`;

  const renderRequiredSpan = () => <span className='text-red-500 font-bold'>*</span>;

  const renderAuthInput = () => (
    <div className='flex flex-col mt-4'>
      <label className={`mb-2`} htmlFor={inputId}>
        {label} {required ? renderRequiredSpan() : false}
      </label>
      {/* // ? The safe navigation operator (?.) can be used on methods like this */}
      <input
        className={`
          px-4 py-3 rounded-lg bg-gray-200
          border focus:border-blue-500
          focus:outline-none focus:bg-white
          transition-colors duration-500
          `}
        type={type ?? 'text'}
        id={inputId}
        value={value}
        required={required ?? false}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );

  const inputId = getInputId(label);

  return (
    <>{shouldRender == null || shouldRender ? renderAuthInput() : false}</>
    // <div className='flex flex-col mt-1'>
    //   <label className={`mb-3`} htmlFor={inputId}>
    //     {label} {required ? renderRequiredSpan() : false}
    //   </label>
    //   {/* // ? The safe navigation operator (?.) can be used on methods like this */}
    //   <input
    //     className={`mb-4 p-2 text-xl`}
    //     type={type ?? 'text'}
    //     id={inputId}
    //     value={value}
    //     required={required ?? false}
    //     onChange={(e) => onChange?.(e.target.value)}
    //   />
    // </div>
  );
}
