// add event listener to each input
const inputs = document.querySelectorAll("input");
inputs.forEach(input =>
  input.addEventListener("keyup", e => {
    validate(e.target, patterns[e.target.name]);
  })
);

// validation patterns
const patterns = {
  username: /^[a-z\d]{5,12}$/,
  telephone: /^\d{11}$/,
  password: /^[\w@-]{8,20}$/,
  slug: /^[a-z\d-]{8,20}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
  //             yourname @ domain   .  com          ( .uk )
};

// validate fx
const validate = (field, regex) =>
  (field.className = regex.test(field.value) ? "valid" : "invalid");
