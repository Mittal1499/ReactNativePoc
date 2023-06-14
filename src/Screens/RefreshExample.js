// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   RefreshControl,
//   ActivityIndicator,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';
// import LottieView from 'lottie-react-native';
// import Axios from 'axios';

// export default function RefreshExample() {
//   const [isRefreshing, setIsRefreshing] = useState(false);
//   const [dataList, setDataList] = useState([]);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchApiData();
//     return () => {};
//   }, []);

//   const fetchApiData = async () => {
//     setLoading(true);
//     try {
//       const response = await Axios.get(
//         // `https://jsonplaceholder.typicode.com/users/${pageNumber}/todos`,
//         `https://dummyjson.com/products?limit=10&select=id,brand,category`,
//       );
//       //console.log('Received Data ----->', response.data);
//       setLoading(false);
//       if (dataList.length > 0) {
//         setDataList([...dataList, ...response.data]);
//       } else {
//         setDataList(response.data);
//       }
//     } catch (error) {
//       setLoading(false);
//       console.log('Error ----->  ', error);
//     }
//   };

//   const onHandeledRefresh = async () => {
//     // console.log('Function is calling');
//     setIsRefreshing(true);
//     //setPageNumber(pageNumber + 1);
//     await fetchApiData();
//     setIsRefreshing(false);
//     // console.log('Function is ending');
//   };

//   const renderItem = ({item, index}) => {
//     return (
//       <View key={index} style={styles.row}>
//         <Text style={styles.rowTitle}>ID : {item.id}</Text>
//         <Text style={styles.rowTitle2}>BRAND : {item.brand}</Text>
//         <Text style={styles.rowTitle2}>CATEGORT : {item.category}</Text>
//         {/* <Text style={styles.rowTitle2}>
//           Status : {item.completed ? 'true' : 'false'}
//         </Text> */}
//       </View>
//     );
//   };

//   return (
//     <View style={{height: '100%', width: '100%'}}>
//       <View style={{height: '100%', zIndex: 0}}>
//         <FlatList
//           data={dataList}
//           renderItem={renderItem}
//           style={{backgroundColor: 'cyan'}}
//           onEndReached={() => {
//             fetchApiData();
//             setPageNumber(pageNumber + 1);
//           }}
//           onEndReachedThreshold={1}
//           keyExtractor={item => item.id.toString()}
//           refreshControl={
//             <RefreshControl
//               refreshing={isRefreshing}
//               onRefresh={() => onHandeledRefresh()}
//               progressBackgroundColor={'yellow'}
//               colors={['#ff0000', '#00ff00', '#0000ff']}
//               // size={large}
//               // progressViewOffset={60}
//             />
//           }
//         />
//         {loading ? (
//           <View
//             style={{
//               width: '100%',
//               height: 50,
//               justifyContent: 'center',
//               alignItems: 'center',
//               backgroundColor: 'cyan',
//             }}>
//             {/* <ActivityIndicator size={'large'} /> */}
//             <LottieView
//               source={require('../assets/Animations/blue-loading.json')}
//               autoPlay
//               loop
//               speed={1.2}
//               style={{height: 80, alignSelf: 'center'}}
//             />
//           </View>
//         ) : null}
//       </View>
//       {/* <View style={{height: '5%', zIndex: 1}}>
//         <LottieView
//           source={require('../assets/Animations/bound-loading.json')}
//           autoPlay
//           loop
//           speed={1.2}
//           style={{height: 40, alignSelf: 'center'}}
//         />
//       </View> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   row: {
//     height: 105,
//     justifyContent: 'center',
//     padding: 20,
//     borderBottomWidth: 3,
//     borderBottomColor: '#000',
//     //backgroundColor: 'cyan',
//   },
//   rowTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   rowTitle2: {
//     fontSize: 18,
//     color: '#000',
//   },
// });
//
//
//
//
//
//
//
//
//
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import React, {useState, useEffect, useCallback, useRef} from 'react';
import LottieView from 'lottie-react-native';

let limit = 10;
let loadMore = true;

export default function RefreshExample() {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [showLoader, setShowLoader] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    fetchApiData();
  }, []);

  const fetchApiData = async () => {
    let query = `?skip=${skip}&limit=${limit}`;
    await fetch('https://dummyjson.com/products' + query)
      .then(res => res.json())
      .then(res => {
        //console.log('Data from API--------->>', res);
        if (res.products.length == 0) {
          loadMore = false;
        }
        setData(res.products);
        setData([...data, ...res.products]);
        setSkip(skip + 10);
        setShowLoader(false);
      })
      .catch(error => {
        console.log('Error during fetching data', error);
      });
  };

  const renderItem = useCallback(
    ({item}) => {
      return (
        <View style={styles.list}>
          <Image
            source={{uri: item.thumbnail}}
            style={{width: '100%', height: 200, borderRadius: 8}}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 8,
            }}>
            <Text style={{color: '#000'}}>{item.brand}</Text>
            <Text style={{color: '#000'}}>[Price: {item.price}]</Text>
            <Text style={{color: '#000'}}>{item.category}</Text>
          </View>
          <Text style={{color: '#000'}}> {item.description}</Text>
        </View>
      );
    },
    [data],
  );

  const ItemSeparatorComponent = useCallback(() => {
    return <View style={{height: 20}} />;
  }, [data]);

  const keyExtractor = useCallback(item => `${item.id}`);

  const onEndReached = () => {
    if (loadMore) {
      setShowLoader(true);
      fetchApiData();
    }
  };

  const ListFooterComponent = useCallback(() => {
    return (
      <LottieView
        source={require('../assets/Animations/bound-loading.json')}
        autoPlay
        loop
        style={{marginVertical: 0, height: 80, alignSelf: 'center'}}
      />
    );
  }, [data]);

  const onHandleButton = offset => {
    ref.current.scrollToOffset({offset: 0, animated: false});
  };

  const onHandeledRefresh = async () => {
    // console.log('Function is calling');
    setIsRefreshing(true);
    await fetchApiData();
    setIsRefreshing(false);
    // console.log('Function is ending');
  };

  return (
    <View style={{height: '100%', marginHorizontal: 16}}>
      <FlatList
        data={data}
        ref={ref}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
        keyExtractor={keyExtractor}
        onEndReached={onEndReached}
        onEndReachedThreshold={1}
        ListFooterComponent={showLoader && ListFooterComponent}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            colors={['white', 'red', 'blue']}
            progressBackgroundColor={'#000'}
            size={'default'}
            progressViewOffset={30}
            onRefresh={() => onHandeledRefresh()}
          />
        }
      />

      <TouchableOpacity style={styles.button} onPress={() => onHandleButton()}>
        <Image
          source={require('../assets/Images/upp.png')}
          style={{height: 50, width: 50}}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    backgroundColor: '#fff',
    padding: 8,
    margin: 2,
    borderRadius: 8,
  },
  button: {
    padding: 10,
    position: 'absolute',
    bottom: 10,
    right: 0,
  },
});
