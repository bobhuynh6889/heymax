import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Linking } from 'react-native';
import { Button } from 'ui';
import { colors } from '../../theme/colors';
import ValuePropScreen from './WelcomeScreen';
import NavigationDots from '../../components/NavigationDots';
import Icon from '../../../assets/icons';
import ShopEarnScreen from './ShopEarnScreen';
import RedemTripScreen from './RedemTripScreen';
import { customTxt } from '../../theme/fontStyle';
import Fonts from '../../theme/Fonts';

export default function Onboarding() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalDots = 3;

  const handlePress = async () => {
    if (activeIndex === 2) {
      return Linking.openURL('https://heymax.ai/');
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const checkActiveIndexRenderScreen = () => {
    if (activeIndex === 1) {
      return <ShopEarnScreen />;
    } else if (activeIndex === 2) {
      return <RedemTripScreen />;
    } else {
      return <ValuePropScreen />;
    }
  };

  const checkChildrenButton = () => {
    if (activeIndex === 1) {
      return <Image source={Icon.icon_right} style={styles.forwardIconStyle} />;
    } else if (activeIndex === 2) {
      return <Text>Get started</Text>;
    } else {
      return (
        <View style={styles.howItWorkBtn}>
          <Text style={customTxt(Fonts.SemiBold, 16, colors.white).txt}>
            See how it works
          </Text>
          <Image source={Icon.icon_right} style={styles.forwardIconStyle} />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {checkActiveIndexRenderScreen()}
        <View style={styles.buttonCtn}>
          <NavigationDots total={totalDots} activeIndex={activeIndex} />
          <Button onPress={handlePress}>{checkChildrenButton()}</Button>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  scrollContent: {
    flexGrow: 1,
  },
  buttonCtn: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: colors.backgroundColor,
    borderColor: colors.borderColor,
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  forwardIconStyle: {
    height: 16,
    width: 16,
    marginLeft: 6,
  },
  howItWorkBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  forwardIconShopScreenStyle: {
    height: 24,
    width: 24,
  },
});
