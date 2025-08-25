import { useState } from "react";

export const useFormSubmit = () => {
  const [submitted, setSubmitted] = useState<Record<
    string,
    FormDataEntryValue
  > | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    setSubmitted(data as Record<string, FormDataEntryValue>);
  };

  return { submitted, handleSubmit };
};
