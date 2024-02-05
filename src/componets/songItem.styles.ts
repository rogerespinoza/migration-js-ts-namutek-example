import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 60,
    marginVertical: 4,
    marginHorizontal: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.41,
    elevation: 2,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: { height: 30, width: 30, margin: 8, borderRadius: 3 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginHorizontal: 8,
  },
  title: { fontSize: 14, fontWeight: '600' },
  artist: { fontSize: 12, color: 'gray', width: 250 },
  year: { fontSize: 10, color: 'gray' },
});
