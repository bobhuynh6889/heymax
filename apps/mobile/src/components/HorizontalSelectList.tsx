import React, { useState } from 'react';
import { FlatList, TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { customTxt } from '../theme/fontStyle';
import Fonts from '../theme/Fonts';
import { colors } from '../theme/colors';

export interface SelectItem {
  id: number;
  text: string;
}

interface HorizontalSelectListProps {
  data: SelectItem[];
  onSelectItem?: (itemId: number) => void;
  initialSelectedId?: number | null;
  containerStyle?: ViewStyle;
  itemStyle?: ViewStyle;
  selectedItemStyle?: ViewStyle;
  textStyle?: TextStyle;
  selectedTextStyle?: TextStyle;
}

const HorizontalSelectList: React.FC<HorizontalSelectListProps> = ({
  data,
  onSelectItem,
  initialSelectedId = null,
  containerStyle,
  itemStyle,
  selectedItemStyle,
  textStyle,
  selectedTextStyle,
}) => {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(initialSelectedId);

  const handleSelectItem = (itemId: number) => {
    setSelectedItemId(itemId);
    if (onSelectItem) {
      onSelectItem(itemId);
    }
  };

  const renderItem = ({ item }: { item: SelectItem }) => {
    const isSelected = selectedItemId === item.id;
    
    return (
      <TouchableOpacity
        style={[
          styles.item,
          itemStyle,
          isSelected && styles.selectedItem,
          isSelected && selectedItemStyle,
        ]}
        onPress={() => handleSelectItem(item.id)}
      >
        <Text style={[
          customTxt(Fonts.Regular, 14, colors.white).txt,
          textStyle,
          isSelected && styles.selectedItemText,
          isSelected && selectedTextStyle,
        ]}>
          {item.text}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[styles.listContainer, containerStyle]}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 8,
    marginLeft: 24,
  },
  item: {
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: '#b377ff33',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedItem: {
    backgroundColor: colors.lightPurple100,
  },
  itemText: {
    fontSize: 16,
    fontWeight: '500',
  },
  selectedItemText: {
    color: colors.white,
    fontFamily: Fonts.Medium,
  },
});

export default HorizontalSelectList; 