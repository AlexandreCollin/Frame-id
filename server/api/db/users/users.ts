import User from "../../src/routes/auth/models/user";
import pool from "../pool";

export const createUser = (user: User): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO users(email, password) VALUES(?, ?)";

    pool.execute(query, [user.email, user.password], (err, res) => {
      if (err) {
        console.log(err.message);
        return reject(err);
      }
      return resolve(res);
    });
  });
};

export const selectUserByEmail = (email: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    const quet = "SELECT email, password FROM users WHERE email = ?";

    pool.execute(quet, [email], (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(JSON.parse(JSON.stringify(res))[0]);
    });
  });
};
