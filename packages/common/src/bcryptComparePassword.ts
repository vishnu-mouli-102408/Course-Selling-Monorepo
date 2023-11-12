import bcrypt from "bcrypt";

export function comparePassword(inputPassword,encryptedPassword){
	try {
      return bcrypt.compareSync(inputPassword, encryptedPassword);
    } catch (error) {
      throw {
        message: "Incorrect Password",
      };
    }
}
