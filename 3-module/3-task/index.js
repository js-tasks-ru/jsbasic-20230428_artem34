function camelize(str) {
  return str.split("-").map((el, index) => index !== 0 ? el.charAt(0).toUpperCase() + el.slice(1) : el).join("");
};