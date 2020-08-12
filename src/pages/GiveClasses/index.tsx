import React from "react";
import { View, ImageBackground, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import giveClassesBgImage from "../../../assets/images/give-classes-background.png";

import styles from "./styles";

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  function handleGoBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={giveClassesBgImage}
        style={styles.content}
        resizeMode="contain"
      >
        <Text style={styles.title}>Quer ser um Proffy</Text>
        <Text style={styles.description}>
          Pra começar cadastre-se como professor em nossa plataforma web!
        </Text>
        <RectButton style={styles.okButton} onPress={handleGoBack}>
          <Text style={styles.okButtonText}>Tudo bem...</Text>
        </RectButton>
      </ImageBackground>
    </View>
  );
};

export default GiveClasses;
