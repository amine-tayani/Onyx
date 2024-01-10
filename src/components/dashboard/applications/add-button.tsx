import { Plus } from 'lucide-react';
import { CreateApplicationForm } from './add-application-form';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export function AddApplicationButton() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className='group'>
          <Plus className='mr-2 h-5 w-5 text-neutral-400 transition-colors duration-300 ease-in-out group-hover:text-neutral-100' />
          Add Application
        </Button>
      </DialogTrigger>
      <DialogContent className='bg-background'>
        <DialogHeader>
          <DialogTitle className='text-xl font-semibold'>
            Add Application
          </DialogTitle>
        </DialogHeader>
        <CreateApplicationForm />
      </DialogContent>
    </Dialog>
  );
}
