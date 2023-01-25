// import component
import React, { Component } from 'react';
import { View } from 'react-native';
import MultiSelect from 'react-native-multiple-select';

const items = [{
    id: '92iijs7yta',
    name: 'Ondo'
  }, {
    id: 'a0s0a8ssbsd',
    name: 'Ogun'
  }, {
    id: '16hbajsabsd',
    name: 'Calabar'
  }, {
    id: 'nahs75a5sg',
    name: 'Lagos'
  }, {
    id: '667atsas',
    name: 'Maiduguri'
  }, {
    id: 'hsyasajs',
    name: 'Anambra'
  }, {
    id: 'djsjudksjd',
    name: 'Benue'
  }, {
    id: 'sdhyaysdj',
    name: 'Kaduna'
  }, {
    id: 'suudydjsjd',
    name: 'Abuja'
    }
  , {
    id: 'a0s0a8ssbsd',
    name: 'Ogun'
  }, {
    id: '16hbajsabsd',
    name: 'Calabar'
  }, {
    id: 'nahs75a5sg',
    name: 'Lagos'
  }, {
    id: '667atsas',
    name: 'Maiduguri'
  }, {
    id: 'hsyasajs',
    name: 'Anambra'
  }, {
    id: 'djsjudksjd',
    name: 'Benue'
  }, {
    id: 'sdhyaysdj',
    name: 'Kaduna'
  }, {
    id: 'suudydjsjd',
    name: 'Abuja'
    }
];

class Dropmultiple extends Component {

  state = {
    selectedItems : [null]
  };

  
  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };

  render() {
    const { selectedItems } = this.state;

    return (
      <View style={{ width:'90%',height:400}}>
        <MultiSelect
          // hideTags
       
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Select Your Preference"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={ (text)=> console.log(text)}
          tagRemoveIconColor="black"
          tagBorderColor="black"
          tagTextColor="black"
          selectedItemTextColor="green"
         hideDropdown={true}
    
          searchInputStyle={
            {
            color:'red', height:40,color:'black',fontSize:16        }
          }
          styleMainWrapper={
            {height:100}
          }
          styleDropdownMenu={
            {
            
              height:50,
              borderWidth:2,backgroundColor:'green'
              
            }
          }
          styleListContainer={
            {
              backgroundColor:'#FFc72C',
             
            }
          }
          selectedItemIconColor="green"
          itemTextColor="#000"
          
          submitButtonColor="black"
          submitButtonText="Submit"
          

        />
        <View>
          {/* {this.multiSelect.getSelectedItemsExt(selectedItems)} */}
        </View>
      </View>
    );
  }
}

export default Dropmultiple;