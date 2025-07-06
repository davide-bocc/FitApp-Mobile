import { sha256 } from 'react-native-sha256';

type UserRole = 'coach' | 'student';

export async function register(
  email: string,
  password: string,
  role: UserRole
): Promise<boolean> {
  const encryptedPass = await sha256(password);
  // Logica salvataggio su SQLite
  return true;
}