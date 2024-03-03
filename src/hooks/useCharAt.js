export const useCharAt = (param) => {
  return param.charAt(0);
};

export const useUsername = (param) => {
  return useCharAt(param).toUpperCase() + param.slice(1);
};
