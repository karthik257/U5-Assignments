// destructure the name and password from

// {  name: 'masai', password: 'admin@123', hostname:'masaischool', client: 'chrome' }

const obj = {
  name: "masai",
  password: "admin@123",
  hostname: "masaischool",
  client: "chrome",
};

const { name, password } = obj;
console.log(name);
console.log(password);
