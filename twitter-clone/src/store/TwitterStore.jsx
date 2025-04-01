import { create } from "zustand";
import { v4 } from "uuid";

export const useTwitterStore = create((set) => ({
  tweets: [],
  randomTweets: [],
  step: 1,
  isDialogOpen: false,
  file: "",
  filePreview: "",
  fileVideo: "",
  fileVideoPreview:"",

  addTweets: (name,date, post, image, tweetImage,tweetVideo) => {
    set((state) => ({
      tweets: [
        ...state.tweets,
        {
          id: v4(),
          name,
          date,
          post,
          image,
          tweetImage: tweetImage ? URL.createObjectURL(tweetImage) : null,
          tweetVideo: tweetVideo ? URL.createObjectURL(tweetVideo) : null,
          like: false,
          dialogCommenter: false,
          comments: [],
        },
      ],
    }));
  },
  clickLike: (id) => {
    set((state) => ({
      tweets: state.tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, like: !tweet.like } : tweet
      ),
      randomTweets: state.randomTweets.map((tweet) =>
        tweet.id === id ? { ...tweet, like: !tweet.like } : tweet
      ),
    }));
  },
  clickCommenter: (id, isOpen) => {
    set((state) => ({
      tweets: state.tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, dialogCommenter: isOpen } : tweet
      ),
      randomTweets: state.randomTweets.map((tweet) =>
        tweet.id === id ? { ...tweet, dialogCommenter: isOpen } : tweet
      ),
    }));
  },
  clickCommenterUnique: (id, isOpen) => {
    set((state) => ({
      tweets: state.tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, dialogCommenter: isOpen } : tweet
      ),
    }));
  },
  clickCommenterUnique2: (id, isOpen) => {
    set((state) => ({
      randomTweets: state.randomTweets.map((tweet) =>
        tweet.id === id ? { ...tweet, dialogCommenter: isOpen } : tweet
      ),
    }));
  },
  addComment: (id, image, name, post) => {
    set((state) => ({
      tweets: state.tweets.map((tweet) =>
        tweet.id === id
          ? {
              ...tweet,
              comments: [
                { id: v4(), image, name, post, like: false },
                ...tweet.comments,
              ],
            }
          : tweet
      ),
      randomTweets: state.randomTweets.map((tweet) =>
        tweet.id === id
          ? {
              ...tweet,
              comments: [
                { id: v4(), image, name, post, like: false },
                ...tweet.comments,
              ],
            }
          : tweet
      ),
    }));
  },
  likeComment: (id) => {
    set((state) => ({
      tweets: state.tweets.map((tweet) => ({
        ...tweet,
        comments: tweet.comments.map((comment) =>
          comment.id === id ? { ...comment, like: !comment.like } : comment
        ),
      })),
      randomTweets: state.randomTweets.map((tweet) => ({
        ...tweet,
        comments: tweet.comments.map((comment) =>
          comment.id === id ? { ...comment, like: !comment.like } : comment
        ),
      })),
    }));
  },
  openDialog: () => set({ isDialogOpen: true, step: 1 }),
  closeDialog: () => set({ isDialogOpen: false }),
  nextStep: () => set((state) => ({ step: state.step + 1 })),

  addRandomTweets: (name,date, post, image, tweetImage) => {
    set((state) => ({
      randomTweets: [
        ...state.randomTweets,
        {
          id: v4(),
          name,
          date,
          post,
          image,
          tweetImage,
          like: false,
          dialogCommenter: false,
          comments: [],
        },
      ],
    }));
  },

  setFile: (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return;

    if (selectedFile.type.startsWith('video/')) {
      set({
        fileVideo: selectedFile,
        fileVideoPreview: URL.createObjectURL(selectedFile),
        file: null,
        filePreview: null
      });
    }
  },

  setFileVideo: (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return;

    if (selectedFile.type.startsWith('video/')) {
      set({
        fileVideo: selectedFile,
        fileVideoPreview: URL.createObjectURL(selectedFile),
        file: null,
        filePreview: null
      });
    }
  },

  deleteTweet: (id)=>{
    set((state)=>({
        tweets: state.tweets.filter((tweet)=>tweet.id !== id)
    }))
  }

}));
