const { StyleSheet } = require('react-native');

const styles = StyleSheet.create({
  cardContainer: {
    width: 150,
    overflow: 'hidden',
    marginRight: 15,
  },
  cardCoverImg: { borderRadius: 0, height: 150 },
  cardTextLabel: {
    fontWeight: '500',
    fontSize: 16,
  },
});

export default styles;
