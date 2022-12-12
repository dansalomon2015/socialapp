import { View, Text } from 'react-native'
import React from 'react'

import styles from './stlye'
import { VectorIcon } from '../VectorIcon'

const ExperienceUploaded = ({ salary, jobTitle, companyName, numberOfYears }) => {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.jobTitle}>{jobTitle}</Text>
            <Text style={styles.companyNameAndNumberOfYears}>{companyName} | {numberOfYears} years</Text>
            <Text style={{ color: '#858585' }}> <Text style={styles.salaryText}>{ salary }</Text> / per month </Text>
        </View>
        <VectorIcon type='Ionicons' name='close-outline' size={20} color='#858585' style={styles.closeIcon} />
    </View>
  )
}

export default ExperienceUploaded