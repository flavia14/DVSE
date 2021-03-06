import { User } from 'firebase';
import { createContext } from 'react';

const UserContext = createContext<User | undefined>(undefined);
export default UserContext;