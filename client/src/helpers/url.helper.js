export const parseParam = (url) => {
  let regex = /[?&]?([^=]+)=([^&]*)/g,
    param = {},
    math;
  while ((math = regex.exec(url))) {
    param[math[1]] = math[2];
  }
  return param;
};
