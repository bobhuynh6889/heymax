import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Img from '../../../assets/images';
import { customTxt } from '../../theme/fontStyle';
import Fonts from '../../theme/Fonts';
import { colors } from '../../theme/colors';

const ValuePropScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={Img.heymax_logo}
        resizeMode='contain'
        style={styles.logoStyle}
      />
      <Image
        source={Img.heymax_cover}
        resizeMode='contain'
        style={styles.coverStyle}
      />
      <View>
        <Text style={styles.slogan}>
          <Text style={customTxt(Fonts.Bold, 32, colors.white).txt}>
            Shop your way to a{' '}
          </Text>
          <Text style={customTxt(Fonts.Bold, 32, colors.lightPurple100).txt}>
            Dream Vacation
          </Text>
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 16, colors.white).txt,
            styles.heading,
          ]}
        >
          Turn your expenses into dream vacations by earning miles every time
          you shop
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  logoStyle: {
    width: '50%',
    height: 24,
    alignSelf: 'center',
    marginTop: 99,
  },
  coverStyle: {
    height: 309,
    width: '100%',
    marginVertical: 32,
  },
  slogan: {
    alignSelf: 'stretch',
    lineHeight: 40,
    textAlign: 'center',
  },
  heading: {
    marginTop: 8,
    alignSelf: 'stretch',
    lineHeight: 24,
    textAlign: 'center',
  },
});

export default ValuePropScreen;
