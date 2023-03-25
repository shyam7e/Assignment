import {View, FlatList, SafeAreaView, RefreshControl} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../redux/actions/fetchData';
import {setFilterValue} from '../redux/slices/ListSlice';
import SearchBar from '../components/SearchBar';
import ListCardItem from '../components/ListCardItem';
import ListEmptyComponent from '../components/ListEmptyStateData';
import Header from '../components/Header';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.dataList.filteredData);
  const filterValue = useSelector(state => state.dataList.filterValue);
  const loading = useSelector(state => state.dataList.isLoader);

  const handleFilterChange = value => {
    dispatch(setFilterValue(value));
  };

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const renderEmptyDataState = () => {
    return <ListEmptyComponent />;
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title="Antilia Assignment" />
      <SearchBar value={filterValue} onChangeText={handleFilterChange} />
      <View style={{flex: 1}}>
        <FlatList
          style={{backgroundColor: '#f8f8f8'}}
          data={data}
          renderItem={({item}) => (
            <ListCardItem
              name={item.name}
              userName={item.username}
              phone={item.phone}
              email={item.email}
              companyName={item?.company?.name}
            />
          )}
          ListEmptyComponent={renderEmptyDataState}
          keyExtractor={item => item.id}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={() => dispatch(fetchData())}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
