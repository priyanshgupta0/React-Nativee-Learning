// React Native Counter Example using Hooks!

import React, { useState, useEffect } from 'react';
import { View, FlatList, Modal, ScrollView, Text, Button, StyleSheet, ActivityIndicator, Dimensions, Switch, TextInput, SafeAreaView, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Picker } from '@react-native-picker/picker';
let mobileW = Dimensions.get('window').width;
const dummyArray = [
  { id: '1', value: 'A' },
  { id: '2', value: 'B' },
  { id: '3', value: 'C' },
  { id: '4', value: 'D' },
  { id: '5', value: 'E' },
  { id: '6', value: 'F' },
  { id: '7', value: 'G' },
  { id: '8', value: 'H' },
  { id: '9', value: 'I' }
];

export default App = () => {
  // const [count, setCount] = useState(0);
  // const [valx, setValx] = useState(0);
  // const [valy, setValy] = useState(100000000000);
  const [FName, setFName] = useState('');
  const [FResult, setFResult] = useState('');
  const [LName, setLName] = useState('');
  const [LResult, setLResult] = useState('');
  const [Email, setEmail] = useState('');
  const [EResult, setEResult] = useState('');
  const [Out, setOut] = useState(false);
  const [Output, setOutput] = useState([
    { id: '1', value: 'A' },
    { id: '2', value: 'B' },
    { id: '3', value: 'C' },
    { id: '4', value: 'D' },
    { id: '5', value: 'E' },
    { id: '6', value: 'F' },
    { id: '7', value: 'G' },
    { id: '8', value: 'H' },
    { id: '9', value: 'I' }
  ]);
  const handleSubmit = () => {
    var fName = FName;
    var lName = LName;
    var email = Email;
    var out = Out;
    var regx = /^([a-z A-Z 0-9 \. -]+)@([a-z A-Z 0-9 -]+).([a-z]{2,20})$/;
    if (fName == '') {
      setFResult('* First name can not be empty');
      setOut(false);
    } else {
      setFResult('');
      setOut(true);
    }
    if (lName == '') {
      setLResult('* Last name can not be empty');
      setOut(false);
    } else {
      setLResult('');
      setOut(true);
    }
    if (email.match(regx)) {
      setEResult('');
      setOut(true);
    } else if (email == '') {
      setEResult('* E-mail can not be empty');
      setOut(false);
    } else {
      setEResult('* Invalid E-mail ID');
      setOut(false);
    }
    if (out) {
      setOutput([{ id: '1', value: fName },
      { id: '2', value: lName },
      { id: '3', value: email }]);
    }
    // write this next
  }
  // useEffect(() => {
  //   const myInterval = setInterval(() => {
  //     setValx((val) => val + 1);
  //     setValy((val) => val - 1);
  //   }, 1);
  //   return () => clearInterval(myInterval);
  // }, []);
  const [showModal, setShowModal] = useState(false);
  const onPressLearnMore = () => {
    //For generating alert on buttton click
    alert('Hello How are you?');
  }
  const onPress = (msg) => {
    //For generating alert on buttton click
    alert('Alert for: ' + msg);
  };
  const [choosenLabel, setChoosenLabel] = useState('Native');
  const [choosenIndex, setChoosenIndex] = useState('2');
  const [switchValue, setSwitchValue] = useState(false);
  const toggleSwitch = (value) => {
    //To handle switch toggle
    setSwitchValue(value);
    //State changes according to switch
  };

  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const [listItems, setListItems] = useState(dummyArray);
  const ItemView = ({ item }) => {
    return (
      // FlatList Item
      <View>
        <Text
          style={{
            padding: 10,
            fontSize: 18,
            height: 44,
            color: 'black'
          }}
          onPress={() => getItem(item)}>
          {item.value}
        </Text>
      </View>
    );
  };
  const ItemSeparatorView = () => {
    return (
      // FlatList Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8'
        }}
      />
    );
  };
  const getItem = (item) => {
    //Function for click on an item
    alert('Id: ' + item.id + ' Value: ' + item.value);
  };
  return (
    // <View style={styles.container}>
    //   <Text style={[
    //     styles.Textstyle
    //   ]}>You clicked {count} times</Text>
    //   <View style={{
    //     marginTop: Dimensions.get("window").width * .05, flexDirection: 'row',
    //   }}>
    //     <Text style={[
    //       styles.Textstyle
    //     ]}>You clicked {count} times</Text>
    //     <Text style={[
    //       styles.Textstyle
    //     ]}>You clicked {count} times</Text></View>
    //   <Button
    //     onPress={() => setCount(count + 1)}
    //     title="Click me!"
    //   />


    // </View>
    // <View style={{
    //   backgroundColor: 'white', flex: 1, alignItems: 'center', justifyContent: 'center',
    // }}>
    //   <Text style={[
    //     styles.Textstyle
    //   ]}>All the very best</Text>
    //   <Text style={[
    //     styles.Textstyle
    //   ]}>This is your first App.</Text>
    //   <Text style={[
    //     styles.Textstyle
    //   ]}>Enjoy react native coding.</Text>
    // </View>
    // <View style={[styles.container]}>
    //   {/*
    //       Text Component will be re-render every time,
    //       when state changes.
    //      */}
    //   <Text style={[
    //     styles.Textstyle
    //   ]}>
    //     {/* valx will change in every second*/}
    //     {'Hello I am value x. I am increasing ' + valx}
    //   </Text>

    //   <Text style={[
    //     styles.Textstyle
    //   ]}>
    //     {'Hello I am value y. I am decreasing ' + valy}
    //   </Text>
    // </View>

    // <SafeAreaView style={{ flex: 1 }}>
    //   <View style={styles.container}>
    // <Text>Insert any text in below input</Text>
    // <TextInput
    //   value={Name}
    //   onChangeText={(Name) => setName(Name)}
    //   placeholder={'Enter Your Name'}
    //   style={styles.input}
    // />
    //     <Text style={{ color: 'cyan' }}>Hello {Name}</Text>
    //   </View>
    // </SafeAreaView>

    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{
          flex: 1,
          paddingTop: 40,
          backgroundColor: '#ecf0f1',
        }}>
          <Text style={[styles.formdata]}>First Name</Text>
          <TextInput
            value={FName}
            onChangeText={(FName) => setFName(FName)}
            placeholder={'Enter Your First Name'}
            style={[styles.input]}
          />
          <Text style={[styles.formerror]}>{FResult}</Text>
          <Text style={[styles.formdata]}>Last Name</Text>
          <TextInput
            value={LName}
            onChangeText={(LName) => setLName(LName)}
            placeholder={'Enter Your Last Name'}
            style={[styles.input]}
          />
          <Text style={[styles.formerror]}>{LResult}</Text>
          <Text style={[styles.formdata]}>Email</Text>
          <TextInput
            value={Email}
            onChangeText={(Email) => setEmail(Email)}
            placeholder={'Enter Your Email'}
            style={[styles.input]}
          />
          <Text style={[styles.formerror]}>{EResult}</Text>
          <TouchableHighlight onPress={handleSubmit}
            style={[styles.subbutton]}>
            <Text>Submit</Text>
          </TouchableHighlight>
          <FlatList
            data={Output}
            //data defined in constructor
            ItemSeparatorComponent={ItemSeparatorView}
            //Item Separator View
            renderItem={ItemView}
            keyExtractor={(item, index) => index.toString()}
          />
          <Modal
            animationType={'slide'}
            transparent={false}
            visible={showModal}
            onRequestClose={() => {
              console.log('Modal has been closed.');
            }}>
            {/*All views of Modal*/}
            {/*Animation can be slide, slide, none*/}
            <View style={styles.modal}>
              <Text style={styles.text}>Modal is open!</Text>
              <Button
                title="Click To Close Modal"
                onPress={() => {
                  setShowModal(!showModal);
                }}
              />
            </View>
          </Modal>
          {/*Updating the state to make Modal Visible*/}
          <Button
            title="Click To Open Modal"
            onPress={() => {
              setShowModal(!showModal);
            }}
          />
          <Switch
            style={{ marginTop: 30, alignSelf: 'center' }}
            onValueChange={toggleSwitch}
            value={switchValue}
          />
          <Text style={[styles.Textstyle]}>
            {switchValue ? 'Switch is ON' : 'Switch is OFF'}
          </Text>
          <Picker style={{
            backgroundColor: 'blue',
            margin: Dimensions.get("window").width * .1,
          }}
            selectedValue={choosenLabel}
            onValueChange={(itemValue, itemIndex) => {
              setChoosenLabel(itemValue);
              setChoosenIndex(itemIndex);
            }}>
            <Picker.Item label="This" value="This" />
            <Picker.Item label="is" value="is" />
            <Picker.Item label="Picker" value="Picker" />
            <Picker.Item label="in" value="in" />
            <Picker.Item label="React" value="React" />
            <Picker.Item label="Native" value="Native" />
          </Picker>
          <Text style={styles.Textstyle}>
            Selected Value: {choosenLabel}
          </Text>
          <Text style={styles.Textstyle}>
            Selected Index: {choosenIndex}
          </Text>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png',
            }}
            style={{ width: Dimensions.get("window").width * .8, height: Dimensions.get("window").width * .8, margin: Dimensions.get("window").width * .1 }}
          />
          <Image
            style={{ width: Dimensions.get("window").width * .8, height: Dimensions.get("window").width * .8, margin: Dimensions.get("window").width * .1 }}
            source={{
              uri:
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
            }}
          />
          <Image
            source={require('./asset/image.png')}
            style={{ width: Dimensions.get("window").width * .8, height: Dimensions.get("window").width * .8, margin: Dimensions.get("window").width * .1 }}
          />
          <Text>Button Example</Text>
          {/* Button whith handler function named onPressLearnMore*/}
          <TouchableOpacity style={{
            backgroundColor: 'red',
            width: Dimensions.get("window").width * .3,
            alignSelf: 'center',
            padding: 9,
            marginBottom: 10,
            borderRadius: 5,
            height: Dimensions.get("window").width * .1
          }} onPress={onPressLearnMore}>
            <Text style={{
              textAlign: 'center',
              color: 'black',
              fontWeight: 'bold',

            }}>Click Here</Text>
          </TouchableOpacity>
          <TouchableHighlight
            style={{
              backgroundColor: 'red',
              width: Dimensions.get("window").width * .4,
              alignSelf: 'center',
              padding: 9,
              marginBottom: 10,
              borderRadius: 5,
              height: Dimensions.get("window").width * .1
            }}
            onPress={
              () => onPress('TouchableHighlight Pressed')
            }>
            <Text style={{
              textAlign: 'center',
              color: 'black',
              fontWeight: 'bold',

            }}>
              Touchable Highlight
            </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </SafeAreaView>

    // <SafeAreaView style={{ flex: 1 }}>
    //   <View style={styles.container}>
    //     {loading ? (
    //       <ActivityIndicator
    //         //visibility of Overlay Loading Spinner
    //         visible={loading}
    //         //Text with the Spinner
    //         textContent={'Loading...'}
    //         //Text style of the Spinner Text
    //         textStyle={styles.spinnerTextStyle}
    //       />
    //     ) : (
    //       <>
    //         <Text style={{ textAlign: 'center', fontSize: 20 }}>
    //           React Native ActivityIndicator
    //         </Text>
    //         <Button
    //           title="Start Loading"
    //           onPress={startLoading}>
    //         </Button>
    //       </>
    //     )}
    //   </View>
    // </SafeAreaView>

  );
};

// React Native Styles
const styles = StyleSheet.create({
  formerror: {
    paddingLeft: mobileW * .05,
    color: 'red',
    fontWeight: '500',
    textAlign: 'left',
    justifyContent: 'center',
    fontSize: mobileW * .03,
  },
  subbutton: {
    backgroundColor: 'red',
    textAlign: 'center',
    width: Dimensions.get("window").width * .2,
    alignSelf: 'center',
    padding: 9,
    marginBottom: 10,
    borderRadius: 5,
    height: Dimensions.get("window").width * .1
  },
  formdata: {
    paddingLeft: mobileW * .05,
    color: 'black',
    fontWeight: '600',
    textAlign: 'left',
    justifyContent: 'center',
    fontSize: mobileW * .05,
  },
  Textstyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },
  // container: {
  //   backgroundColor: 'white',
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   marginTop: 20,
  //   backgroundColor: 'black',
  // },
  MainContainer: {
    flex: 1,
    margin: 10

  },
  TextStyle: {
    fontSize: 25,
    textAlign: 'center'
  },
  input: {
    marginLeft: mobileW * .05,
    width: 250,
    height: 44,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: 'grey'
  },
});

