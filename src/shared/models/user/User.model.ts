import { UserRole } from './user-role.interface';

export interface User {
  id: number;
  role: UserRole[];
}
