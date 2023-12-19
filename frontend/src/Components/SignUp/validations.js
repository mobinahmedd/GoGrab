export const nameChecker = (name) => {
  const nameFormat = /^[A-Za-z\s]+$/;
  if (nameFormat.test(name)) {
    return true;
  } else {
    return false;
  }
};

export const usernameChecker = (username) => {
  const usernameFormat = /^[a-zA-Z0-9_.]{0,20}$/;
  if (usernameFormat.test(username)) {
    return true;
  } else {
    return false;
  }
};

export const numberFieldChecker = (inp) => {
  const usernameFormat = /^\d+$/;
  if (usernameFormat.test(inp)) {
    return true;
  } else {
    return false;
  }
};

export const houseNumberChecker = (houseNum) => {
  const usernameFormat = /^[a-zA-Z0-9-/\\]+$/;
  if (usernameFormat.test(houseNum)) {
    return true;
  } else {
    return false;
  }
};

export const streetNumberChecker = (streetNum) => {
  const usernameFormat = /^\d+[A-Za-z]?( \d+)?$/;
  if (usernameFormat.test(streetNum)) {
    return true;
  } else {
    return false;
  }
};
