import { StyleSheet } from "react-native";
import { FONTS } from "../../theme";



export const styles = StyleSheet.create({
    button: {
        height: 55,
        width: "100%",
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
        
        
    },
    icon: {
        marginRight:12,
    },
    
    title: {
        fontFamily:FONTS.BOLD,   
        fontSize:16,
    }
})  