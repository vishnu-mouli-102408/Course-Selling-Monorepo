import bcrypt from "bcrypt";

export function hashPassword(inputPassword:string){
    const SALT = bcrypt.genSaltSync(10);
    const encryptedPassword = bcrypt.hashSync(inputPassword, SALT);
    return encryptedPassword;
}