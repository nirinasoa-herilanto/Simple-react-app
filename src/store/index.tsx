import React, {
  useState,
  useContext,
  createContext,
  ReactNode,
  memo,
  useEffect,
} from 'react';

interface AppProviderProps {
  children: ReactNode;
}

interface IAppContext {
  parentProps: any;
  message: string;
  openModal: boolean;
  openSideDrawer: boolean;
  theme: string;
  isModalOpen: () => void;
  isSideDrawerOpen: () => void;
  switchModeHandler: (item: string) => void;
}

const AppStoreContext = createContext<IAppContext>({} as IAppContext);

const initialThemeState = localStorage.getItem('theme') || 'light';

const AppStoreProvider: React.FC<AppProviderProps> = ({
  children,
  ...rest
}) => {
  // State

  const [theme, setTheme] = useState<string>(initialThemeState);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openSideDrawer, setOpenSideDrawer] = useState<boolean>(false);

  const message = `Welcome to my simple react app.`;

  // Method
  const isModalOpen = () => setOpenModal((prevState) => !prevState);
  const isSideDrawerOpen = () => setOpenSideDrawer((prevState) => !prevState);

  const switchModeHandler = (item: string) => {
    setTheme(item);
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const value = {
    parentProps: rest,
    message,
    openModal,
    openSideDrawer,
    isModalOpen,
    theme,
    isSideDrawerOpen,
    switchModeHandler,
  } as IAppContext;

  return (
    <AppStoreContext.Provider value={value}>
      {children}
    </AppStoreContext.Provider>
  );
};

/**
 * Use for consumming store
 */
export const useAppStore = () => useContext(AppStoreContext);

export default memo(AppStoreProvider);
