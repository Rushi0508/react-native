import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Image
                source={{
                    uri: 'https://lh3.googleusercontent.com/p/AF1QipNNCNn4A9ujrP0drFeNWF0ewQJllcIA7CuLUEmT=s1360-w1360-h1020'
                }}
                style={styles.cardImage}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Hawa Mahal</Text>
                <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
                <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem amet quas repudiandae autem rem ipsum dolores esse, aliquam est. Quod!</Text>
                <Text style={styles.cardFooter}>10 mins away</Text>
            </View>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Image
                source={{
                    uri: 'https://lh3.googleusercontent.com/p/AF1QipNNCNn4A9ujrP0drFeNWF0ewQJllcIA7CuLUEmT=s1360-w1360-h1020'
                }}
                style={styles.cardImage}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Hawa Mahal</Text>
                <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
                <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem amet quas repudiandae autem rem ipsum dolores esse, aliquam est. Quod!</Text>
                <Text style={styles.cardFooter}>10 mins away</Text>
            </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 10
    },
    container:{
        padding: 5,
        flex: 1,
        alignItems: "center"
    },
    card:{
        width: 350,
        height: 350,
        borderRadius: 6,
        margin: 5
    },
    cardElevated:{
        backgroundColor: '#36454F',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
    },
    cardImage:{
        height: 180,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        marginBottom: 5
    },
    cardBody:{
        paddingHorizontal: 10
    },
    cardTitle:{
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardLabel:{
        color: "#FFFFFF",
        fontSize: 14,
        marginBottom: 6
    },
    cardDescription:{
        color: "#CAD5E2",
        fontSize: 12,
        marginTop: 6,
        marginBottom: 12
    },
    cardFooter:{
        color: "#FFFFFF",
        textAlign: "right"
    }
})