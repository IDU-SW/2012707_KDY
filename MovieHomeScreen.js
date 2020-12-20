import React, {useState} from 'react';
import {
    SafeAreaView,
    FlatList,
    Image,
    View,
    Text,
    StatusBar,
    Button
} from 'react-native';

const {movies} = require('./movies');

const ListHeader = () => (
  <FlatList
      ListHeaderComponent = {<Text style={{fontSize: 45, color:"rgb(255, 33, 33)", fontWeight:"bold"}}>DA G V</Text>}
      ListHeaderComponentStyle={{
          height: 75,
          backgroundColor: 'white',
          justifyContent: 'center', alignItems: 'center'}}
    />    
)

const ListMenu = () => (
  <FlatList
      horizontal={true}
      data={["상영영화", "예매", "영화관찾기", "이벤트", "로그인", "공지사항"]}
      keyExtractor={(item, index) => item}
      renderItem={({item, index}) => (
          <View 
            style={{
              height: 45, 
              width:90,
              backgroundColor: 'rgb(255, 33, 33)',
              justifyContent: 'center', 
              alignItems: 'center'}}>
            <Text 
              style={{
                fontSize: 15, 
                color:"white", 
                fontWeight:"bold", 
                marginVertical:5}}>
                  {item}
            </Text>
          </View>)}
    /> 
)

const AdBanner = () => (
  <View style={{justifyContent: 'center',        
      alignItems: 'center'}}>
        <Image
            style={{width: 420, height: 80, resizeMode: 'cover', marginTop:3, marginBottom:3}}
            source={require("./images/ad.png")} />
  </View>
)
const ListFooter = () => (
    <View style={{height:30,
        justifyContent: 'center',        
        alignItems: 'center',
        backgroundColor: 'rgb(255, 33, 33)'}}>
        <Text style={{fontSize: 15, color:"white", fontWeight:"bold"}}>202012707 김 다 영</Text>
    </View>
)

const MovieCell = ({movie}) => (
    <View style={{ height: 300, width: 140, flexDirection: 'column', marginTop :3, marginLeft: 3, backgroundColor:'rgb(250, 233, 233)' }}>
        <Image
            style={{width: 110, height: 160, resizeMode: 'cover', marginLeft:15, marginTop:15}}
            source={movie.image} />
        <View 
            style={{flexDirection: 'column', marginLeft: 12, justifyContent: 'center'}}
        >
          <Text style={{fontSize: 18, marginTop: 3, marginBottom: 3, textAlign: 'center', fontWeight:"bold"}}>{movie.title} </Text>
          <Text style={{fontSize: 12, marginBottom: 3, textAlign: 'center'}}>{movie.rate} </Text>
          <Button title="상세보기" onPress={() => { }} />
        </View>
        
    </View>
)

const MovieList = () => (
    <FlatList
        horizontal={true}
        data={movies}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item, index }) => (
            <MovieCell movie={item}/>
        )}
    />    
)

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ListHeader />
                <ListMenu />
                <MovieList />
                <AdBanner />
                <ListFooter />
            </SafeAreaView>
        </>
    );
};

export default App;