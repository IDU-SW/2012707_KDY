import React, {useState} from 'react';
import {
    SafeAreaView,
    FlatList,
    Image,
    View,
    Text,
    StatusBar,
    Button,
    RadioButton
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
            영화 예매
        </Text>
    </View>
)


const ListMovie = () => (
    <View style={{ height: 300, width: 140, flexDirection: 'column', marginTop :3, marginLeft: 3, backgroundColor:'rgb(250, 233, 233)' }}>
        <Image
            style={{width: 110, height: 160, resizeMode: 'cover', marginLeft:15, marginTop:5}}
            source={movie.image} />
        <View 
            style={{flexDirection: 'column', marginLeft: 12, justifyContent: 'center'}}
        >
          <Text style={{fontSize: 18, marginTop: 3, marginBottom: 3, textAlign: 'center', fontWeight:"bold"}}>{movie.title} </Text>
          <Text style={{fontSize: 12, marginBottom: 3}}>{movie.year}, {movie.rate} </Text>
          <Text style={{fontSize: 10, marginBottom: 3}}>{movie.stars} </Text>
        </View>
        
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
    <View style={{ height: 80, width: 140, flexDirection: 'column', marginTop :3, marginLeft: 3, backgroundColor:'rgb(250, 233, 233)' }}>
        <View 
            style={{flexDirection: 'column', marginLeft: 12, justifyContent: 'center'}}
        >
          <Text style={{fontSize: 15, marginTop: 3, marginBottom: 3, textAlign: 'center', fontWeight:"bold"}}>{movie.title} </Text>
          <Button title="선택하기" onPress={() => {console.log('버튼 클릭')}} />
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
                <ListFooter />
            </SafeAreaView>
        </>
    );
};

export default App;