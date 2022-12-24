import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Dimensions, View, ActivityIndicator, TouchableOpacity, FlatList} from 'react-native';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {Image} from 'react-native';
import {COLOR_WHITE, COLOR_YELLOW, themes} from '../../../constants/colors';
import {useTheme} from '../../../theme';
import {VectorIcon} from '../../../containers/VectorIcon';

const {width} = Dimensions.get('screen');
const IMG_PAGE = 50;
const ITEM_WIDTH = width / 4;

const ImageGallery = ({onUpdate, selectedImages}) => {
  const {theme} = useTheme();
  const [images, setImages] = useState([]);
  const [end_cursor, setEndCursor] = useState('');
  const [has_next_page, setHasNextPage] = useState(true);
  const [loading, setLoading] = useState(true);

  const onSelect = img => {
    onUpdate([...selectedImages, img]);
  };

  const unSelect = img => {
    onUpdate([...selectedImages.filter(({uri}) => !(uri === img.uri))]);
  };

  const isSelected = useCallback(
    img => {
      return !!selectedImages.find(({uri}) => uri === img.uri);
    },
    [selectedImages],
  );

  const loadPhotos = () => {
    if (!has_next_page) return;
    let options = {first: IMG_PAGE, assetType: 'Photos'};
    if (end_cursor) options = {first: IMG_PAGE, assetType: 'Photos', after: end_cursor};
    setLoading(true);
    CameraRoll.getPhotos(options)
      .then(res => {
        const list = res.edges.map(e => e.node.image);
        setHasNextPage(res.page_info.has_next_page);
        setEndCursor(res.page_info.end_cursor);
        setImages([...images, ...list]);
      })
      .catch(console.warn)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadPhotos();
  }, []);

  return (
    <FlatList
      data={images}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => {
        return (
          <ImageItem
            uri={item.uri}
            selected={isSelected(item)}
            theme={theme}
            onPress={() => (isSelected(item) ? unSelect(item) : onSelect(item))}
          />
        );
      }}
      numColumns={4}
      onEndReached={loadPhotos}
      contentContainerStyle={{flex: 1}}
      ListFooterComponent={() =>
        loading ? <ActivityIndicator size="small" color={themes[theme].textColor} /> : null
      }
      ListFooterComponentStyle={{marginTop: 10}}
    />
  );
};

const ImageItem = ({uri, selected, onPress, theme}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.imageContainer, {borderColor: themes[theme].borderColor}]}>
      <Image
        style={{
          width: '100%',
          height: '100%',
          resizeMode: 'cover',
        }}
        source={{uri}}
      />
      {selected && (
        <View style={styles.mask}>
          <View style={styles.selectedIcon}>
            <View style={styles.icon}>
              <VectorIcon type={'Entypo'} name={'check'} color={COLOR_WHITE} size={8} />
            </View>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ImageGallery;

const styles = StyleSheet.create({
  imageContainer: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    borderWidth: 1,
  },
  mask: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    backgroundColor: 'rgba(0,0,0,.63)',
  },
  selectedIcon: {
    width: 18,
    height: 18,
    position: 'absolute',
    right: 7,
    top: 7,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,.23)',
  },
  icon: {
    backgroundColor: COLOR_YELLOW,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
