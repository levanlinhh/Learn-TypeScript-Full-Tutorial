function addTwo(num: number): number {
  return num + 2;
  //return "hello"
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = true) => {};

loginUser("VanLinh", "Vanlinh.it.hutech@gmail.com");
signUser("Van Linh", "Vanlinh.it.dev@gmail.com", false);
getUpper("LeVanLinh");
addTwo(5);

export {};
