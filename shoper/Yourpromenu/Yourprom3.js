import React, { useState } from 'react';
  import { StyleSheet } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';


  const data = [
    { label: 'Shop 1', value: '1' },
    { label: 'Shop 2', value: '2' },
    { label: 'Shop 3', value: '3' },
    { label: 'Shop 4', value: '4' },
    { label: 'Shop 5', value: '5' },
  ];

  
  const DropdownComponent3 = () => {
    const [value, setValue] = useState();

    return (
      <Dropdown
        style={styles.dropdown}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
       // search
        maxHeight={200}
        labelField="label"
        valueField="value"
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
      />
    );
  };

  export default DropdownComponent3;

  const styles = StyleSheet.create({
    dropdown: {
        height: 30,
        borderBottomColor: '#0004',
        borderBottomWidth: 2,
      },
      selectedTextStyle: {
        fontSize: 14,
      },
   
  });