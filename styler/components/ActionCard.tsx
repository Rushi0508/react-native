import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink);
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <View style={styles.headingContainer}>
                <Text style={styles.headerText}>
                    OAuth in NodeJS using passport.js
                </Text>
            </View>
            <Image
                source={{
                    uri: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*rjfYt9hcywbAvu7mbXQxJA.png'
                }}
                style={styles.cardImage}
            />
            <View style={styles.bodyContainer}>
                <Text numberOfLines={3}>
                    In this article I will be mentioning the steps to authenticate your website using Google Authentication using passport.js package. Follow the futher steps to implement it.
                </Text>
            </View>
            <View style={styles.footerContainer}>
                <TouchableOpacity
                    onPress={()=>openWebsite('https://medium.com/@rushigandhi14/google-authentication-with-node-and-express-using-passport-js-54cf778bcf66')}
                >
                    <Text style={styles.socialLinks}>Read More</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>openWebsite('https://medium.com/@rushigandhi14/')}
                >
                    <Text  style={styles.socialLinks}>Follow Me</Text>
                </TouchableOpacity>
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
        height: 360,
        borderRadius: 6,
        margin: 5
    },
    cardElevated:{
        backgroundColor: '#F5F5F5',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
    },
    headingContainer:{
        height: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    headerText:{
        color: "#000",
        fontWeight:"bold",
        fontSize: 16
    },
    cardImage:{
        height: 180,
    },
    bodyContainer:{
        padding: 10,
    },
    footerContainer:{
        padding: 8,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    socialLinks:{
        fontSize: 15,
        backgroundColor: "#36454F",
        color: "#FFF",
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderRadius: 6,
        elevation: 3
    }
})