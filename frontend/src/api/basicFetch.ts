export const basicFetch = async <returnType>(
  endpoint: string
): Promise<returnType> => {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error !");
  }
};
