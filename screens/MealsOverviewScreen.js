import { FlatList, StyleSheet, Text, View } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = () => {
  const route = useRoute();
  const catId = route.params.categoryId;
  const navigation = useNavigation();

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [navigation, catId]);

  const displayedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(catId) >= 0;
  });
  const renderMealItem = (itemData) => {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
