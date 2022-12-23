import React from 'react';
import {View, Text} from 'react-native';
import ProfileImageUploaded from '../ProfileImageUploaded';
import {styles} from './styles';
import i18n from '../../i18n';
import ProfileDataPlaceholder from '../ProfileDataPlaceholder';
import ImagePicker from 'react-native-image-crop-picker';
import {Platform} from 'react-native';

const ProfileImageUpload = ({imageUrl, imageName, onUpload}) => {
  const pickImage = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        if (Platform.OS === 'ios') {
          onUpload({
            imageName: image.filename,
            imageUrl: image.sourceURL,
          });
        } else {
          onUpload({
            imageName: image.path.split('/')[image.path.split('/').length - 1],
            imageUrl: image.path,
          });
        }
      })
      .catch(console.warn);
  };

  const onCancel = () => {
    onUpload({
      imageName: '',
      imageUrl: '',
    });
  };

  if (!imageUrl) {return <ProfileDataPlaceholder title={i18n.t('upload_profile_image')} onPress={pickImage} />;}

  return <ProfileImageUploaded imageName={imageName} imageUrl={imageUrl} onCancel={onCancel} changeImage={pickImage} />;
};

export default ProfileImageUpload;
