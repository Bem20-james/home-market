const validateEmail = ({ email }: { email: string }) => {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
};

const validatePassword = (password: string) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    return false;
  } else {
    return true;
  }
};

const truncateText = (text = "", maxLength = 80) => {
  if (!text) return "-";
  return text.length > maxLength ? `${text.slice(0, maxLength)}…` : text;
};

const getTimeGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) {
    return "Good morning";
  }

  if (hour < 18) {
    return "Good afternoon";
  }

  return "Good evening";
};

const getFormattedDate = () => {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export {
  validateEmail,
  validatePassword,
  truncateText,
  getTimeGreeting,
  getFormattedDate,
};
