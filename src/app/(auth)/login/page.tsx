import { Metadata } from 'next';
import { LoginAccountForm } from '@/components/auth/login/form';

export const metadata: Metadata = {
  title: 'Login | Onyx',
  description: 'Sign in to Onyx and Manage your job applications.',
};
export default function LoginPage() {

  

  return (
    <div className='container relative mt-8 flex-col items-center justify-center lg:max-w-none lg:px-0'>
      <div className='lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
          <h1 className='text-2xl font-semibold tracking-tight text-neutral-100'>
            Welcome back
          </h1>
          <LoginAccountForm />
        </div>
      </div>
    </div>
  );
}
