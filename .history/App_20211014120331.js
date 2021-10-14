import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.onButtonClicked = this.onButtonClicked.bind(this);
    this.onResetClicked = this.onResetClicked.bind(this);
    this.onEqualsClicked = this.onEqualsClicked.bind(this);
    this.onSigneClicked = this.onSigneClicked.bind(this);
    
    this.changeValue = this.changeValue.bind(this);
    
    this.state = {
      calculResult: '0',firstNumber: '',secondNumber:'',signe: '',needReset:false,
    }
  }
  onResetClicked()
  {
    this.setState({calculResult:'0',firstNumber: '0',secondNumber:'0',signe: '',});
  }
  
  onEqualsClicked()
  {
    if(this.state.firstNumber !='' && this.state.secondNumber !='' && this.state.signe !='' )
    {
      if(this.state.signe == '+')
      {
        var resultValue = parseInt(this.state.firstNumber) + parseInt(this.state.secondNumber);
        this.setState({calculResult:resultValue,firstNumber: '',secondNumber:'',signe: '',needReset:true});
        return;
      }
      if(this.state.signe == 'x')
      {
        var resultValue = this.state.firstNumber * this.state.secondNumber;
        this.setState({calculResult:resultValue,firstNumber: '',secondNumber:'',signe: '',needReset:true});
        return;
      }
      if(this.state.signe == '÷')
      {
        var resultValue = Math.floor( this.state.firstNumber / this.state.secondNumber);
        this.setState({calculResult:resultValue,firstNumber: '',secondNumber:'',signe: '',needReset:true});
        return;
      }
      if(this.state.signe == '-')
      {
        var resultValue = parseInt(this.state.firstNumber) - parseInt(this.state.secondNumber);
        this.setState({calculResult:resultValue,firstNumber: '',secondNumber:'',signe: '',needReset:true});
        return;
      }
    }
  }
  
  changeValue(numberValue)
  {
    
    if(this.state.firstNumber !='' && this.state.secondNumber !='' && this.state.signe !='' )
    {
      var secondText = this.state.secondNumber+'' + numberValue;
      var newTextResult = this.state.firstNumber+'' + this.state.signe+''+secondText;
      this.setState({calculResult:newTextResult,secondNumber:secondText});

    }
    else if(this.state.firstNumber !='' && this.state.signe !='' )
    {
      var newTextResult = this.state.firstNumber+'' + this.state.signe+''+numberValue;
      this.setState({calculResult:newTextResult,secondNumber:numberValue});

    }
    else if(this.state.calculResult != '0')
    {
      var newText = this.state.calculResult+'' + numberValue;
      this.setState({calculResult:newText,firstNumber:newText});
    }
    else{
      this.setState({calculResult:numberValue,firstNumber:numberValue});
    }
    
  }
  onButtonClicked(numberValue)
  {
    if(this.state.needReset == true)
    {
        this.setState({ calculResult:'0',needReset:false }, function() {
        this.changeValue(numberValue);
      });
    }
    else
    {
      this.changeValue(numberValue);

    }
    
  }
  onSigneClicked(signeValue)
  {
    if(this.state.firstNumber != '')
    {
      var newText = this.state.firstNumber+''+signeValue+'';
      this.setState({signe:signeValue,calculResult:newText});
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
          <TouchableOpacity style={{borderColor:'grew',borderWidth:2,flex:1}} onPress={() => this.onSigneClicked('÷')}>

            <Text style={{ fontSize: 20, alignSelf: 'center' }}>
            ÷
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
          <TouchableOpacity style={{borderColor:'grew',borderWidth:2,flex:1}} onPress={() => this.onSigneClicked('x')}>

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
          <TouchableOpacity style={{borderColor:'grew',borderWidth:2,flex:1}} onPress={() => this.onSigneClicked('-')}>

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
          <TouchableOpacity style={{borderColor:'grew',borderWidth:2,flex:1}} onPress={() => this.onEqualsClicked()}>

            <Text style={{ fontSize: 20, alignSelf: 'center' }}>
              =
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{borderColor:'grew',borderWidth:2,flex:1}} onPress={() => this.onSigneClicked('+')}>

            <Text style={{ fontSize: 20, alignSelf: 'center' }}>
              +
            </Text>
          </TouchableOpacity>
          
        </View>
        
      </View>

    )
  }
}