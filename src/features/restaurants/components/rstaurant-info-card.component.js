import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name ="Som Restaurant",
        icon,
        photos =["https://image.ajunews.com/content/image/2018/07/25/20180725142544658121.jpg"],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant
    return <>
    <Text>RestaurantInfo</Text>
    <Text>{name}</Text>
    <Card elevation={5} style={styles.card}>
        <Card.Cover key={name} style={styles.cover} source={{uri: photos[0]}}/>
        <Text style={styles.title}>{name}</Text>
    </Card>
    </>
}

const styles = StyleSheet.create({
    card:{ backgroundColor: 'white' },
    cover:{ padding: 20, backgroundColor: 'white' },
    title:{ padding: 16 }
})