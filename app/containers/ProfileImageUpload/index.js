import React, {useState} from 'react';
import {View, Text} from 'react-native';
import ProfileImageUploaded from '../ProfileImageUploaded';
import {styles} from './styles';
import i18n from '../../i18n';
import ProfileDataPlaceholder from '../ProfileDataPlaceholder';
import ImagePicker from 'react-native-image-crop-picker';
import {Platform} from 'react-native';
import firebaseSdk from '../../lib/firebaseSdk';

const ProfileImageUpload = ({imageUrl, imageName, onUpload}) => {
  const [loading, setLoading] = useState(false);
  const pickImage = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    })
      .then(async image => {
        setLoading(true);
        let image_path = Platform.OS === 'ios' ? image.sourceURL : image.path;

        const image_url = await firebaseSdk.uploadMedia(firebaseSdk.STORAGE_TYPE_PHOTO, image_path);

        console.log(imageUrl);
        if (Platform.OS === 'ios') {
          onUpload({
            imageName: image.filename,
            imageUrl: image_url,
          });
        } else {
          onUpload({
            imageName: image.path.split('/')[image.path.split('/').length - 1],
            imageUrl: image_url,
          });
        }
      })
      .catch(console.warn)
      .finally(() => setLoading(false));
  };

  const onCancel = () => {
    onUpload({
      imageName: '',
      imageUrl: '',
    });
  };

  if (!imageUrl)
    return (
      <ProfileDataPlaceholder title={i18n.t('upload_profile_image')} onPress={pickImage} loading={loading} />
    );

  return (
    <ProfileImageUploaded
      imageName={imageName}
      imageUrl={imageUrl}
      onCancel={onCancel}
      changeImage={pickImage}
    />
  );
};

export default ProfileImageUpload;
