import { SafeAreaView, StyleSheet,Text, Image, View, FlatList, ScrollView, Switch, StatusBar, Appearance ,useColorScheme  } from "react-native";
import { useState } from "react";
import UserIcon from "../components/UserIcon";
import LineLong from "../components/line";
import { MaterialCommunityIcons} from '@expo/vector-icons';




const UserScreen = ({navigation}) => {


  
  let colorScheme = useColorScheme();
  return <SafeAreaView style={[styles.container,]}>
    
    
    
      <View style = {styles.infoContainer}>
        <View style = {styles.avata}>
          <View style = {styles.avataContainer}>
            <Image source={require('../assets/images/logo.png')} style ={styles.avataImage}/>
          </View>
         </View>
        <View style = {styles.textContainer}>
            <Text style = {styles.userName} >Dang Ngoc Son</Text>
            <Text style = {styles.email}>dangngocson2609@gmail.com</Text>
        </View>
      </View>

      <ScrollView style={{marginBottom: 50}}>
      <View style={styles.settingContainer}>
      

        <LineLong children={'Activiti'}/>

        <UserIcon 
          icon='cards-heart-outline' 
          color={'white'} 
          size={25}
          children={"Danh sách phim yêu thích"}
        />

        <UserIcon 
          icon='cart-outline' 
          color={'white'} 
          size={25}
          children={"Lịch sử đơn hàng"}
        />
        
        <UserIcon 
          icon='wallet-outline' 
          color={'white'} 
          size={25}
          children={"Phương thức thanh toán"}
        />

        

        <UserIcon 
          icon='ticket-percent-outline' 
          color={'white'} 
          size={25}
          children={"Voucher của tôi"}
        />

      <LineLong children={'general'}/>

      <UserIcon 
          icon='account-outline' 
          color={'white'} 
          size={25}
          children={"Tài khoản"}
        />

        <UserIcon 
          icon='bell-ring-outline' 
          color={'white'} 
          size={25}
          children={"Thông báo"}
        />

      <View style={{flexDirection: 'row', paddingVertical: 12, marginStart: 36}}>
        <MaterialCommunityIcons
          name='eye-outline'
          size={25}
          color={'white'}
        />
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{
          color: 'white',
          fontWeight: '700',
          fontSize: 15,
          paddingHorizontal: 22,
          justifyContent: "center"}} >{true ? 'Chế độ tối' : 'Chế độ sáng'}</Text>

          <Switch
            trackColor={{ false: 'grey', true: 'yellow' }}
            thumbColor={colorScheme ? 'yellow' : 'grey'}
            
            
          />
          </View>
      </View> 

        <LineLong children={'About'}/>

        <UserIcon 
          icon='help-circle-outline' 
          color={'white'} 
          size={25}
          children={"Trợ giúp"}
        />

        <UserIcon 
          icon='information-outline' 
          color={'white'} 
          size={25}
          children={"Về chúng tôi"}
        />

        <UserIcon 
          icon='logout' 
          color={'white'} 
          size={25}
          children={"Đăng xuất"}
        />

      </View>
      </ScrollView>
  </SafeAreaView>;
};
export default UserScreen;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1E1E1E",
    padding: 0,
    position: "relative",
    flex: 1
  },
  
  textHeader:{
    textAlign: "center",
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    
    
},

avata: {
  flexDirection: 'row',
},

infoContainer:{
  marginBottom: 16,
    flexDirection: 'row',
},

textContainer: {
  marginTop: 36,
  textAlign: 'center',
  justifyContent: 'flex-start',
  marginStart: -12
  

},

  avataContainer: {
    width: 70,
    height: 70,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'white',
    overflow: 'hidden',
    marginHorizontal: 36,
    marginTop: 32
},
  avataImage:{
    width: '100%',
    height: '100%',
  },
  userName: {
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 6,
    fontSize: 15
  },
 email:{
  color: '#A2A2A2',

 },

 accumulationContainer:{
  borderTopWidth: 1,
  borderTopColor: 'white'
 },
 accumulation: {},



 settingContainer: {
  
  flex: 1,
  paddingTop: 12,
  marginEnd: 16
 },

 
});
