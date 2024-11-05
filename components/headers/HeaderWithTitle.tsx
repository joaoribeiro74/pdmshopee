import { TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

type HeaderWithTitleProps = {
  title: string;
  Icon?: any;
  Edit?: any,
  onIconPress?: () => void;
  onEditPress?: () => void;
};

export default function HeaderWithTitle({ title, Icon, Edit, onIconPress, onEditPress }: HeaderWithTitleProps) {
  return (
    <Stack.Screen
      options={{
        title,
        headerRight: () => (
          <View style={styles.headerRightContainer}>
              <TouchableOpacity onPress={onEditPress}>
                <Text style={styles.editText}>{Edit}</Text>
              </TouchableOpacity>
            {Icon && (
              <TouchableOpacity onPress={onIconPress} style={{ marginRight: 10 }}>
                <Image source={Icon} style={styles.icon} resizeMode="contain" />
              </TouchableOpacity>
            )}
          </View>
        ),
      }}
    />
  );
}

const styles = StyleSheet.create({
  headerRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editText: {
    fontSize: 16,
    marginRight: 20,
    fontWeight: '400',
  },
  icon: {
    width: 24,
    height: 24,
  },
});