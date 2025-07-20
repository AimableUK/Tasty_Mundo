import { create } from 'zustand';

const useMenuStore = create((set) => ({
  menuItem: 'home',
  setMenuItem: (path) => {
    const menuMap = {
      '/': 'home',
      '/aboutUs': 'aboutUs',
      '/services': 'services',
      '/recipes': 'recipes'
    };
    set({ menuItem: menuMap[path] || '' });
  },
}));

export default useMenuStore;
