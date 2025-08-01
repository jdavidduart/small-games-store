export interface User {
  name: string;
  registerDate: string;
  daysBought: number;
  [key: string]: unknown;
}

export interface UserLogin {
  email: string;
  password: string;
}
