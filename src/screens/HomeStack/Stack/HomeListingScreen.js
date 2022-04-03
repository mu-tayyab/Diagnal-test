import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import uuid from 'react-uuid';

import {Spacing} from '../../../theme/standardSizes';
import AppStatusBar from '../../../components/atoms/AppStatusBar';
import AppSearchBar from '../../../components/atoms/AppSearchBar';
import colors from '../../../theme/color';
import {hp, wp} from '../../../theme/responsiveness';

import NoDataFound from '../../../components/molecules/NoDataFound';
import HomeListCard from '../../../components/organisms/HomeListCard';
import {HomePageFakeApiData} from '../../../mock/fakeApiData';
import axios from 'axios';

const INITIAL_PAGE = 0;
const LAST_PAGE = 2;
const AllProductsScreen = ({navigation}) => {
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
  const [searchQuery, setSearchQuery] = useState('Romantic Comedy');

  useEffect(() => {
    requestData();
  }, [currentPage]);

  const _loadMoreItem = () => {
    if (currentPage <= LAST_PAGE) {
      setCurrentPage(index => index + 1);
    }
  };
  const requestData = async () => {
    setLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        let index = currentPage;
        setListData([
          ...listData,
          ...HomePageFakeApiData[index]['content-items'].content,
        ]);
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  };
  const _onClientSearch = async () => {
    let query = searchQuery.toLowerCase();
    const searchRecords = listData.filter(
      item => item.name.toLowerCase().indexOf(query) >= 0,
    );
    setListData(searchRecords);
  };
  const renderLoader = () => {
    if (loading)
      return (
        <View style={styles.loaderStyle}>
          <ActivityIndicator size="small" color={colors.primary} />
        </View>
      );

    if (listData.length == 0 && !loading)
      return <NoDataFound message="No Data Found" />;
    return null;
  };

  return (
    <AppStatusBar>
      <View style={styles.container}>
        <AppSearchBar
          value={searchQuery}
          onChangeText={searchText => setSearchQuery(searchText)}
          placeholder="Search"
          onSearch={_onClientSearch}
          navigation={navigation}
        />
        <View style={styles.productDisplaySection}>
          <FlatList
            data={listData}
            // onMomentumScrollBegin={loading ? null : _loadMoreItem}
            onEndReached={loading ? null : _loadMoreItem}
            showsVerticalScrollIndicator={false}
            numColumns={3}
            extraData={listData}
            onEndReachedThreshold={1}
            removeClippedSubviews={true}
            maxToRenderPerBatch={31}
            initialNumToRender={10}
            windowSize={15}
            keyExtractor={item => item.id}
            ListFooterComponent={renderLoader}
            contentContainerStyle={{paddingTop: 15, paddingBottom: hp(5)}}
            renderItem={({item, index}) => {
              return (
                <HomeListCard
                  // key={uuid()} // Trying to add unique id without adding it image flashes
                  key={item.id}
                  index={index}
                  navigation={navigation}
                  item={item}
                />
              );
            }}
          />
        </View>
      </View>
    </AppStatusBar>
  );
};

export default AllProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Spacing.screenVerticalMargin,
    paddingHorizontal: Spacing.screenHorizontalPadding,
    backgroundColor: colors.secondary,
  },

  productDisplaySection: {
    flex: 1,
  },
  loaderStyle: {
    marginBottom: hp(12),
    alignItems: 'center',
  },
});
3;
