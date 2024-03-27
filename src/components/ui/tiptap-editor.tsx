'use client';

// import { useState } from 'react';
// import Highlight from "@tiptap/extension-highlight";
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Heading from '@tiptap/extension-heading';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import { Toolbar } from './editor-toolbar';
import { ScrollArea } from './scroll-area';
import Placeholder from '@tiptap/extension-placeholder';

export default function Tiptap() {
  const extensions = [
    StarterKit.configure({
      bulletList: {
        keepMarks: true,
        keepAttributes: false,
      },
    }),
    Placeholder.configure({
      placeholder: 'Write the job description.',
    }),
    Paragraph,
    Text,
    // Typography,
    // Highlight,
    Heading.configure({
      levels: [1, 2, 3, 4],
    }),
  ];

  const editor = useEditor({
    extensions: extensions,
    onUpdate({ editor }) {
      console.log(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          'bg-muted rounded-lg focus:outline-none p-5 prose prose prose-lg h-[130px] w-[700px] text-neutral-100 text-sm',
      },
    },
  });

  return (
    <div>
      <div className='border'>
        <Toolbar editor={editor} />
      </div>
      <div className='flex justify-center'>
        <ScrollArea className='rounded-md border'>
          <EditorContent editor={editor} />
        </ScrollArea>
      </div>
    </div>
  );
}
