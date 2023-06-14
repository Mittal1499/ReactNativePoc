import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
// import axios from 'axios';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export default function SkeletonScreen() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [imageURL, setImageURL] = useState([]);
  const [brand, setBrand] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Alexa',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Chinky',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Minky',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d73',
      name: 'Dinky',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d74',
      name: 'Kinky',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d75',
      name: 'Chikku',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d726',
      name: 'Mikku',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d729',
      name: 'Tikku',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d720',
      name: 'Rikku',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7299',
      name: 'Sikku',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7200',
      name: 'Kikku',
    },
  ];

  useEffect(() => {
    fetchApiData();
  }, []);

  const fetchApiData = async () => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())

      .then(data => {
        console.log('Received data--->', data);
        setData(data);
        setImageURL(data.images);
        setBrand(data.brand);
        // console.log('Brand iss------>', data.brand);
        setTitle(data.title);
        setCategory(data.category);
        setDescription(data.description);
        setLoading(false);
      })
      .catch(error => console.error(error));
  };

  const renderItem = ({item, id}) => {
    return (
      <View>
        {loading || !data ? (
          <>
            <View
              style={{
                width: '100%',
                height: 80,
                marginVertical: '1%',
                marginLeft: '1%',
                marginRight: '1%',
                justifyContent: 'center',
              }}>
              <View style={{flexDirection: 'row', height: 80, width: '100%'}}>
                <ShimmerPlaceHolder
                  style={{
                    height: 70,
                    width: 70,
                    borderRadius: 50,
                    marginVertical: 10,
                    marginHorizontal: 10,
                  }}
                  shimmerColors={['#564d4d', '#8e8e8e', '#564d4d']}
                />
                <View style={{flexDirection: 'column'}}>
                  <ShimmerPlaceHolder
                    style={{
                      height: 25,
                      width: 200,
                      marginVertical: 10,
                      marginHorizontal: 10,
                    }}
                    shimmerColors={['#564d4d', '#8e8e8e', '#564d4d']}
                  />
                  <ShimmerPlaceHolder
                    style={{
                      height: 25,
                      width: 200,
                      marginHorizontal: 10,
                    }}
                    shimmerColors={['#564d4d', '#8e8e8e', '#564d4d']}
                  />
                </View>
              </View>
            </View>
          </>
        ) : (
          <>
            <View
              style={{
                width: '100%',
                height: 80,
                marginVertical: '1%',
                marginLeft: '1%',
                marginRight: '1%',
                justifyContent: 'center',
                //backgroundColor: 'red',
                flexDirection: 'row',
                borderBottomWidth: 2,
              }}>
              <Image
                key={id}
                // source={{uri: item.imageURL[0]}}
                source={require('../assets/Images/2.png')}
                style={{
                  height: 70,
                  width: '20%',
                  marginLeft: '1%',
                  marginVertical: '1%',
                }}
              />

              <View
                style={{
                  width: '80%',
                  height: 70,
                  marginLeft: '1%',
                  marginVertical: '1%',
                  justifyContent: 'space-evenly',
                }}>
                <Text
                  style={{fontSize: 20, marginLeft: '1%', fontWeight: 'bold'}}
                  key={id}>
                  {/* Category : {item.category} */}
                  {item.name}
                </Text>
                <Text style={{fontSize: 16, marginLeft: '1%'}} key={id}>
                  {/* Brand Name : {item.brand} */}
                  {item.id}
                </Text>
              </View>
            </View>
          </>
        )}
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'yellow',
    //padding: '7%',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
  },
});
