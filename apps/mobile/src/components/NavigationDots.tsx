import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

interface NavigationDotsProps {
  total: number;
  activeIndex: number;
}

const NavigationDots: React.FC<NavigationDotsProps> = ({
  total,
  activeIndex,
}) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            activeIndex === index && styles.activeDot,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.navDotColor,
    marginHorizontal: 4,
  },
  activeDot: {
    width: 24,
    borderRadius: 20,
    backgroundColor: colors.white,
  },
});

export default NavigationDots;
