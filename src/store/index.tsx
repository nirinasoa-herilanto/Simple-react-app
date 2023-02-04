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
  isDark: boolean;
  isModalOpen: () => void;
  isSideDrawerOpen: () => void;
  switchMode: () => void;
}

const AppStoreContext = createContext<IAppContext>({} as IAppContext);

const AppStoreProvider: React.FC<AppProviderProps> = memo(
  ({ children, ...rest }) => {
    // State

    // const [theme, setTheme] = useState<string>('')
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [openSideDrawer, setOpenSideDrawer] = useState<boolean>(false);
    const [isDark, setIsDark] = useState<boolean>(false);

    const message = `Welcome to my simple react app.`;

    // Method
    const isModalOpen = () => {
      setOpenModal(!openModal);
    };
    const isSideDrawerOpen = () => setOpenSideDrawer(!openSideDrawer)!;

    const switchMode = () => {
      const theme = localStorage.getItem('theme') as string;

      if (theme !== 'dark') {
        localStorage.setItem('theme', 'dark');
        setIsDark(!isDark);
      } else {
        localStorage.setItem('theme', 'light');
        setIsDark(!isDark);
      }
    };

    useEffect(() => {
      (localStorage.getItem('theme') as string) !== 'dark'
        ? setIsDark(false)
        : setIsDark(true);
    }, []);

    const value = {
      parentProps: rest,
      message,
      openModal,
      openSideDrawer,
      isModalOpen,
      isDark,
      isSideDrawerOpen,
      switchMode,
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
