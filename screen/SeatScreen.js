import { SafeAreaView, StyleSheet, View,Text, ScrollView, Pressable, TouchableOpacity } from "react-native";
import { useState } from "react";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { moviesData } from "../data/movies";


const LocationScreen = ({navigation, route}) => {

  const id = route.params.id;

  const hehe = moviesData.find((meal) => meal.id === id);

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [rows, setRows] = useState([
    {
        row: 'A',
        seats :[
            {seat: '1' ,selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '2', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '3', selected: false,price: 120000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '4', selected: false,price: 120000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '5', selected: false,price: 120000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '6', selected: false,price: 120000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '7', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '8', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
        ]
    },
    {
        row: 'B',
        seats: [
            {seat: '1', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '2', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '3', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '4', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '5', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '6', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '7', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '8',selected: false, price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
        ]
    },
    {
        row: 'C',
        seats: [
            {seat: '1', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '2', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '3', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '4', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '5', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '6', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '7',selected: false, price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '8',selected: false, price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
        ]
    },
    {
        row: 'D',
        seats: [
            {seat: '1', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '2',selected: false, price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '3',selected: false, price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '4',selected: false, price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '5',selected: false,price: 80000, bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '6',selected: false,price: 80000, bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '7',selected: false,price: 80000, bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '8',selected: false, price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
        ]
    },
    {
        row: 'E',
        seats: [
            {seat: '1', selected: false, price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '2', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '3', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '4', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '5', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '6', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '7', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '8', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
        ]
    },
    {
        row: 'F',
        seats: [
            {seat: '1', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '2', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '3', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '4', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '5', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '6', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '7', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '8', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
        ]
    },
    {
        row: 'G',
        seats: [
            {seat: '1', selected: false, price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '2', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '3', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '4', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '5', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '6', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '7', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            {seat: '8', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
        ]
    },
    {
        row: 'H',
        seats: [
           
          {seat: '1', selected: false,price: 80000, bookingStatus: Boolean(Math.round(Math.random()))},
          {seat: '2', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
          {seat: '3', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
          {seat: '4', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
          {seat: '5', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
          {seat: '6', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
          {seat: '7', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
          {seat: '8', selected: false,price: 80000,bookingStatus: Boolean(Math.round(Math.random()))},
            
        ]
    },
])

const seatNumbers = selectedSeats.map((seat) => seat.row + seat.seat);


const renderSeats = () => {
  return rows.map((row, rowIndex) => {
    return(
      <View 
        
        key={rowIndex.ite} 
        style={{flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 6
        }}>
        <View style = {{ marginHorizontal: 12 }}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>{row.row}: </Text>     
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {row.seats.map((seat, seatIndex) => (
                <Pressable 
                  style={[styles.seat, selectedSeats.some(
                    (selectedSeat) => 
                      selectedSeat.row == row.row && 
                      selectedSeat.seat == seat.seat
                      ) && styles.selectedSeat,
                     seat.bookingStatus == true && styles.bookedSeat,
                      seat.selected == true && styles.myBooked
                      
                    ]}  
                    disabled = {seat.selected == true}
                  onPress={()=> handleSeatPress(row.row, seat.seat)}>
                  <Text >{seat.seat}</Text>
                </Pressable>
              ))}
          </View>
        </ScrollView>
      </View>
    );
  });
};




const handleSeatPress = (row, seat) => {
  const isSelected = selectedSeats.some((selectedSeat) => selectedSeat.row == row && selectedSeat.seat == seat);  //ham some (kiểm tra xem ít nhất một phần tử trong mảng thỏa mãn một điều kiện nào đó. Nó trả về true nếu ít nhất một phần tử thỏa mãn điều kiện, ngược lại trả về false.)
  if(isSelected){
    setSelectedSeats((preState) => 
      preState.filter((selectedSeat) =>
        selectedSeat.row != row || selectedSeat.seat != seat)
      );
  }
  else{
    setSelectedSeats((preState) => [...preState,{row,seat}]); 
  }
};


// selectedSeats lưu các giá trị mình chọn ghế vào một mảng vd 'row': 'E', 'seat': '6'
//Nhan nut thanh toan
const payButtonHandler = () => {
  const updateRows = [...rows];
  selectedSeats.forEach((seat) => {
    const rowIndex = updateRows.findIndex((row) => row.row == seat.row);    // tìm vị trí dòng ví dụ ghế đầu tiên sẽ là 0

    const seatIndex = updateRows[rowIndex].seats.findIndex((s) => s.seat == seat.seat) //s.seat laf seat trong mang đầu : 1,2,3,4,..
    updateRows[rowIndex].seats[seatIndex].selected = true ;
    
    
  });

  setRows(updateRows);
  setSelectedSeats([]);
  
}

return (

  <>
  <SafeAreaView style={styles.rootContainer}>

    <ScrollView style={{marginTop: '5%'}}>
    

    <View style ={{alignItems: 'center'}}>
      <Text style={styles.screenText}>Màn hình</Text>
    </View>
    <View style={styles.screenContainer}>
      
    </View>
    <View>
      {renderSeats()}

      <View style={{backgroundColor: '#D8D8D8', padding:10, marginTop: 25, flexDirection: 'row', alignItems: "center",justifyContent: 'center', gap: 30}}>
        <View>
          <FontAwesome
          style = {{textAlign: 'center', marginBottom: 4}}
          name = 'square' size={24} color= 'gray'/>
          <Text>Ghế đã đặt</Text>
        </View>

        <View>
          <FontAwesome
          style = {{textAlign: 'center', marginBottom: 4}}
          name = 'square' size={24} color= 'blue'/>
          <Text>Ghế bạn chọn</Text>
        </View>

        <View>
          <FontAwesome
          style = {{textAlign: 'center', marginBottom: 4}}
          name = 'square' size={24} color= 'white'/>
          <Text>Ghế trống</Text>
        </View>
      </View>
    </View>
    </ScrollView>




    <View style={styles.bottomContainer}>
      <View style={styles.separateContainer}>
        <View style = {styles.lineContainer}>
          <Text style = {{fontSize: 20, color: 'black', fontWeight: 'bold',}}>{hehe.title}</Text>
          <Text style = {{marginLeft: 16, color: '#FF792E', fontWeight: 'bold', fontSize: 15}}>{hehe.ageRequired}</Text>
        </View>
        <View>
          <Text style = {[styles.textLight, {marginTop: 6}]}>{hehe.language}</Text>
        </View>
      </View>

      
      <View style={styles.separateContainer} >
        <View style = {styles.lineContainer}>
          <Text style = {styles.textLight}>{selectedSeats.length} ghế</Text>
          <Text style = {{marginLeft: 16, color: 'black', fontWeight: 'bold', fontSize: 15}}>{190.000}đ</Text>
        </View>

        <View style={styles.bookButtonContainer}>
          <TouchableOpacity
            onPress={payButtonHandler}>
            <Text style = {styles.bookButtonText}>Đặt vé</Text>
          </TouchableOpacity>
        </View>
      </View>

      
    </View>
  </SafeAreaView>


  {selectedSeats.length > 0 ? (
        <Pressable
          style={{
            backgroundColor: "#FF5524",
            padding: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{fontSize:15,fontWeight:"500", textAlign: 'center'}}>
            {selectedSeats.length} ghế đã chọn {seatNumbers} </Text>
         
        </Pressable>
      ) : (
        <Pressable style={{  }}>
          
        </Pressable>
      )}
  </>
  
  
  
  );
};
export default LocationScreen;


const styles = StyleSheet.create({
  rootContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1E1E1E",
    padding: 0,
    position: "relative",
    flex:1,
    
  },

  pickContainer:{
    marginBottom: 8
  },
  seat: {
    width: 30,
    height: 30,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: 'white',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#919191',
    elevation: 4,
    shadowColor: '#C0C0C0',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.75
  },

  screenText: {
    color: 'white',
    paddingBottom: 8,
    fontSize: 15
  },
  screenContainer: {
    backgroundColor: 'white',
    height: 4,
    borderRadius:8,
      alignItems:'center',
       marginHorizontal: 40,
       elevation: 4,
       shadowColor: 'white',
       shadowOffset: {with: 0, height: 0},
       shadowOpacity: 1,
       marginBottom: 32
  },

  selectedSeat: {
    backgroundColor: '#FFD709',
    borderColor: 'transparent'
  },

  bottomContainer: {
    height: '12%',
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'space-between', 
    flexDirection: 'row',
    width: '100%',
    
  },

  separateContainer: {
    marginHorizontal: '3%',
    textAlign: 'center',
  },

  lineContainer: {
    flexDirection: 'row',  
    alignItems: 'center'
  },
  textLight: {
    fontSize: 15, 
    color: '#999999', 
    fontWeight: '300',
  },

  bookButtonContainer: {
    borderRadius: 8, 
    backgroundColor: '#FF3232', 
    padding: 8,
    marginTop: 5
  },

  bookButtonText: {
    textAlign: 'center',
     color: 'white', 
     fontWeight:'bold', 
     fontSize: 15
  },

  bookedSeat: {
    backgroundColor: 'gray',
    borderColor: 'transparent'
  },

  myBooked: {
    backgroundColor: 'blue',
    borderColor: 'transparent'
  }
});
