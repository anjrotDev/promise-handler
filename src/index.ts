export const promiseHandler = async <T, U = Error>(promise: Promise<T>, errorExt?: object): Promise<{ error: U | null; data: T | undefined }> => {
  try {
    const data = await promise;
    return { data, error: null };
  } catch (error: any) {
    if (errorExt) {
      const parsedError = { ...error, ...errorExt };
      return { error: parsedError as U, data: undefined };
    }
    return { error: error as U, data: undefined };
  }
};
