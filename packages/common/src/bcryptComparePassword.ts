import bcrypt from "bcrypt";

export function comparePassword(inputPassword: string,encryptedPassword: string){
	try {
      return bcrypt.compareSync(inputPassword, encryptedPassword);
    } catch (error) {
      throw {
        message: "Incorrect Password",
      };
    }
}
