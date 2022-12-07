import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';
import {themes} from '../constants/colors';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width * 0.76,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingLeft: 10,
    borderRadius: 8,
    zIndex: 5,
  }
});

const CsAutocompletePicker = ({
  leftIcon,
  data,
  onSelectItem,
  placeholder,
  theme,
}) => {
  return (
    <View style={styles.container}>
      {leftIcon}
      <AutocompleteDropdown
        clearOnFocus={false}
        closeOnBlur={true}
        closeOnSubmit={false}
        dataSet={data}
        onSelectItem={onSelectItem}
        textInputProps={{
          placeholder: placeholder,
          autoCorrect: false,
          autoCapitalize: 'none',
          style: {
            fontFamily: 'Raleway',
            color: themes[theme].chatInputPlaceholder,
          },
        }}
        inputContainerStyle={{
          backgroundColor: 'transparent',
        }}
        suggestionsListContainerStyle={{
          backgroundColor: '#ffffff',
          width: width * 0.76,
          marginLeft: -40,
          backgroundColor: themes[theme].backgroundColor,
        }}
        containerStyle={{width: width * 0.65, marginLeft: 15}}
      />
    </View>
  );
};

export default CsAutocompletePicker;
