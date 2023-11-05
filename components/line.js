import {View, Text, StyleSheet} from 'react-native'

function LineLong({children}) {
    return(
        <View style ={styles.container}>
            <Text style={{color: 'white', opacity: 0.45}}>{children}</Text>
            <Text style={{borderColor: 'white', borderWidth: 0.5, borderStyle: 'dashed', height: 1, margin: 10, width: '90%', opacity: 0.45}}/>
        </View>
    )
}

export default LineLong;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20
    },
   
})