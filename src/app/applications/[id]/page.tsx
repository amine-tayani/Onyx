import { Application } from './_components/application';
import { applications } from './data';

export default function ApplicationPage() {
  return (
    <>
      <div className='hidden flex-col md:flex'>
        <Application applications={applications} />
      </div>
    </>
  );
}
