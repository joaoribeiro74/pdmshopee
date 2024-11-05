import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, Pressable, Switch } from 'react-native'
import React, { useState } from 'react'
import PriceTag from './PriceTag';
import { DEFAULT_GAP } from '@/constants/globalStyles';
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';

type CheckoutButtonProps = {
  onContinuePress: () => void;
  onCodePress: () => void;
};

export default function CheckoutFooter({ onContinuePress, onCodePress }: CheckoutButtonProps) {
  const [checked, setChecked] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.sectionOne}>
        <Image source={require('@/assets/images/cupom.png')} style={styles.icon} />
        <Text style={styles.text}>Cupom Shopee</Text>
        <TouchableOpacity style={styles.space} onPress={onCodePress}>
          <Text style={styles.codeText}>Selecione ou insira o código</Text>
          <AntDesign name="right" size={15} color="grey" />
        </TouchableOpacity>
      </View>
      <View style={styles.separator} />

      <View style={styles.sectionTwo}>
        <Image source={require('@/assets/images/coin.png')} style={styles.icon} />
        <Text style={styles.text}>Saldo de moedas insuficiente</Text>
        <Switch style={{ marginLeft: 'auto', marginRight: 25 }}
          trackColor={{false: '#767577', true: '#FF4C2C'}}
          thumbColor={isEnabled ? '#767577' : '#f4f3f4'}
          ios_backgroundColor="#767577"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.separator} />

      <View style={styles.checkboxContainer}>
        <View style={styles.checkbox}>
          <Pressable 
              role='checkbox'
              aria-checked={checked}
              style={[styles.checkboxBase, checked && styles.checkboxChecked]}
              onPress={() => setChecked(!checked)}>
              {checked && <Ionicons name="checkmark" size={15} color="white" />}
          </Pressable>
          <Text style={styles.textCheckbox}>Tudo</Text>
        </View>

        <View style={styles.sectionPrice}>
          <Text style={styles.textPrice}>Sub-total</Text>
          <PriceTag price={166}/>
          <TouchableOpacity style={styles.button} onPress={onContinuePress}>
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  sectionOne: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 15,
    left: 15,
  },
  sectionTwo: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 15,
    left: 15,
  },
  icon: {
    width: 20,
    height: 20,
  },
  text: {
    fontSize: 14,
    left: 15,
  },
  textCheckbox: {
    fontSize: 14,
    left: 30,
    color: 'grey',
  },
  textPrice: {
    fontSize: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionPrice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    height: 1, 
    backgroundColor: '#ddd', 
    width: '110%', 
  },
  price: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FF4C2C',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginLeft: 10,
  },
  buttonText: {
    color: 'white',
  },
  checkboxBase: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'grey',
    backgroundColor: 'transparent',
    left: 15,
  },
  checkboxChecked: {
    borderColor: '#FF4C2C',
    backgroundColor: '#FF4C2C',
  },
  space: {
    marginLeft: 'auto',
    right: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  codeText: {
    fontSize: 14,
    color: 'grey',
    right: 2,
  },
});