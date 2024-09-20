const emailRegexPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegexPattern: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

const validateEmail = (email: string): boolean => {
  return emailRegexPattern.test(email);
};

const validatePassword = (password: string): boolean => {
  return passwordRegexPattern.test(password);
};

export { validateEmail, validatePassword };