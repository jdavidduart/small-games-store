export interface User {
  name: string;
  registerDate: string;
  daysBought: number;
  [key: string]: unknown;
}
