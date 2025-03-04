import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import { customTxt } from '../../theme/fontStyle';
import Fonts from '../../theme/Fonts';
import { colors } from '../../theme/colors';
import HorizontalSelectList, {
  SelectItem,
} from '../../components/HorizontalSelectList';
import Img from '../../../assets/images'

const shoppingCategories: SelectItem[] = [
  { id: 0, text: 'Shop online' },
  { id: 1, text: 'Book travel' },
  { id: 2, text: 'Order food' },
  { id: 3, text: 'Buy groceries' },
];

const ShopEarnScreen = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    0
  );

  const handleSelectCategory = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
  };

  const logoSection1 = () => {
    return (
      <View style={styles.logoSectionCtn}>
        <View style={styles.logoSection1Ctn}>
          <View style={{ marginRight: 8 }}>
            <View style={[styles.shoppe, styles.centerConten]}>
              <Image
                source={Img.shopee_logo}
                resizeMode={'contain'}
                style={styles.logoShoppe}
              />
            </View>
            <View style={styles.flexRow}>
              <View style={[styles.hnm, styles.centerConten]}>
                <Image
                  source={Img.hnm_logo}
                  resizeMode={'contain'}
                  style={styles.logoHnm}
                />
              </View>
              <View style={[styles.fave, styles.centerConten]}>
                <Image
                  source={Img.fave_logo}
                  resizeMode={'contain'}
                  style={styles.logoHnm}
                />
              </View>
            </View>
          </View>
          <View>
            <View style={[styles.lazada, styles.centerConten]}>
              <Image
                source={Img.lazada_logo}
                resizeMode={'contain'}
                style={styles.logoLazada}
              />
            </View>
            <View style={[styles.uniqlo, styles.centerConten]}>
              <Image
                source={Img.uniqlo_logo}
                resizeMode={'contain'}
                style={styles.logoUniqlo}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  const logoSection2 = () => {
    return (
      <View style={styles.logoSection2Ctn}>
        <View style={[styles.amazon, styles.centerConten]}>
          <Image
            source={Img.amazon_logo}
            resizeMode={'contain'}
            style={styles.logoAmazon}
          />
        </View>
        <View style={[styles.fairPrice, styles.centerConten]}>
          <Image
            source={Img.fairprice_logo}
            resizeMode={'contain'}
            style={styles.logoFairPrice}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <View style={styles.wrapper}>
          <Text
            style={[customTxt(Fonts.Bold, 14, colors.white).txt, styles.text]}
          >
            1
          </Text>
        </View>
        <View style={styles.line} />
      </View>
      <Text style={[customTxt(Fonts.Bold, 32, colors.white).txt, styles.title]}>
        Shop your favourite brands, earn miles
      </Text>
      <HorizontalSelectList
        data={shoppingCategories}
        onSelectItem={handleSelectCategory}
        initialSelectedId={selectedCategoryId}
      />
      {logoSection1()}
      {logoSection2()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
  },
  title: {
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
  },
  line: {
    borderStyle: 'solid',
    borderColor: colors.lightPurple100,
    borderTopWidth: 1,
    width: '100%',
    height: 1,
  },
  headerSection: {
    alignSelf: 'stretch',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 24,
  },
  logoShoppe: {
    height: 36,
    width: 114,
  },
  logoHnm: {
    height: 91,
    width: 91,
  },
  logoLazada: {
    height: 28,
    width: 71,
  },
  logoUniqlo: {
    height: 40,
    width: 72,
  },
  logoAmazon: {
    height: 77,
    width: '100%',
  },
  logoFairPrice: {
    height: 104,
    width: '100%',
  },
  logoSectionCtn: {
    marginTop: 24,
    marginHorizontal: 24,
  },
  centerConten: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shoppe: {
    paddingVertical: 34,
    paddingHorizontal: 42,
    backgroundColor: '#EE4E2C',
    borderRadius: 16,
  },
  hnm: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: '#CE0F25',
    borderRadius: 16,
    marginRight: 8,
  },
  fave: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: '#de206a',
    borderRadius: 16,
    marginLeft: 8,
  },
  lazada: {
    paddingHorizontal: 10,
    backgroundColor: '#0f136b',
    borderRadius: 16,
    marginLeft: 8,
    height: 127,
  },
  uniqlo: {
    paddingVertical: 13,
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    marginLeft: 8,
    flex: 1,
    marginTop: 12,
  },
  amazon: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: colors.white,
    borderRadius: 16,
    flex: 1,
    marginRight: 8,
  },
  fairPrice: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: '#0d3678',
    borderRadius: 16,
    flex: 1,
    marginLeft: 8,
  },
  logoSection1Ctn: {
    flexDirection: 'row',
  },
  flexRow: {
    flexDirection: 'row',
    marginTop: 12,
  },
  logoSection2Ctn: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
});

export default ShopEarnScreen;
