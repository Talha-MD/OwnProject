import bcrypt from "bcrypt";

const Users = [
  {
    name: "Admin user",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
];

export default Users;
