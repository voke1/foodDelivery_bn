
export interface User extends Document {
   id?: string;
   firstName: string;
   lastName: string;
   email: string;
   password: string;
   date: Date;
   isAdmin: boolean;
}
