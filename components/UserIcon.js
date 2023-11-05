import { StyleSheet,  Pressable, View, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons , MaterialIcons} from '@expo/vector-icons';



function UserIcon({ icon, color, onPress, size, children }) {
  return (
    
    <Pressable style = {styles.container}>
      
        
      <View>
        <MaterialCommunityIcons name={icon} size={size} color={color} />
      </View>

      <View style={{flex: 1}}>
        <Text style={styles.text}>{children}</Text>
      </View>

      <View>
        <MaterialIcons name={"keyboard-arrow-right"} color={'white'} size={25}/>
      </View>
    
    
    </Pressable>
   
  );
}
export default UserIcon;
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingVertical: 12,
      marginStart: 36,
    },

    

    text: {
      
      color: 'white',
      fontWeight: '700',
      fontSize: 15,
      paddingHorizontal: 22,
      justifyContent: "center"
    }
});