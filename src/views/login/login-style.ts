import {StyleSheet} from 'react-native';

export const pageStyles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  help: {
    position: 'absolute',
    right: 20,
    top: 20,
    color: '#ccc',
    fontSize: 16,
  },
  logo: {
    height: 30,
    width: 30,
  },
  header: {
    marginTop: 80,
    flexDirection: 'row',
    marginBottom: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    color: '#f00',
    fontWeight: '700',
    marginLeft: 15,
  },
  userPhoto: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    borderRadius: 50,
    borderColor: '#f00',
  },
  userName: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: '600',
  },
  loginBtn: {
    width: 280,
    backgroundColor: '#f00',
    color: '#fff',
    borderRadius: 10,
    marginTop: 40,
    marginBottom: 15,
  },
  instrBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
  },
  instrCont: {
    fontSize: 12,
    marginLeft: 5,
    color: '#ccc',
  },
  instrs: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  instrLink: {
    fontSize: 12,
    color: '#070938',
  },
  popupContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 50,
  },
});
