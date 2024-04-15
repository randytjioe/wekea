import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  transactionContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    gap: 16,
  },

  transactionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  transactionDate: {
    fontWeight: '400',
    fontSize: 12,
    marginRight: 10,
  },

  transactionStatus: {
    padding: 1,
    paddingHorizontal: 2,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'orange',
  },

  transactionStatusText: {
    fontWeight: 'bold',
    color: 'orange',
    fontSize: 12,
  },

  transactionBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  transactionBodyLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  transactionBodyImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },

  transactionBodyText: {
    marginLeft: 10,
    gap: 5,
  },

  transactionBodyTextTitle: {
    fontWeight: 'bold',
  },

  transactionBodyTextDesc: {
    fontWeight: '400',
  },

  transactionFooter: {
    alignItems: 'flex-end',
    gap: 5,
  },

  transactionFooterButton: {
    padding: 2,
    paddingHorizontal: 6,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'green',
  },
});

export default styles;
