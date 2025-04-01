'use client'
import { Textarea } from "@/components/ui/textarea";
import { Images, MapPin, PlaySquare, SmileIcon } from "lucide-react";
import { Button } from "../../ui/button";
import profile from "../../../../public/image_profile.png";
import Image from "next/image";
import Tweets from "./Tweets";
import { useTwitterStore } from "@/store/TwitterStore";
import { useForm } from "react-hook-form";
import { Form,FormControl,FormField,FormItem,FormMessage,} from "@/components/ui/form"  
import { useUser } from "@clerk/nextjs";
import RandomTweets from "./RandomTweets";
import { EmojiKeyboard } from "./EmojiKeyboard";
import { useState } from "react";

const HomeTwitter = () => {
  const { addTweets,file,setFile,setFileVideo ,filePreview,fileVideo, fileVideoPreview} = useTwitterStore()
  const form = useForm()
  const { user } = useUser()
  const [text, setText] = useState('');

  const handleEmojiClick = (emojiData) => {
    setText(prevText => prevText + emojiData.emoji);
    form.setValue('post', text + emojiData.emoji);
  };
 
  const onSubmit = (data)=>{
    const date = new Date().toLocaleString([], { hour:"2-digit", minute:"2-digit"})
    addTweets(user.firstName, date , data.post, profile,file || null, fileVideo || null )
    form.reset()
  }

  return (
    <div className="flex flex-col p-5 w-[85vw] sm:w-full lg:w-[45vw] border-l border-l-zinc-600 
    border-r border-r-zinc-600 min-h-screen">
      <div>
        <p className="font-medium text-lg text-white">Home</p>
      </div>

      <div className="mt-5 w-full lg:w-[43vw] border-b border-b-zinc-600 pb-4 flex">
        {user && 
          <div className="w-12">
            <Image
              src={user ? user.imageUrl : profile}
              alt="image"
              className="w-full h-12 rounded-full"
              width={300}
              height={100}
            />
          </div>
        }
        
        <Form {...form}>
          <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-between w-full h-full items-center ">
            <FormField
              control={form.control}
              name="post"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="w-full">
                    <Textarea
                      {...field}
                      value={text}
                      onChange={(e) => {
                        setText(e.target.value);
                        field.onChange(e);
                      }}
                      className="border-0 placeholder:text-zinc-400 p-3 placeholder:text-lg
                      resize-none h-10 text-white w-full"
                      placeholder={`What is Happening?`}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div>
              {file && 
                <Image src={filePreview} alt="Tweet Image" width={50} height={50} 
                className="rounded-md w-full h-80"/>
              }
              {fileVideoPreview && (
                <video 
                  src={fileVideoPreview} 
                  controls 
                  className="rounded-lg w-full h-auto max-h-80"
                />
              )}
            </div>
            
            <div className="flex justify-between items-center h-full w-full">
              <div className="flex gap-5 pl-4">
                <label htmlFor="input">
                  <span className="cursor-pointer">
                    <Images className="text-blue-500" />
                  </span>
                </label>
                <input id="input" type="file" accept="image/*" className="hidden cursor-pointer"
                onChange={(e)=>setFile(e)}/>
                <div>
                  <label htmlFor="input">
                    <span className="cursor-pointer">
                      <PlaySquare className="text-blue-500" />
                    </span>
                  </label>
                  <input id="input" type="file" accept="image/*" className="hidden cursor-pointer"
                  onChange={(e)=>setFileVideo(e)}/>
                </div>
                <span className="">
                  <MapPin className="text-blue-500" />
                </span>
                <span className="">
                  <EmojiKeyboard onEmojiClick={handleEmojiClick}/>
                </span>
              </div>
              <div>
                <Button
                  type="submit"
                  variant={"none"}
                  className="bg-blue-500 rounded-full w-24 cursor-pointer hover:bg-blue-600 text-white"
                >
                  Tweet
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
      
     <Tweets/>
     <RandomTweets/>
     
    </div>
  );
};

export default HomeTwitter;
