export const CheckValidOrNot = (user) => {
  const name = user.name,
    age = user.age;
  let validOrNot = {
    valid: true,
    description: "",
  };
  if (name === "" && age === "") {
    validOrNot.valid = false;
    validOrNot.description =
      "Please enter a valid name and age (non empty values).";
  } else if (name === "" && parseInt(age) > 0) {
    validOrNot.valid = false;
    validOrNot.description = "Please enter a valid name (non empty value).";
  } else if (name === "" && parseInt(age) <= 0) {
    validOrNot.valid = false;
    validOrNot.description =
      "Please enter a valid age (>0) and valid name (non empty value).";
  } else if (name.length > 0 && age === "") {
    validOrNot.valid = false;
    validOrNot.description = "Please enter a valid age (non empty value).";
  } else if (name.length > 0 && parseInt(age) <= 0) {
    validOrNot.valid = false;
    validOrNot.description = "Please enter a valid age (>0).";
  }
  return validOrNot;
};
