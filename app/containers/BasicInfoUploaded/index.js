import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './style'
import { VectorIcon } from '../VectorIcon'
import images from '../../assets/images'

const BasicInfoUploaded = ({ name, gender, dob, phone, location, showCloseIcon }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.genderAndDob}>
          {gender} | {dob}
        </Text>
        <View style={styles.iconAndText}>
          <VectorIcon
            type="MaterialIcons"
            name="perm-phone-msg"
            color="#F5BF4D"
            size={18}
          />
          <Text style={styles.phone}>{phone}</Text>
        </View>
        <View style={styles.iconAndText}>
          <Image
            source={images.location_home}
            style={styles.locationHomeImage}
          />
          <Text style={styles.location}>{location}</Text>
        </View>
      </View>
      {showCloseIcon && (
        <VectorIcon
          type="Ionicons"
          name="close-outline"
          size={20}
          color="#858585"
          style={styles.closeIcon}
        />
      )}
    </View>
  );
}

export default BasicInfoUploaded