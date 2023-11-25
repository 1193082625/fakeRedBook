import React, {PropsWithChildren, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

type RadioProps = PropsWithChildren<{
  selected?: boolean;
  color?: string;
  size?: number;
  selecteChanged: Function;
}>;

export default function Radio(props: RadioProps) {
  const [isSelect, changSelect] = useState(props.selected);

  const childSize = props.size ? props.size / 2 : 12;
  const propColor = StyleSheet.create({
    borderColor: {
      height: props.size || 24,
      width: props.size || 24,
      borderRadius: childSize,
      borderColor: props.color || '#000',
    },
    selectedColor: {
      height: childSize,
      width: childSize,
      backgroundColor: props.color || '#000',
    },
  });
  const changSelectRadio = () => {
    changSelect(isSelect ? false : true);
    props.selecteChanged(isSelect);
  };
  return (
    <TouchableOpacity onPress={changSelectRadio}>
      <View style={[radioStyles.radio, propColor.borderColor]}>
        {isSelect ? (
          <View style={[radioStyles.selected, propColor.selectedColor]} />
        ) : null}
      </View>
    </TouchableOpacity>
  );
}

const radioStyles = StyleSheet.create({
  radio: {
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    borderRadius: 6,
  },
});
