import React from "react";
import { View, Image, Text } from "react-native";

import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";

import favoriteIcon from "../../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../../assets/images/icons/whatsapp.png";

const TeacherItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://avatars0.githubusercontent.com/u/2911353?s=460&v=4",
          }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Thiago Bignotto</Text>
          <Text style={styles.subject}>Programming</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        Mestre em escrever código!
        {"\n\n"}
        Apaixonado por programação desde criancinha, cresceu codando, vive
        codando e codará para todo o sempre! Aproveite seu imenso conhecimento!
      </Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {"    "}
          <Text style={styles.priceValue}>120</Text>
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorite]}>
            {/* <Image source={favoriteIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>
          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em Contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
