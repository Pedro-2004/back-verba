import { prisma } from '@/lib/prisma';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { env } from '@/config/env';

export const loginService = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!user) {
    throw new Error('E-mail ou senha inválidos');
  }
  const validatePassword = await compare(password, user.password_hash);

  if (!validatePassword) {
    throw new Error('E-mail ou senha invalidos');
  }

  const userId = String(user.id);
  const token = sign({ sub: userId }, env.JWT_SECRET, { expiresIn: '15m' });
  return token;
};
