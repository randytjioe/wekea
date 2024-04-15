import { useState } from 'react';
import { RadioButton } from 'react-native-paper';

const { MODAL_TYPES, useGlobalBottomSheet } = require('@context/BottomSheetContext');

const expeditionData = [
  {
    label: 'JNE',
    value: 'JNE',
    price: 200000,
    duration: 3,
  },
  {
    label: 'JNT',
    value: 'JNT',
    price: 150000,
    duration: 2,
  },
  {
    label: 'POS',
    value: 'POS',
    price: 100000,
    duration: 1,
  },
];
const useExpeditionReview = () => {
  const [selectedExpedition, setSelectedExpedition] = useState(expeditionData[0]);

  const { showModal, hideModal } = useGlobalBottomSheet();
  const selectHandler = (value) => {
    const selected = expeditionData.find((expedition) => expedition.value === value);
    setSelectedExpedition(selected);
    hideModal();
  };
  const showBottomSheet = () => {
    showModal(MODAL_TYPES.BOTTOM_SHEET, {
      children:
  <RadioButton.Group
    onValueChange={selectHandler}
    value={selectedExpedition.value}
  >
    {expeditionData.map((expedition) => (
      <RadioButton.Item
        key={expedition.value}
        label={expedition.label}
        value={expedition.value}
      />
    ))}
  </RadioButton.Group>
    });
  };
  return {
    selectedExpedition,
    showBottomSheet,
    hideModal
  };
};

export default useExpeditionReview;
