"use client";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useTwitterStore } from "@/store/TwitterStore";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { DialogTitle } from "@radix-ui/react-dialog";
import { EmojiKeyboard } from "./EmojiKeyboard";
import { useState } from "react";

const DialogReploy = ({ tweet }) => {
  const { user } = useUser();
  const { clickCommenter, addComment } = useTwitterStore();
  const form = useForm();
  const [text, setText] = useState('');

  const handleEmojiClick = (emojiData) => {
    setText(prevText => prevText + emojiData.emoji);
    form.setValue('post', text + emojiData.emoji);
  };

  const onSubmit = (data)=>{
    addComment(tweet.id,user.imageUrl,tweet.name,data.post)
    clickCommenter(tweet.id, false)
  }

  return (
    <Dialog open={tweet.dialogCommenter} onOpenChange={(isOpen) => clickCommenter(tweet.id, isOpen)} >
      <DialogTitle></DialogTitle>
      <DialogContent className="bg-slate-950 text-white h-[55vh] w-xl border-0 rounded-md">
        <div className="w-full">
          <div>
            <div className="flex mt-4 h-auto items-center">
              <Image
                src={user.imageUrl}
                alt="profile image"
                width={300}
                height={100}
                className="w-10 h-10 rounded-full mr-3.5"
              />
              <p>{tweet.name}</p>
              <p className="text-sm text-zinc-500 ml-5">@{tweet.name} - 2h</p>
            </div>
            <div className="pl-14 mt-2">
              <p className="text-white">{tweet.post}</p>
            </div>
            <div className="mt-4 pl-14">
              <p className="text-sm text-zinc-500">
                Respondendo a @{tweet.name}
              </p>
            </div>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col justify-between w-full items-center "
            >
              <FormField
                control={form.control}
                name="post"
                render={({ field }) => (
                  <FormItem className="w-full mt-6 flex">
                    <div>
                        <Image src={user.imageUrl} alt="Image profile" width={300} height={100}
                        className="w-10 h-10 mr-3.5 rounded-full mt-1"/>
                    </div>
                    <FormControl className="w-full">
                      <Textarea
                        {...field}
                        value={text}
                        onChange={(e) => {
                          setText(e.target.value);
                          field.onChange(e);
                        }}
                        className="border-0 placeholder:text-zinc-400 p-3 placeholder:text-xl
                                resize-none h-24 text-white w-full"
                        placeholder={`Post your reply`}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex justify-between w-full mr-2.5 mt-10">
                <div className="flex mt-2">

                  <span>
                    <EmojiKeyboard onEmojiClick={handleEmojiClick}/>
                  </span> 
                </div>
                <div className="mr-3">
                  <Button
                  variant={"none"}
                  type="submit"
                  className="bg-blue-500 cursor-pointer hover:opacity-90 w-24 ">Reply
                  </Button>
                </div>      
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogReploy;
