import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import Video from 'react-native-video'
import { themes } from '../../constants/colors'
import { dateStringFromNowShort } from '../../utils/datetime'
import images from '../../assets/images'
import { POST_TYPE_PHOTO, POST_TYPE_TEXT, POST_TYPE_VIDEO } from '../../constants/app'
import { VectorIcon } from '../../containers/VectorIcon'
import PopupMenu from '../../containers/PopupMenu'
import { getUserRepresentString } from '../../utils/const'

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    marginBottom: 20,
    marginHorizontal: 10,
    borderRadius: 14,
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: '#C4C4C4'
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 13,
    width: '95%',
    alignSelf: 'center'
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 10,
    borderWidth: 5,
    overflow: 'hidden'
  },
  avatar: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    borderRadius: 5,
    resizeMode: 'cover',
    borderWidth: 0.3,
    borderColor: '#eeeeee'
  },
  profileInfo: {
    marginLeft: 12,
    height: 60,
    paddingTop: '2%'
  },
  profileName: {
    fontSize: 17,
    fontWeight: '600',
    fontFamily: 'Raleway'
  },
  captionText: {
    marginTop: 6,
    fontSize: 12,
  },
  more: {
    width: 8,
    height: 24,
    padding: 8,
    resizeMode: 'contain',
  },
  content: {
    position: 'relative',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 18,
  },
  photoImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginVertical: 10
  },
  likingImage: {
    position: 'absolute',
    left: 12,
    bottom: 12,
    width: 48,
    height: 48,
  },
  video: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  thumbnailContainer: {
    position: 'relative',
    backgroundColor: 'black',
  },
  thumbnail: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  playIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 300,
  },
  footer: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginBottom: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  underlineDivider: {
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionLikImage: {
    width: 20,
    height: 20,
  },
  actionText: {
    color: 'grey',
    marginLeft: 8,
  },
  actionCommentImage: {
    width: 20,
    height: 20,
  },
  actionShareImage: {
    width: 18,
    height: 18,
  },
  toolIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  count: {
    fontSize: 12,
    color: '#0D0D0D',
    fontFamily: 'Hind Vadodara',
    marginLeft: 3
    },
  avatarWrap: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageWrap: {
    borderRadius: 30,
    overflow: 'hidden',
    marginBottom: 11,
    marginTop: 16,
    borderWidth: 5
  },
  mediaWrap: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 41,
    paddingHorizontal: 22,
    backgroundColor: '#00000090',
  },
  bottomView: {
    width: '100%',
    height: 40,
    marginBottom: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

const Post = ({ key, item, isLiking, onPressUser, onPress, onPressShare, onActions, onLike, theme, style }) => {
  const [playing, setPlaying] = useState(false)

  return (
    <View
      key={key}
      style={[
        styles.container,
        {...style, backgroundColor: themes[theme].post_background_color},
      ]}
      onPress={onPress}>
      <View style={styles.topView}>
        <TouchableOpacity style={styles.avatarWrap} onPress={onPressUser}>
          <View style={[styles.avatarContainer, { borderColor: themes[theme].post_image_border_color, }]}>
            <Image
              source={
                item?.owner?.avatar
                  ? {uri: item?.owner?.avatar}
                  : images.default_avatar
              }
              style={styles.avatar}
            />
          </View>
          <View style={styles.profileInfo}>
            <Text
              style={[
                styles.profileName,
                {color: themes[theme].activeTintColor},
              ]}>
              {item?.owner?.displayName}
            </Text>
            <Text
              style={[
                styles.captionText,
                {
                  color: themes[theme].infoText,
                },
              ]}>
              {item?.date ? dateStringFromNowShort(item?.date) : null}
            </Text>
            {/* <Text style={[styles.captionText, {color: themes[theme].infoText}]}>
              {getUserRepresentString(item?.owner)}
            </Text> */}
          </View>
        </TouchableOpacity>
        <PopupMenu
          theme={theme}
          options={onActions.options}
          renderTrigger={() => (
            <VectorIcon
              type="Feather"
              name="more-horizontal"
              size={18}
              color={themes[theme].activeTintColor}
            />
          )}
        />
      </View>
      {item.type === POST_TYPE_TEXT && (
        <>
          <TouchableOpacity
            onPress={onPress}
            style={[styles.content, {paddingHorizontal: 20, marginBottom: 16}]}>
            <Text
              style={[
                styles.titleText,
                {
                  fontWeight: 'normal',
                  fontSize: 14,
                  lineHeight: 20,
                  color: themes[theme].titleText,
                },
              ]}>
              {item?.text}
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 41,
              paddingHorizontal: 22,
              backgroundColor: themes[theme].postTool,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => onLike(isLiking)}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={isLiking ? images.heart_red : images.heart}
                  style={styles.toolIcon}
                />
                <Text style={styles.count}>{item.likes?.length ?? 0}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onPress}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={images.chat} style={styles.toolIcon} />
                <Text style={styles.count}>{item.comments?.length ?? 0}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={onPressShare}>
              <Image source={images.share} style={styles.toolIcon} />
            </TouchableOpacity>
          </View>
        </>
      )}
      {item.type === POST_TYPE_PHOTO && (
        <TouchableOpacity
          onPress={onPress}
          style={[styles.content, {paddingHorizontal: 11}]}>
          {item.text && (
            <Text
              style={[
                styles.titleText,
                {
                  color: themes[theme].titleText,
                  paddingHorizontal: 10,
                  fontWeight: 'normal',
                  fontSize: 14,
                  lineHeight: 20,
                },
              ]}>
              {item?.text}
            </Text>
          )}
          <Image source={{uri: item?.photo}} style={styles.photoImage} />
          <View style={styles.bottomView}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => onLike(isLiking)}
                style={{flexDirection: 'row', alignItems: 'center', marginRight: 10}}>
                <VectorIcon
                  type="MaterialCommunityIcons"
                  name="heart"
                  size={25}
                  color={
                    isLiking
                      ? themes[theme].heartColor_liked
                      : themes[theme].heartColor_not_liked
                  }
                />
                <Text style={styles.count}>{item.likes?.length ?? 0}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onPress}
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={
                    theme == 'light' ? images.chat_light : images.chat_dark
                  }
                  style={styles.toolIcon}
                />
                <Text style={styles.count}>{item.comments?.length ?? 0}</Text>
              </TouchableOpacity>
            </View>
            <VectorIcon
              name="share"
              color='#898989'
              size={18}
            />
          </View>
        </TouchableOpacity>
      )}
      {item.type === POST_TYPE_VIDEO && (
        <TouchableOpacity
          onPress={onPress}
          style={[styles.content, {paddingHorizontal: 11}]}>
          {item.text && (
            <Text
              style={[
                styles.titleText,
                {
                  color: themes[theme].titleText,
                  paddingHorizontal: 10,
                  fontWeight: 'normal',
                  fontSize: 14,
                  lineHeight: 20,
                },
              ]}>
              {item.text}
            </Text>
          )}
          <View style={styles.imageWrap}>
            {playing ? (
              <Video
                source={{uri: item.video}}
                style={styles.video}
                controls
                onEnd={() => setPlaying(false)}
                resizeMode={'contain'}
              />
            ) : (
              <View style={styles.thumbnailContainer}>
                <Image
                  source={{uri: item.thumbnail}}
                  style={styles.thumbnail}
                  resizeMode={'contain'}
                />
                <TouchableOpacity
                  onPress={() => {
                    if (playing) {
                      onPress();
                    } else {
                      setPlaying(true);
                    }
                  }}
                  style={[styles.playIcon, {position: 'absolute'}]}>
                  <VectorIcon
                    name="playcircleo"
                    type={'AntDesign'}
                    size={72}
                    color={'white'}
                  />
                </TouchableOpacity>
              </View>
            )}
            <View style={styles.mediaWrap}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => onLike(isLiking)}
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={isLiking ? images.heart_red : images.heart}
                    style={styles.toolIcon}
                  />
                  <Text style={styles.count}>{item.likes?.length ?? 0}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={onPress}
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={images.chat} style={styles.toolIcon} />
                  <Text style={styles.count}>{item.comments?.length ?? 0}</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={onPressShare}>
                <Image source={images.share} style={styles.toolIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default Post
