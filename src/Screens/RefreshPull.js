import {ScrollView, StyleSheet, Text, View, RefreshControl} from 'react-native';
import React, {useEffect, useState} from 'react';
import Axios from 'axios';

export default function RefreshPull() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

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

  const onHandeledRefresh = async () => {
    // console.log('Function is calling');
    setIsRefreshing(true);
    //setPageNumber(pageNumber + 1);
    await fetchApiData();

    setIsRefreshing(false);
    // console.log('Function is ending');
  };

  return (
    <View>
      <ScrollView
        style={{height: '100%', width: '100%'}}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => onHandeledRefresh()}
          />
        }>
        {dataList.map((item, index) => {
          return (
            <>
              <Text
                key={index}
                style={{
                  marginHorizontal: 7,
                  marginVertical: 10,
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                ID : {item.id} ----------- [Title : {item.title}] -----------
                [Status : {item.completed ? 'true' : 'false'}]
              </Text>
              {/* <Text key={index} style={{marginHorizontal: 7, fontSize: 18}}>
                Title : {item.title}
              </Text>
              <Text
                key={index}
                style={{marginHorizontal: 7, marginVertical: 5, fontSize: 18}}>
                Status : {item.completed ? 'true' : 'false'}
              </Text> */}
            </>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
