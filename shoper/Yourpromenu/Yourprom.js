import React, { useState } from 'react';
  import { StyleSheet } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';


  const data = [
    { label: 'Clothes,Shoes', value: '1' },
    { label: 'Bags,Toys', value: '2' },
    { label: 'Cosmatics', value: '3' },
    { label: 'Electronics', value: '4' },
    { label: 'Sports,Food', value: '5' },

  ];

  const DropdownComponent = () => {
    const [value, setValue] = useState(null);

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

  export default DropdownComponent;

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