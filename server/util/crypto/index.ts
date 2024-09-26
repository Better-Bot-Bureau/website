import * as crypto from "crypto";
const config = useRuntimeConfig();

let key = Buffer.alloc(32, "BJHF*9y@(*$GI%T&^");

const iv = Buffer.alloc(16, "UHGIduiwiugaBUI89$6q2897");

export function encrypt(input: string) {
  let cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  let encrypted = cipher.update(input, "utf-8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

export function decrypt(input: string) {
  let decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  let decrypted = decipher.update(input, "hex", "utf-8");
  decrypted += decipher.final("utf-8");
  return decrypted;
}
