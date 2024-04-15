import BottomSheet from '@components/Shared/BottomSheet';
import { createContext, useContext, useMemo, useState } from 'react';

export const MODAL_TYPES = {
  BOTTOM_SHEET: 'BOTTOM_SHEET',
};

const MODAL_COMPONENTS = {
  [MODAL_TYPES.BOTTOM_SHEET]: BottomSheet
};

const initialState = {
  showModal: () => {},
  hideModal: () => {},
  store: {}
};

const GlobalBottomSheet = createContext(initialState);

export const useGlobalBottomSheet = () => useContext(GlobalBottomSheet);

export function GlobalSheetBottom({ children }) {
  const [store, setStore] = useState();
  const { modalTypes, modalProps } = store || {};
  const showModal = (type, props) => {
    setStore({
      ...store,
      modalTypes: type,
      modalProps: props
    });
  };

  const hideModal = () => {
    setStore({
      ...store,
      modalTypes: null,
      modalProps: {},
    });
  };

  const renderComponent = () => {
    const ModalComponent = MODAL_COMPONENTS[modalTypes];
    if (!modalTypes || !ModalComponent) return null;
    return <ModalComponent {...modalProps} />;
  };

  return useMemo(() => (
    <GlobalBottomSheet.Provider value={{ showModal, hideModal, store }}>
      {renderComponent()}
      {children}
    </GlobalBottomSheet.Provider>
  ), [store, showModal, hideModal, children]);
}
