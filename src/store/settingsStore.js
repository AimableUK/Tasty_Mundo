import { create } from "zustand";
import SavedChatsList from "../Data/SavedChats/SavedChats";

export const useSettingsStore = create((set) => ({
  savedRecipes: [...SavedChatsList],

  clearSavedRecipes: () => {
    localStorage.removeItem("savedRecipes");
    set({ savedRecipes: [] });
  },

  resetAllSettings: () => {
    localStorage.clear();
    set({
      savedRecipes: [],
    });
  },
}));
