import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.onButtonClicked = this.onButtonClicked.bind(this);
    this.onResetClicked = this.onResetClicked.bind(this);
    
    this.state = {
      calculResult: '0',firstNumber: '0',secondNumber:'0',signe: '',
    }
  }
  onResetClicked()
  {
    this.setState({calculResult:'0',firstNumber: '0',secondNumber:'0',signe: '',});
  }
  onResetClicked()
  {
    this.setState({calculResult:'0'});
  }
  onButtonClicked(numberValue)
  {
    if(this.state.calculResult != '0')
    {
      var newText = this.state.calculResult+'' + numberValue;
      this.setState({calculResult:newText});
    }
    else{
      this.setState({calculResult:numberValue});
    }
    
  }

  render() {
    return (
      <View style={{ margin: 20 }}>
        <View style={{ height: '30%', fontSize: 20, borderColor: 'red', borderWidth: 2, padding: 10 }}>
          <Text style={{ fontSize: 20, alignSelf: 'center' }}>
            {this.state.calculResult}
          </Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:15 }}>
          <TouchableOpacity style={{borderColor:'grew',borderWidth:2,flex:1}} onPress={() => this.onButtonClicked(7)}>

            <Text style={{ fontSize: 20, alignSelf: 'center' }}>
             7
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{borderColor:'grew',borderWidth:2,flex:1}} onPress={() => this.onButtonClicked(8)}>

            <Text style={{ fontSize: 20, alignSelf: 'center' }}>
              8
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{borderColor:'grew',borderWidth:2,flex:1}} onPress={() => this.onButtonClicked(9)}>

            <Text style={{ fontSize: 20, alignSelf: 'center' }}>
              9
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{borderColor:'grew',borderWidth:2,flex:1}}>

            <Text style={{ fontSize: 20, alignSelf: 'center' }}>
            ??
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:15 }}>
          <TouchableOpacity style={{borderColor:'grew',borderWidth:2,flex:1}} onPress={() => this.onButtonClicked(4)}>

            <Text style={{ fontSize: 20, alignSelf: 'center' }}>
              4
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{borderColor:'grew',borderWidth:2,flex:1}} onPress={() => this.onButtonClicked(5)}>

            <Text style={{ fontSize: 20, alignSelf: 'center' }}>
              5
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{borderColor:'grew',borderWidth:2,flex:1}} onPress={() => this.onButtonClicked(6)}>

            <Text style={{ fontSize: 20, alignSelf: 'center' }}>
              6
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{borderColor:'grew',borderWidth:2,flex:1}}>

            <Text style={{ fontSize: 20, alignSelf: 'center' }}>
              x
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:15 }} >
          <TouchableOpacity style={{borderColor:'grew',borderWidth:2,flex:1}} onPress={() => this.onButtonClicked(1)}>

            <Text style={{ fontSize: 20, alignSelf: 'center' }}>
              1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{borderColor:'grew',borderWidth:2,flex:1}} onPress={() => this.onButtonClicked(2)}>

            <Text style={{ fontSize: 20, alignSelf: 'center' }}>
              2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{borderColor:'grew',borderWidth:2,flex:1}} onPress={() => this.onButtonClicked(3)}>

            <Text style={{ fontSize: 20, alignSelf: 'center' }}>
              3
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{borderColor:'grew',borderWidth:2,flex:1}}>

            <Text style={{ fontSize: 20, alignSelf: 'center' }}>
              -
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:15 }}>
          <TouchableOpacity style={{borderColor:'grew',borderWidth:2,flex:1}} onPress={() => this.onButtonClicked(0)}>

            <Text style={{ fontSize: 20, alignSelf: 'center' }}>
              0
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{borderColor:'grew',borderWidth:2,flex:1}} onPress={() => this.onResetClicked()}>

            <Text style={{ fontSize: 20, alignSelf: 'center' }}>
              AC
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{borderColor:'grew',borderWidth:2,flex:1}}>

            <Text style={{ fontSize: 20, alignSelf: 'center' }}>
              =
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex:1}}>

            <Text style={{ fontSize: 20, alignSelf: 'center' }}>
              
            </Text>
          </TouchableOpacity>
          
        </View>
        
      </View>

    )
  }
}