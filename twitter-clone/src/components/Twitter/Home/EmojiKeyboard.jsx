'use client'
import EmojiPicker from 'emoji-picker-react';
import { Smile } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export const EmojiKeyboard = ({ onEmojiClick }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button type="button" className="cursor-pointer">
          <Smile className="text-blue-500 hover:text-blue-600" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-slate-900 border-zinc-700">
        <EmojiPicker 
          onEmojiClick={onEmojiClick}
          skinTonesDisabled
          searchDisabled
          width={300}
          height={350}
          previewConfig={{ showPreview: false }}
          theme="dark"
        />
      </PopoverContent>
    </Popover>
  );
};