import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
  StatusBar,
  NativeSyntheticEvent,
  NativeScrollEvent,
  FlatList,
  TextInput
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Defs, RadialGradient, Stop, Circle } from 'react-native-svg';
import { useRouter } from 'expo-router';

export default function WriteReview() {
  return (
    <View style={{ flex: 1, backgroundColor: '#101010', position: 'relative' }}>
    <View 
      style={[styles.reviewCard, { position: 'absolute' }]}
    />

      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
        <TouchableOpacity style={styles.searchBar}>
          <TextInput 
          style={styles.input}
          placeholder="Search a song or playlist to review!"
          />
        </TouchableOpacity>
    

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  reviewCard: {
    backgroundColor: '#1F1F1F',
    borderRadius: 20,
    width: '90%',
    height: '90%',
    padding: 10,
    alignSelf: 'center',
  },
  searchBar: {
    backgroundColor: 'white',
    borderRadius: 10, 
    width: '90%',
    padding: 10,
    alignSelf: 'center',
    alignContent: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
    width: '90%',
    margin: 5,
    alignSelf: 'center',
  },
});