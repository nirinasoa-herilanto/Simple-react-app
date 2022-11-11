import React, {
  useState,
  useContext,
  createContext,
  ReactNode,
  memo,
} from 'react';

interface AppProviderProps {
  children: ReactNode;
}

interface IAppContext {
  parentProps: any;
  message: string;
  openModal: boolean;
  openSideDrawer: boolean;
  isModalOpen: () => void;
  isSideDrawerOpen: () => void;
}

const AppStoreContext = createContext<IAppContext>({} as IAppContext);

const AppStoreProvider: React.FC<AppProviderProps> = memo(
  ({ children, ...rest }) => {
    // State
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [openSideDrawer, setOpenSideDrawer] = useState<boolean>(false);

    const message = `Welcome to my simple react app.`;

    // Method
    const isModalOpen = () => setOpenModal(!openModal);
    const isSideDrawerOpen = () => setOpenSideDrawer(!openSideDrawer)!;

    const value = {
      parentProps: rest,
      message,
      openModal,
      openSideDrawer,
      isModalOpen,
      isSideDrawerOpen,
    } as IAppContext;

    return (
      <AppStoreContext.Provider value={value}>
        {children}
      </AppStoreContext.Provider>
    );
  }
);

/**
 * Use for consumming store
 */
export const useAppStore = () => useContext(AppStoreContext);

export default AppStoreProvider;
