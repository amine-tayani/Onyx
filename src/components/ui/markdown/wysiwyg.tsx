'use client';

import React from 'react';
import StarterKit from '@tiptap/starter-kit';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import { EditorContent, useEditor } from '@tiptap/react';
import { MarkdownBar } from './markdown-bar';

const extensions = [
  TextStyle.configure({ HTMLAttributes: ListItem.options.HTMLAttributes }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
];

export default function Wysiwyg({
  description,
  onChange,
}: {
  description: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (richText: string) => void;
}) {
  const editor = useEditor({
    extensions,
    content: description,
    editorProps: {
      attributes: {
        class:
          'rounded-lg text-muted-foreground/80 border-none min-h-[150px] outline-none focus:outline-none bg-muted placeholder:text-neutral-500 focus:ring-1 focus:ring-neutral-500 focus-visible:outline-none',
      },
    },
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  return (
    <div className='flex flex-col justify-stretch'>
      <MarkdownBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
