import React, { useState, useRef, useMemo } from 'react';
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

function getDailyColors(numColors) {
    const today = new Date().toDateString();
    let seed = today.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const colors = [];
    for (let i = 0; i < numColors; i++) {
      seed = (seed * 9301 + 49297) % 233280;
      const rand = seed / 233280;
      const color = `hsl(${Math.floor(rand * 360)}, 70%, 60%)`;
      colors.push(color);
    }
    return colors;
  }
  
export default function RandomColors() {
    const colors = getDailyColors(6);
  
    return (
      <View style={styles.container}>
        {colors.map((color, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.tile, { backgroundColor: color }]}
            onPress={() => {
              console.log("Random song for tile", index + 1);
            }}
          />
        ))}
      </View>
    );
}

export default function SearchPage() {
    return (
        <View style={{ flex: 1, backgroundColor: '#121212' }}>
            <BackgroundGlow colors={['#D062FF', '#44E7E7', 'white']}/>
            <ScrollView style={{ flex: 1 }}>
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
        justifyContent: "space-between",
        gap: 10, 
        padding: 20,
      },
      tile: {
        width: "48%", 
        height: 120,
        borderRadius: 12,
        marginBottom: 5,
        justifyContent: "center",
        alignItems: "center",
      },
      text: {
        color: "#fff",
        fontWeight: "bold",
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
        marginTop: 15,
        fontFamily: 'InterBold',
        fontSize: 24, 
        color: 'white',
        alignSelf: 'center',
    }

});