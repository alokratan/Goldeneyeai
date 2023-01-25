import React, { useState } from 'react';
  import { StyleSheet } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';


  const data = [
    { label: 'Discount upto 40%', value: '1' },
    { label: 'Discount upto 35%', value: '2' },
    { label: 'Discount upto 20%', value: '3' },
    { label: 'Discount upto 15%', value: '4' },
    { label: 'Discount upto 5%', value: '5' },

  ];

  const DropdownComponent2 = () => {
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

  export default DropdownComponent2;

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