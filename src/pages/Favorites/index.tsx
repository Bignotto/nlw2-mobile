import React, { useState } from "react";
import { View, AsyncStorage } from "react-native";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import { ScrollView } from "react-native-gesture-handler";
import { useFocusEffect } from "@react-navigation/native";

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([]);

  async function loadFavorites() {
    await AsyncStorage.getItem("favorites").then(response => {
      if (response) {
        const favTeachers = JSON.parse(response);
        setFavorites(favTeachers);
      }
    });
  }

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );

  return (
    <View style={styles.container}>
      <PageHeader title="Proffys do coração!" />
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((teacher: Teacher) => (
          <TeacherItem teacher={teacher} key={teacher.id} favorited />
        ))}
      </ScrollView>
    </View>
  );
};

export default Favorites;
