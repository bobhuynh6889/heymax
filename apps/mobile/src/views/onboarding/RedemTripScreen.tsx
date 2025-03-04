import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ImageSourcePropType } from 'react-native';
import { customTxt } from '../../theme/fontStyle';
import Fonts from '../../theme/Fonts';
import { colors } from '../../theme/colors';
import Img from '../../../assets/images';

interface CardDataProps {
  title: string;
  description: string;
  bestFor: string;
  image: ImageSourcePropType;
  id: number;
}

interface ItemCardDataProps {
  item: CardDataProps;
}

const cardData = [
  {
    title: 'Transfer miles',
    description: '25 Airline and Hotel Partners, No Fees, 1:1 Transfer Ratio',
    bestFor: 'Best for Business & First Class',
    image: Img.transfer_miles,
    id: 0,
  },
  {
    title: 'Fly and Claim',
    description: 'Upload your flight ticket, and get reimbursed within 5 days.',
    bestFor: 'Best for Economy',
    image: Img.fly_and_claim,
    id: 1,
  },
  {
    title: 'Not flying soon',
    description: 'You can always redeem Gift Cards with your Max Miles.',
    bestFor: 'Best for Starters',
    image: Img.not_flying_soon,
    id: 2,
  },
];

const renderItemRedeem = ({ item }: ItemCardDataProps) => {
  return (
    <View style={styles.cardCtn}>
      <Image
        style={styles.frameIcon}
        resizeMode={'contain'}
        source={item?.image}
      />
      <View style={{ flexShrink: 1 }}>
        <Text style={customTxt(Fonts.Bold, 18, colors.white).txt}>
          {item?.title}
        </Text>
        <Text
          style={[
            customTxt(Fonts.Regular, 14, '#ffffff80').txt,
            styles.address,
          ]}
        >
          {item?.description}
        </Text>
        <Text
          style={[customTxt(Fonts.Regular, 14, '#a164ff').txt, styles.bestFor]}
        >
          {item?.bestFor}
        </Text>
      </View>
    </View>
  );
};

const RedemTripScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <View style={styles.line} />
        <View style={styles.wrapper}>
          <Text
            style={[customTxt(Fonts.Bold, 14, colors.white).txt, styles.text]}
          >
            2
          </Text>
        </View>
      </View>
      <Text style={[customTxt(Fonts.Bold, 32, colors.white).txt, styles.title]}>
        Redeem your trip
      </Text>
      <FlatList
        data={cardData}
        keyExtractor={(item: any) => item.id}
        renderItem={renderItemRedeem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
  },
  title: {
    textAlign: 'left',
    width: 327,
    marginVertical: 24,
    marginLeft: 24,
  },
  text: {
    lineHeight: 24,
    textAlign: 'center',
  },
  wrapper: {
    shadowColor: colors.lightPurple100,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 24,
    elevation: 24,
    shadowOpacity: 1,
    borderRadius: 20,
    backgroundColor: colors.lightPurple100,
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 3,
    zIndex: 0,
    alignItems: 'center',
    marginRight: 24,
  },
  line: {
    borderStyle: 'solid',
    borderColor: colors.lightPurple100,
    borderTopWidth: 1,
    width: '100%',
    height: 1,
  },
  headerSection: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  cardCtn: {
    borderRadius: 16,
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 16,
    gap: 12,
    backgroundColor: colors.redeemCardBackground,
    flex: 1,
    marginHorizontal: 24,
    alignItems: 'center',
    marginBottom: 24,
  },
  frameIcon: {
    width: 60,
    height: 60,
  },
  address: {
    marginTop: 4,
    lineHeight: 20,
  },
  bestFor: {
    marginTop: 8,
    lineHeight: 16,
  },
});

export default RedemTripScreen;
