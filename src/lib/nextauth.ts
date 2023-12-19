import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';
import { NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from './db/prisma';

export const authOptions: NextAuthOptions = {
  cookies: {
    sessionToken: {
      name: 'next-auth.session-token',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: true,
      },
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Your email address',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Your password',
        },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email.toLowerCase(),
          },
          select: {
            id: true,
            name: true,
            email: true,
            hashedPassword: true,
            image: true,
            emailVerified: true,
          },
        });
        if (!user) {
          throw new Error('Account or Email does not Exists.');
        }

        const isCorrectPassword = await compare(
          credentials!.password,
          user.hashedPassword as string
        );

        if (!isCorrectPassword) {
          throw new Error('Password you have provided is incorrect.');
        }

        const { id, email, name, image, emailVerified } = user;

        return {
          id,
          email,
          name,
          image,
          emailVerified,
        };
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token }) {
      return await token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub!;
      }
      return {
        ...session,
        user: {
          ...session.user,
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
        },
        error: token.error,
      };
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60,
  },

  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 60 * 60 * 24 * 30,
  },

  debug: process.env.NODE_ENV === 'development',
};
