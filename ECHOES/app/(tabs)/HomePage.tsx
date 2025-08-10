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
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';

const placeholderSongs = [
    {id: '1', title: 'CLAIRO VIBES', image: require('@/assets/images/CLAIRO-VIBES.png')},
    {id: '2', title: 'Magdalena Bay', image: require('@/assets/images/Magdalena-Bay.png')},
    {id: '3', title: 'Gym 🔥', image: require('@/assets/images/GYM.png')},
];


const Section = ({ title, data }) => {
    const listRef = useRef(null);

    const handleNext = () => {
        if (listRef.current) {
        listRef.current.scrollToOffset({
            offset: 150, 
            animated: true,
        });
        }
    };

    return (
        <View style={styles.section}>
        {/* Section Header with Arrow */}
        <View style={styles.header}>
          <ThemedText style={styles.headerTitle}>{title}</ThemedText>
          <TouchableOpacity style={styles.arrowButton} onPress={handleNext}>
            <Ionicons name="arrow-forward" size={20} color="white" />
          </TouchableOpacity>
        </View>
  
        {/* Horizontal List */}
        <FlatList
          ref={listRef}
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <ThemedText style={styles.songTitle}>{item.title}</ThemedText>
            </TouchableOpacity>
          )}
        />
      </View>
);
}

export default function HomePage() {

    return (
        <ScrollView style={[styles.container, { backgroundColor: '#121212' }]}>
            {/* Perfect For You */}
            <Section title="Perfect for You" data={placeholderSongs}/> 

            {/* Try Something New */}
            <Section title="Try Something New" data={placeholderSongs} />

            {/* Recently Played */}
            <Section title="Recently Played" data={placeholderSongs} />

            {/* Popular with Friends */}
            <Section title="Popular with Friends" data={placeholderSongs} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
     },
     section: {
        marginBottom: 24,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
      },
      headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
      },
      arrowButton: {
        backgroundColor: '#5B60F6',
        borderRadius: 20,
        padding: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      card: {
        marginHorizontal: 10,
        alignItems: 'center',
      },
      image: {
        width: 90,
        height: 90,
        borderRadius: 8,
      },
      songTitle: {
        color: 'white',
        marginTop: 6,
        fontSize: 12,
        opacity: 0.6, 
      },
});