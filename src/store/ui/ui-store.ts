import { create } from 'zustand';

interface IState {
    isSideMenuOpen: boolean;
    openSideMenu: () => void;
    closeSideMenu: () => void;
}

export const useUiStore = create<IState>()((set) => ({
  
    isSideMenuOpen: false, //Por defecto en false

    openSideMenu: () => set({ isSideMenuOpen: true }),
    closeSideMenu: () => set({ isSideMenuOpen: false }),
    
}))