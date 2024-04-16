import { useState } from 'react';
import { RadioButton } from 'react-native-paper';

const {
  MODAL_TYPES,
  useGlobalBottomSheet,
} = require('@context/BottomSheetContext');

const paymentData = [
  {
    label: 'Gopay',
    value: 'Gopay',
  },
  {
    label: 'Dana',
    value: 'Dana',
  },
  {
    label: 'OVO',
    value: 'OVO',
  },
  {
    label: 'COD',
    value: 'COD',
  },
];
const usePlatformPayment = () => {
  const [selectedPayment, setSelectedPayment] = useState(
    paymentData[0]
  );
  const { showModal, hideModal } = useGlobalBottomSheet();
  const selectHandler = (value) => {
    const selected = paymentData.find(
      (payment) => payment.value === value
    );
    setSelectedPayment(selected);
    hideModal();
  };
  const showBottomSheet = () => {
    showModal(MODAL_TYPES.BOTTOM_SHEET, {
      children: (
        <RadioButton.Group
          onValueChange={selectHandler}
          value={selectedPayment.value}
        >
          {paymentData.map((payment) => (
            <RadioButton.Item
              key={payment.value}
              label={payment.label}
              value={payment.value}
            />
          ))}
        </RadioButton.Group>
      ),
    });
  };
  return {
    selectedPayment,
    showBottomSheet,
    hideModal,
  };
};

export default usePlatformPayment;
