import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export default function SkeletonScreenNormal() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [imageURL, setImageURL] = useState([]);
  const [brand, setBrand] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/products/2')
      .then(response => response.json())

      .then(data => {
        console.log('Received data--->', data);
        setData(data);
        setImageURL(data.images);
        setBrand(data.brand);
        setTitle(data.title);
        setCategory(data.category);
        setDescription(data.description);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      {loading || !data ? (
        <>
          <View style={{alignItems: 'center'}}>
            <ShimmerPlaceHolder
              style={styles.simmercircle}
              shimmerColors={[
                '#564d4d',
                '#8e8e8e',
                '#564d4d',
              ]}></ShimmerPlaceHolder>
            <ShimmerPlaceHolder
              style={styles.simmer}
              shimmerColors={[
                '#564d4d',
                '#8e8e8e',
                '#564d4d',
              ]}></ShimmerPlaceHolder>
            <ShimmerPlaceHolder
              style={styles.simmer}
              shimmerColors={[
                '#564d4d',
                '#8e8e8e',
                '#564d4d',
              ]}></ShimmerPlaceHolder>
            <ShimmerPlaceHolder
              style={styles.simmer}
              shimmerColors={[
                '#564d4d',
                '#8e8e8e',
                '#564d4d',
              ]}></ShimmerPlaceHolder>
            <ShimmerPlaceHolder
              style={styles.simmeraddress}
              shimmerColors={[
                '#564d4d',
                '#8e8e8e',
                '#564d4d',
              ]}></ShimmerPlaceHolder>
          </View>
        </>
      ) : (
        <>
          <View
            style={{
              alignItems: 'center',
              flex: 1,
              padding: '7%',
            }}>
            <Image
              source={{uri: imageURL[0]}}
              style={{width: 200, height: 250, marginVertical: '10%'}}
            />
            <Text style={styles.aftersimmer}>Brand Name : {brand}</Text>
            <Text style={styles.aftersimmer}>Title : {title}</Text>
            <Text style={styles.aftersimmer}>Category : {category}</Text>
            <Text style={styles.aftersimmer}>About : {description}</Text>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  simmercircle: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginVertical: '10%',
  },
  simmer: {
    height: 35,
    width: 270,
    marginVertical: '5%',
  },
  simmeraddress: {
    height: 180,
    width: 270,
    marginVertical: '5%',
  },
  aftersimmer: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: '4%',
    color: '#000',
  },
});
