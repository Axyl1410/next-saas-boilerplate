export async function convertImageToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export const assertValue = <T>(
  value: T | undefined,
  errorMessage: string,
): T => {
  if (value === undefined) {
    throw new Error(errorMessage);
  }

  return value;
};
