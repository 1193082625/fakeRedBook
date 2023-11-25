import React, {PropsWithChildren} from 'react';
import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';

type PopUpProps = PropsWithChildren<{
  visible: boolean;
  onClose: Function;
  children?: any;
}>;

export default function PopUp(props: PopUpProps) {
  const {visible, onClose, children} = props;
  return (
    <Modal
      transparent
      visible={visible}
      animationType={'fade'}
      onRequestClose={() => onClose()}>
      <TouchableOpacity
        style={popupStyles.overlay}
        activeOpacity={1}
        onPress={() => onClose()}
      />
      <View style={popupStyles.content}>{children}</View>
    </Modal>
  );
}

const popupStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    zIndex: 1,
    padding: 24,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
