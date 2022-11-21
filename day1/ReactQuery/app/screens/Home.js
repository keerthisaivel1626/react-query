import {View, Text, ActivityIndicator, Button} from 'react-native';

import React from 'react';
import axios from 'axios';
const Home = ({navigation}) => {
  const [postData, setPostData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const getPost = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setPostData(res.data);
        setLoading(true);
      })
      .catch(e => {
        console.log('e=>', e);
        setError(e.message);
        setLoading(false);
      });
  };
  React.useEffect(() => {
    getPost();
  }, []);
  return (
    <View style={{flex: 1}}>
      {isLoading && postData.length !== 0 && error.length !== 0 ? (
        <View style={{flex: 1}}>
          {postData.map(item => {
            return (
              <View key={item.id}>
                <Text>data</Text>
                <Text>{item.title}</Text>
                <Text>{item.author}</Text>
              </View>
            );
          })}
        </View>
      ) : error ? (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>{error}</Text>
        </View>
      ) : (
        <ActivityIndicator size="large" color="#00ff00" />
      )}
      <Button
        title="React Query"
        onPress={() => navigation.navigate('Parent')}
      />
    </View>
  );
};

export default Home;
