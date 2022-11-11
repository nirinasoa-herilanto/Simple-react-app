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
  isModalOpen: () => void;
}

const AppStoreContext = createContext<IAppContext>({} as any);

const AppStoreProvider: React.FC<AppProviderProps> = memo(
  ({ children, ...rest }) => {
    // State
    const [openModal, setOpenModal] = useState<boolean>(false);

    const message = `Welcome to my simple react app.`;

    // Method
    const isModalOpen = () => setOpenModal(!openModal);

    const value = {
      parentProps: rest,
      message,
      openModal,
      isModalOpen,
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
