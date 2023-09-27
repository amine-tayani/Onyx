import Link from 'next/link';

export const metadata = {
  title: 'Onyx - About',
};

export default function AboutPage() {
  return (
    <section className='container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24'>
      <div className='mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]'>
        <h2 className='font-heading text-3xl leading-[1.1] text-white sm:text-3xl md:text-6xl'>
          Simple, About Page
        </h2>
        <Link href='/about'>About</Link>
      </div>
    </section>
  );
}
