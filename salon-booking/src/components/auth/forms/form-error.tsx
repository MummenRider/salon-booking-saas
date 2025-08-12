import { FC } from "react";

interface FormErrorProps {
  errorMessage: string;
}
export const FormError: FC<FormErrorProps> = ({ errorMessage }) => {
  if (!errorMessage) return null;
  return (
    <div className="text-sm text-red-500 text-center p-2 rounded bg-red-50">
      {errorMessage}
    </div>
  );
};
