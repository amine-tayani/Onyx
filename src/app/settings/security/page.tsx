import { Separator } from '@/components/ui/separator';
import { SecurityForm } from './security-form';

export default function SecurityPage() {
  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-semibold tracking-wide'>Security</h3>
        <p className='text-sm text-muted-foreground'>
          Select the kinds of notifications you get about your applications.
        </p>
      </div>
      <Separator />
      <SecurityForm />
    </div>
  );
}
