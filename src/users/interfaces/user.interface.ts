
export interface User extends Document {
   id?: string;
   firstName: string;
   lastName: string;
   email: string;
   pin: string;
   phone: string;
   date: Date;
   isAdmin: boolean;
}
