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
  TextInput, 
  Pressable,
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Defs, RadialGradient, Stop, Circle } from 'react-native-svg';
import { useRouter } from 'expo-router';
import { BackgroundGlow, Section } from './HomePage';
import { MaterialIcons } from '@expo/vector-icons';

// fake new releases
const NewReleases =[
    {id: 1, title: 'A Little More', image: require('@/assets/images/alittlemore.jpeg')},
    {id: 2, title: 'The Subway', image: require('@/assets/images/thesubway.jpeg')},
    {id: 3, title: 'act right', image: require('@/assets/images/actright.jpeg')},
];

function seededRandom(seed) {
    let x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function getDailyColors(numTiles) {
    const today = new Date().toISOString().slice(0, 10); 
    const seed = parseInt(today.replace(/-/g, "")); 
    const colors = [];

    for (let i = 0; i < numTiles; i++) {
        const r = Math.floor(seededRandom(seed + i) * 255);
        const g = Math.floor(seededRandom(seed + i + 1) * 255);
        const b = Math.floor(seededRandom(seed + i + 2) * 255);
        colors.push(`rgb(${r},${g},${b})`);
  }

  return colors;
}

function RandomColors() {
    const colors = getDailyColors(6);
    
    return (
        <View style={styles.container}>
          {colors.map((color, index) => (
            <Pressable
              key={index}
              style={[styles.tile, { backgroundColor: color }]}
              onPress={() => console.log(`Tile ${index + 1} pressed!`)}
            />
          ))}
        </View>
      );
}

export default function SearchPage() {
    return (
        <View style={{ flex: 1, backgroundColor: '#121212' }}>
            <BackgroundGlow colors={['#D062FF', '#44E7E7', 'white']}/>
            <ScrollView style={styles.container}>
                <View style={[styles.searchBar, { flexDirection: 'row' }]}>
                    <TouchableOpacity>
                        <MaterialIcons name="search" size={20} color="black" style={{ marginRight: 10 }}/>
                    </TouchableOpacity>
                    <TextInput 
                    placeholder='Search up a song!'/>
                </View>

                {/* pick a color */}
                <View>
                    <ThemedText style={styles.headerTitle}>Pick a color for a random song</ThemedText>
                    <RandomColors />

                </View>

                {/* new releases */}
                <Section title="New Releases" data={NewReleases}/>

                {/* TODO: unfamiliar genres */}


            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: 10,
      },
      tile: {
        width: 100,
        height: 100,
        margin: 5,
        borderRadius: 12,
      },
    searchBar: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: '80%',
        alignSelf: 'center',
        padding: 10,
        marginTop: 10, 
        marginBottom: 10
    },
    headerTitle: {
        fontFamily: 'InterBold',
        fontSize: 24, 
        color: 'white',
        alignSelf: 'center',
    }

});