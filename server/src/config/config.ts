import dotenv from "dotenv";

dotenv.config();

const SERVER_PORT = Number(process.env.SERVER_PORT) || 3001;
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";

const PHONE_KEY = process.env.PHONE_KEY || "abcdefghijklmnop".repeat(2);
const PHONE_IV = process.env.PHONE_IV || "097cd3e2b2d23fe576caebfc69f6b440";

const EMAIL_KEY = process.env.EMAIL_KEY || "abcdefghijklmnop".repeat(2);
const EMAIL_IV = process.env.EMAIL_IV || "6568d35cd845a8385d6eea4c3631e068";

const JWT_SECRET = process.env.JWT_SECRET || "682d719b1edb804bc3626f5f4beeff9d";

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
};
const ENCRYPT = {
  key: PHONE_KEY,
  iv: PHONE_IV,
  jwt: JWT_SECRET,
};
const config = {
  server: SERVER,
  encrypt: ENCRYPT,
};

export default config;
