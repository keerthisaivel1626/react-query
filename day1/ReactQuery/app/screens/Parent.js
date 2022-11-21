import {View, Text, ActivityIndicator, Button, ScrollView} from 'react-native';
import React from 'react';
import {useQuery} from 'react-query';
import axios from 'axios';
const fetchApi=()=>{
 return axios.get('https://jsonplaceholder.typicode.com/posts');
}
const Parent = ({navigation}) => {
  const {isLoading, data,isError,error} = useQuery('Home', fetchApi);

  return (
    <ScrollView style={{flex: 1}}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : isError ? (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>{error.message}</Text>
        </View>
      ) : (
        <View>
          {data?.data.map(datum => {
            return (
              <View key={datum.id}>
                <Text>{datum.title}</Text>
              </View>
            );
          })}
        </View>
      )}
      <Button title="Go back" onPress={() => navigation.navigate('Home')} />
    </ScrollView>
  );
};

export default Parent;
