import { View, Text, Alert } from "react-native";
import React from "react";
import FullScreen from "@/components/containers/FullScreen";
import HeaderHidden from "@/components/headers/HeaderHidden";
import HeaderWithTitle from "@/components/headers/HeaderWithTitle";
import PriceTag from "@/components/checkout/PriceTag";
import CheckoutButton from "@/components/checkout/CheckoutButton";
import CardFooter from "@/components/containers/CardFooter";
import ContinueButton from "@/components/checkout/CheckoutFooter";
import CheckoutFooter from "@/components/checkout/CheckoutFooter";

export default function checkout() {
  const handleIconPress = () => {
    Alert.alert("Ícone clicado!");
  };

  const handleEditPress = () => {
    Alert.alert("Editar clicado!");
  };

  const handleContinuePress = () => {
    Alert.alert("Continuar clicado!");
  };

  const handleCodePress = () => {
    Alert.alert("Selecionar ou inserir código clicado!");
  };

  return (
    <FullScreen center>
      {/* <HeaderHidden /> */}
      <HeaderWithTitle
        title="Carrinho"
        Icon={require('@/assets/images/chat.png')}
        Edit="Editar"
        onIconPress={handleIconPress}
        onEditPress={handleEditPress}
      />

      <CardFooter>
        <CheckoutFooter onContinuePress={handleContinuePress} onCodePress={handleCodePress}/>
      </CardFooter>
       
    </FullScreen>
  );
}
