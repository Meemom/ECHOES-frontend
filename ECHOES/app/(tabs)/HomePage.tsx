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
import Svg, { Defs, RadialGradient, Stop, Circle } from 'react-native-svg';

const placeholderSongs = [
    {id: '1', title: 'CLAIRO VIBES', image: require('@/assets/images/CLAIRO-VIBES.png')},
    {id: '2', title: 'Magdalena Bay', image: require('@/assets/images/Magdalena-Bay.png')},
    {id: '3', title: 'Gym 🔥', image: require('@/assets/images/GYM.png')},
];


function BackgroundGlow() {
    return (
        <Svg height="100%" width="100%" style={StyleSheet.absoluteFill}>
        <Defs>
          {/* Pink Glow */}
          <RadialGradient id="grad1" cx="50%" cy="50%" r="50%">
            <Stop offset="0%" stopColor="#BD7CBE" stopOpacity="0.3" />
            <Stop offset="100%" stopColor="#121212" stopOpacity="1" />
          </RadialGradient>
  
          {/* Blue Glow */}
          <RadialGradient id="grad2" cx="50%" cy="50%" r="50%">
            <Stop offset="0%" stopColor="#5B60F6" stopOpacity="0.4" />
            <Stop offset="100%" stopColor="#121212" stopOpacity="0" />
          </RadialGradient>
  
          {/* Yellow Glow */}
          <RadialGradient id="grad3" cx="50%" cy="50%" r="50%">
            <Stop offset="0%" stopColor="#BBBE7C" stopOpacity="0.4" />
            <Stop offset="100%" stopColor="#121212" stopOpacity="0" />
          </RadialGradient>
        </Defs>
  
        <Circle cx="20%" cy="15%" r="40%" fill="url(#grad1)" />
        <Circle cx="100%" cy="70%" r="50%" fill="url(#grad2)" />
        <Circle cx="20%" cy="100%" r="80%" fill="url(#grad3)" />
      </Svg>
    );
  }

// section component for section title + horizontal song list
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
        <View style={{ flex: 1, backgroundColor: '#121212' }}>
            <BackgroundGlow />
            <ScrollView style={styles.container}>
                {/* Perfect For You */}
                <Section title="Perfect for You" data={placeholderSongs}/> 

                {/* Try Something New */}
                <Section title="Try Something New" data={placeholderSongs} />

                {/* Recently Played */}
                <Section title="Recently Played" data={placeholderSongs} />

                {/* Popular with Friends */}
                <Section title="Popular with Friends" data={placeholderSongs} />
            </ScrollView>
        </View>
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
        shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: 8,
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