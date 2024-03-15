import { cn } from '@/lib/cn';
import {
  BoldIcon,
  Heading1Icon,
  Heading2Icon,
  ItalicIcon,
  ListIcon,
  ListOrderedIcon,
  RedoIcon,
  TextIcon,
  UndoIcon,
} from 'lucide-react';
import { type Editor } from '@tiptap/react';
import { Button } from '@/components/ui/button';

interface MarkdownBarProps {
  editor: Editor | null;
}

export const MarkdownBar = ({ editor }: MarkdownBarProps) => {
  if (!editor) {
    return null;
  }

  return (
    <div className='mb-3 mt-1 w-[435px] rounded-lg bg-muted text-muted-foreground/80'>
      <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={cn('group', editor.isActive('bold') ? 'is-active' : '')}
      >
        <BoldIcon className='h-5 w-4 text-muted-foreground/70 group-hover:text-primary' />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={cn(editor.isActive('italic') ? 'is-active' : '')}
      >
        <ItalicIcon className='h-5 w-4 text-muted-foreground/70 group-hover:text-primary' />
      </Button>

      <Button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={cn(editor.isActive('paragraph') ? 'is-active' : '')}
      >
        <TextIcon className='h-5 w-4 text-muted-foreground/70 group-hover:text-primary' />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={cn(
          editor.isActive('heading', { level: 1 }) ? 'is-active' : ''
        )}
      >
        <Heading1Icon className='h-5 w-4 text-muted-foreground/70 group-hover:text-primary' />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={cn(
          editor.isActive('heading', { level: 2 }) ? 'is-active' : ''
        )}
      >
        <Heading2Icon className='h-5 w-4 text-muted-foreground/70 group-hover:text-primary' />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={cn(editor.isActive('bulletList') ? 'is-active' : '')}
      >
        <ListIcon className='h-5 w-4 text-muted-foreground/70 group-hover:text-primary' />
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={cn(editor.isActive('orderedList') ? 'is-active' : '')}
      >
        <ListOrderedIcon className='h-5 w-4 text-muted-foreground/70 group-hover:text-primary' />
      </Button>

      <Button
        className='cursor-pointer hover:text-primary'
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        <UndoIcon className='h-5 w-4 text-muted-foreground/70 group-hover:text-primary' />
      </Button>
      <Button
        className='cursor-pointer hover:text-primary'
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        <RedoIcon className='h-5 w-4 text-muted-foreground/70 group-hover:text-primary' />
      </Button>
    </div>
  );
};
