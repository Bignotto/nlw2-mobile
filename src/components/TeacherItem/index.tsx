import React, { useState } from "react";
import { View, Image, Text, Linking, AsyncStorage } from "react-native";

import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";

import favoriteIcon from "../../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../../assets/images/icons/whatsapp.png";

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  function handleWhatsappContact() {
    Linking.openURL(`whatsapp://send?phone=+55${teacher.whatsapp}`);
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem("favorites");

    let favoritesArray = [];
    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited) {
      const favIndex = favoritesArray.findIndex((item: Teacher) => {
        return (item.id = teacher.id);
      });
      favoritesArray.splice(favIndex, 1);
      setIsFavorited(false);
    } else {
      setIsFavorited(true);
      favoritesArray.push(teacher);
      await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray));
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri: teacher.avatar,
          }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>
      <Text style={styles.bio}>{teacher.bio}</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {"    "}
          <Text style={styles.priceValue}>{teacher.cost}</Text>
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleToggleFavorite}
            style={[styles.favoriteButton, isFavorited ? styles.favorite : {}]}
          >
            {isFavorited ? (
              <Image source={unfavoriteIcon} />
            ) : (
              <Image source={favoriteIcon} />
            )}
          </RectButton>
          <RectButton
            style={styles.contactButton}
            onPress={handleWhatsappContact}
          >
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em Contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
