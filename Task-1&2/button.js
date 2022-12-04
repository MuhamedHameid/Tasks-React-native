import { View , Text } from "react-native";
import React from "react";
import styles from "./Styles"

function Butt({bgColor ,title}) {

    return (
        <View  style={[styles.main,
        {
            backgroundColor:bgColor,
        }
        ]}>
            <Text style={{color:'white',fontWeight:'bold',}}>{title}</Text>
          
        </View>

        
    );
} ;

export default Butt ;