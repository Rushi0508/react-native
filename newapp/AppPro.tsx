import React from "react";

import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native'

function AppPro():JSX.Element{
    const isDarkMode = useColorScheme()==='dark'
    return(
        <View style={styles.container}>
            <Text style={[isDarkMode?styles.whiteText:styles.darkText, styles.fontStyles]}>
                Hello world
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    whiteText:{
        color: '#FFFFFF',
    },
    darkText:{
        color: '#000000',
    },
    fontStyles:{
        fontSize: 30
    }
})

export default AppPro;