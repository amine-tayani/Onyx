'use client';

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

// import { useState } from 'react';
import Heading from '@tiptap/extension-heading';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import { Toolbar } from './editor-toolbar';
import { ScrollArea } from './scroll-area';
// import Highlight from "@tiptap/extension-highlight";
// import Typography from "@tiptap/extension-typography";
// import { Card, CardContent, CardHeader } from "./ui/card";
// import { Toggle } from "./ui/toggle";
// import { Toolbar } from "./toolbar";

export default function Tiptap() {
  const extensions = [
    StarterKit.configure({
      bulletList: {
        keepMarks: true,
        keepAttributes: false,
      },
    }),
    Paragraph,
    Text,
    // Typography,
    // Highlight,
    Heading.configure({
      levels: [1, 2],
    }),
  ];

  const editor = useEditor({
    extensions: extensions,
    content: `
    <h2>
       Hi there,
    </h2>
    <p>
      I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
    </p>
    `,
    onUpdate({ editor }) {
      console.log(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          'bg-muted rounded-lg focus:outline-none p-5 prose prose prose-lg h-[130px] w-[700px]',
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
          <EditorContent editor={editor} className='' />
        </ScrollArea>
      </div>
    </div>
  );
}
