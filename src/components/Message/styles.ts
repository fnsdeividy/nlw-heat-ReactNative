import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        
        marginBottom:16,
    },
    message: {
        
        fontSize: 15,
        fontFamily:FONTS.REGULAR,
        color: COLORS.WHITE,
        lineHeight:20,
        marginBottom:12,
        

    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        alignItems:'center',
        marginBottom:25,
        
    
    },
    hr:{
        flexDirection: 'row',
        
        borderBottomColor: COLORS.GRAY_QUATERNARY,
        borderBottomWidth: 1,
        marginBottom:25,
    },
    userName:{
        fontSize: 15,
        fontFamily:FONTS.REGULAR,
        color: COLORS.WHITE,
        marginLeft:16,
    }
})