import { create } from 'zustand';

const useMenuStore = create((set) => ({
  menuItem: 'home',
  setMenuItem: (path) => {
    const menuMap = {
      '/': 'home',
      '/aboutUs': 'aboutUs',
      '/services': 'services',
    };
    set({ menuItem: menuMap[path] || '' });
  },
}));

export default useMenuStore;
