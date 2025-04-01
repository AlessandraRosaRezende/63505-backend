export class User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  documents: { name: string; reference: string }[];
  last_connection: Date;
  documentStatus: string;
}
