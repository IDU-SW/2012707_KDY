import React, {useState} from 'react';
import {
    SafeAreaView,
    FlatList,
    Image,
    View,
    Text,
    StatusBar
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
    <View 
        style={{
            height: 45, 
            width:'100%',
            backgroundColor: 'rgb(255, 33, 33)',
            justifyContent: 'center', 
            alignItems: 'center'}}>
        <Text 
            style={{
                fontSize: 15, 
                color:"white", 
                fontWeight:"bold", 
                marginVertical:5}}>
            영화 상세
        </Text>
    </View>
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
        <Text style={{fontSize: 15, color:"white", fontWeight:"bold"}}>202012707 김 다 영 </Text>
    </View>
)

const MovieCell = ({movie}) => (
    <View style={{ height: 210, width: '100%', flexDirection: 'row', marginTop :3, marginLeft: 3, backgroundColor:'rgb(250, 233, 233)' }}>
        <Image
            style={{width: 130, height: 200, resizeMode: 'cover', marginLeft:10, marginTop:5}}
            source={movie.image} />
        <View 
            style={{flexDirection: 'column', marginLeft: 12, justifyContent: 'center'}}
        >
          <Text style={{fontSize: 23, marginTop: 3, marginBottom: 3, fontWeight:"bold"}}>{movie.title} </Text>
          <Text style={{fontSize: 18, marginBottom: 3}}>{movie.year}, {movie.rate} </Text>
          <Text style={{fontSize: 15, marginBottom: 3}}>{movie.genre} </Text>
          <Text style={{fontSize: 15, marginBottom: 3}}>{movie.stars} </Text>
        </View>
        
    </View>
)

const MovieList = () => (
    <FlatList
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