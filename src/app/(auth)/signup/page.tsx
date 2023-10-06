import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { CreateAccountForm } from '@/components/auth/create-account/form';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

export const metadata: Metadata = {
  title: 'Signup | Onyx',
  description: 'Sign up to Onyx and Manage your job applications.',
};
export default async function Signup() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data?.session) {
    redirect('/');
  }

  return (
    <div className='container relative mt-8 flex-col items-center justify-center lg:max-w-none lg:px-0'>
      <div className='lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
          <h1 className='text-2xl font-semibold tracking-tight text-neutral-100'>
            Create an Onyx Account
          </h1>
          <CreateAccountForm />
        </div>
      </div>
    </div>
  );
}
