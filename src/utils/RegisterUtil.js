export const mergeEmailId = (id, email) => {
  if (id === "" && email === "") return "";
  return `${id}@${email}`;
};

export const isValidEmailForm = (email) => {
  const emailRegax = new RegExp(
    /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  );
  return email !== "" && email !== "undefined" && emailRegax.test(email);
};

export const isValidPassword = (password) => {
  const passwordRegax = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
  return passwordRegax.test(password);
};

export const isMatchedPassword = (pw1, pw2) => {
  return pw1 === pw2;
};
