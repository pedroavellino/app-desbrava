import { Text, View } from "react-native";
import React from "react";
import { colors } from "../../styles/colors";
import AppHeader from "../../components/AppHeader";

const AdventureForm = () => {
  return (
    <>
      <AppHeader title="Adicionar aventura" />
      <View>
        <Text style={{ color: colors.onSurface }}>Adcionar Aventura</Text>
      </View>
    </>
  )
}

export default AdventureForm;