import { create } from "zustand";
import { persist } from "zustand/middleware";
import SavedChats from "./SavedChats";

export const useChatStore = create(
  persist(
    (set, get) => ({
      chats: [...SavedChats],

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

      editChatName: (id, newName) =>
        set((state) => ({
          chats: state.chats.map((chat) =>
            chat.id === id ? { ...chat, chatName: newName } : chat
          ),
        })),

      updateChatFeedback: (id, response) =>
        set((state) => ({
          chats: state.chats.map((chat) =>
            chat.id === id ? { ...chat, response } : chat
          ),
        })),

      deleteChat: (id) =>
        set((state) => ({
          chats: state.chats.filter((chat) => chat.id !== id),
        })),

      getChatById: (id) => get().chats.find((chat) => chat.id === id),
    }),
    {
      name: "chat-storage",
      partialize: (state) => ({ chats: state.chats }),
    }
  )
);
