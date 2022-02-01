// destructure the pincode and rename to pin

// {  name: 'masai', address: {  pincode: 560095 }  }

const obj = {
  name: "masai",
  address: {
    pincode: 560095,
  },
};

const { address: { pincode:pin } } = obj

console.log(pin);