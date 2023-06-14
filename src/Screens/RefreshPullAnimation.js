// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
//   RefreshControl,
//   FlatList,
// } from 'react-native';
// import React, {useState, useEffect} from 'react';
// import Lottie from 'lottie-react-native';
// import LottieView from 'lottie-react-native';
// import Axios from 'axios';
// import animation from '../assets/Animations/bound-loading.json';

// export default function RefreshPullAnimation() {
//   const [refreshing, setRefreshing] = useState(false);
//   const [dataList, setDataList] = useState([]);
//   const [pageNumber, setPageNumber] = useState(1);
//   //const [isRefreshing, setIsRefreshing] = useState(false);

//   useEffect(() => {
//     fetchApiData();
//     return () => {};
//   }, []);

//   const fetchApiData = async () => {
//     try {
//       const response = await Axios.get(
//         `https://jsonplaceholder.typicode.com/users/${pageNumber}/todos`,
//       );
//       // console.log('Received Data ----->', response.data);
//       setDataList(response.data);
//     } catch (error) {
//       console.log('Error ----->  ', error);
//     }
//   };

//   const onRefresh = async () => {
//     setRefreshing(true);
//     setPageNumber(pageNumber + 1);
//     await fetchApiData();
//     setRefreshing(false);
//   };

//   const PullToRefresh = ({refreshing}) => {
//     return (
//       <View>
//         <LottieView
//           source={animation}
//           autoPlay
//           loop={refreshing}
//           style={{width: 100, height: 100}}
//         />
//         {/* <Text>{refreshing ? 'Refreshing...' : 'Pull to refresh'}</Text> */}
//       </View>
//     );
//   };

//   return (
//     // <View>
//     //   <ScrollView>
//     //     <Lottie
//     //       source={require('../assets/Animations/blue-loading.json')}
//     //       autoPlay
//     //       loop
//     //       style={{height: 100, width: 100}}
//     //     />
//     //     <Lottie
//     //       source={require('../assets/Animations/bound-loading.json')}
//     //       autoPlay
//     //       loop
//     //       style={{height: 100, width: 100}}
//     //     />
//     //     <Lottie
//     //       source={require('../assets/Animations/designer-cat.json')}
//     //       autoPlay
//     //       loop
//     //       style={{height: 100, width: 100}}
//     //     />
//     //     <Lottie
//     //       source={require('../assets/Animations/jumpy-eyeballs.json')}
//     //       autoPlay
//     //       loop
//     //       style={{height: 100, width: 100}}
//     //     />
//     //     <Lottie
//     //       source={require('../assets/Animations/loading-48.json')}
//     //       autoPlay
//     //       loop
//     //       style={{height: 100, width: 100}}
//     //     />
//     //     <Lottie
//     //       source={require('../assets/Animations/prelouder-chasy.json')}
//     //       autoPlay
//     //       loop
//     //       style={{height: 100, width: 100}}
//     //     />
//     //     <Lottie
//     //       source={require('../assets/Animations/seconds-loader-beeboard.json')}
//     //       autoPlay
//     //       loop
//     //       style={{height: 100, width: 100}}
//     //     />
//     //     <Lottie
//     //       source={require('../assets/Animations/tri-cube-loader-2.json')}
//     //       autoPlay
//     //       loop
//     //       style={{height: 100, width: 100}}
//     //     />
//     //   </ScrollView>
//     // </View>
//     // <ScrollView
//     //   refreshControl={
//     //     <RefreshControl
//     //       refreshing={refreshing}
//     //       onRefresh={onRefresh}
//     //       colors={['#ff0000']}
//     //     />
//     //   }>
//     //   <PullToRefresh refreshing={refreshing} />
//     //   {/* Your content goes here */}
//     // </ScrollView>
//     <View style={styles.container}>
//       <LottieView source={animation} autoPlay loop style={styles.animation} />

//       <FlatList
//         contentContainerStyle={styles.scrollView}
//         data={dataList}
//         renderItem={({item}) => <Text>{item.title}</Text>}
//         keyExtractor={item => item.id.toString()}
//         refreshControl={
//           <RefreshControl
//             refreshing={refreshing}
//             onRefresh={() => onRefresh()}
//           />
//         }
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   animation: {
//     width: 100,
//     height: 100,
//   },
//   scrollView: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
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
// import React, {useState, useEffect, useRef} from 'react';
// import {View, FlatList, RefreshControl, Text} from 'react-native';
// import LottieView from 'lottie-react-native';
// import axios from 'axios';

// const RefreshPullAnimation = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [refreshing, setRefreshing] = useState(false);
//   const animationRef = useRef(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         'https://jsonplaceholder.typicode.com/posts',
//       );
//       setData(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//     setLoading(false);
//   };

//   const onRefresh = async () => {
//     setRefreshing(true);
//     try {
//       await fetchData();
//       animationRef.current.play();
//     } catch (error) {
//       console.error(error);
//     }
//     setRefreshing(false);
//   };

//   const renderItem = ({item}) => {
//     return (
//       <View style={{padding: 16}}>
//         <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.title}</Text>
//         <Text style={{marginTop: 8}}>{item.body}</Text>
//       </View>
//     );
//   };

//   return (
//     <View style={{flex: 1}}>
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={item => item.id.toString()}
//         refreshControl={
//           <RefreshControl
//             refreshing={refreshing}
//             onRefresh={onRefresh}
//             colors={['#ff0000', '#00ff00', '#0000ff']}
//             progressViewOffset={50}
//             progressBackgroundColor="#ffffff"
//             tintColor="#ffffff"
//           />
//         }
//         ListEmptyComponent={
//           loading ? (
//             <LottieView
//               ref={animationRef}
//               source={require('../assets/Animations/bound-loading.json')}
//               style={{width: 200, height: 200}}
//               autoPlay={true}
//               loop={true}
//             />
//           ) : null
//         }
//       />
//     </View>
//   );
// };

// export default RefreshPullAnimation;
//
//
//
//
//
//
//
//
import {StyleSheet, Text, View, FlatList, Animated, Easing} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import LottieView from 'lottie-react-native';
import Axios from 'axios';

const LoadingAnimation = require('../assets/Animations/bound-loading.json');

export default function RefreshPullAnimation() {
  const DATA = [
    'apple',
    'orange',
    'grapes',
    'banana',
    'mango',
    'tango',
    'aango',
    'cango',
    'gango',
  ];
  const [offsetY, setOffsetY] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  //const [extraPaddingTop, setExtraPaddingTop] = useState(0);
  const [dataList, setDataList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const [extraPaddingTop] = useState(new Animated.Value(0));
  extraPaddingTop.setValue(50);
  const lottieRef = useRef(null);

  useEffect(() => {
    fetchApiData();
    return () => {};
  }, []);

  const fetchApiData = async () => {
    try {
      const response = await Axios.get(
        `https://jsonplaceholder.typicode.com/users/${pageNumber}/todos`,
      );
      //console.log('Received Data ----->', response.data);
      setDataList(response.data);
    } catch (error) {
      console.log('Error ----->  ', error);
    }
  };

  function onScroll(event) {
    const {nativeEvent} = event;
    const {contentOffset} = nativeEvent;
    const {y} = contentOffset;
    setOffsetY(y);
    // console.log(offsetY);
  }

  useEffect(() => {
    if (isRefreshing) {
      //setExtraPaddingTop(refreshingHeight);
      Animated.timing(extraPaddingTop, {
        toValue: refreshingHeight,
        duration: 0,
        useNativeDriver: true,
      }).start();
      lottieRef.current.play();
    } else {
      //setExtraPaddingTop(0);
      Animated.timing(extraPaddingTop, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
        easing: Easing.elastic(1.3),
      }).start();
    }
  }, [isRefreshing]);

  function onRelease() {
    if (offsetY <= -refreshingHeight && !isRefreshing) {
      setIsRefreshing(true);
      setTimeout(() => {
        setIsRefreshing(false);
      }, 3000);
    }
  }

  let progress = 0;
  if (offsetY <= 0) {
    progress = -offsetY / refreshingHeight;
  }

  const renderItem = ({item, index}) => {
    return (
      <View key={index} style={styles.row}>
        <Text style={styles.rowTitle}>ID : {item.id}</Text>
        <Text style={styles.rowTitle}>Title : {item.title}</Text>
        <Text style={[styles.rowTitle]}>
          Status : {item.completed ? 'true' : 'false'}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <LottieView
        autoPlay
        loop
        source={LoadingAnimation}
        style={styles.lottieView}
        //progress={progress}
      />
      <FlatList
        data={dataList}
        renderItem={renderItem}
        style={[styles.flatlist, {paddingTop: 20}]}
        onScroll={onScroll}
        onResponderRelease={onRelease}
        ListHeaderComponent={
          <Animated.View
          // style={{
          //   marginVertical: extraPaddingTop,
          // }}
          />
        }
      />
    </View>
  );
}

const refreshingHeight = 100;
const styles = StyleSheet.create({
  lottieView: {
    //height: refreshingHeight,
    // alignSelf: 'center',
    // position: 'absolute',
    height: 100,
    top: 5,
    left: 0,
    right: 0,
  },
  flatlist: {},
  row: {
    height: 120,
    justifyContent: 'center',
    padding: 20,
    borderBottomWidth: 3,
    borderBottomColor: '#000',
    backgroundColor: 'cyan',
  },
  rowTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
