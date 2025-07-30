import { create } from "zustand";
import SavedChatsList from "../Data/SavedChats/SavedChats";

export const useChatStore = create((set) => ({
  chats: [...SavedChatsList],

  addChat: (chat) =>
    set((state) => ({
      chats: [...state.chats, chat],
    })),

  updateChatResult: (id, result) =>
    set((state) => ({
      chats: state.chats.map((chat) =>
        chat.id === id ? { ...chat, result } : chat
      ),
    })),

  getChatById: (id) =>
    useChatStore.getState().chats.find((chat) => chat.id === id),
}));
