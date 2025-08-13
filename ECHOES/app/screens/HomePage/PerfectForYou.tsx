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
import { BackgroundGlow } from '@/app/(tabs)/HomePage';
import { MaterialIcons } from '@expo/vector-icons';

const filterOptions=[
    'Song',
    'Genre',
    'Release Date',
];

export default function PerfectForYou() {
    const [selectedFilter, setSelectedFilter] = useState(filterOptions[0]);

    const handlePress = () => {
        const currentIndex = filterOptions.indexOf(selectedFilter);
        const nextIndex = (currentIndex + 1) % filterOptions.length;
        setSelectedFilter(filterOptions[nextIndex]);
      };    

    return (
        <View style={{ flex: 1, backgroundColor: '#121212' }}>
        <BackgroundGlow colors={['#5B60F6', '#BD7CBE', '#BBBE7C']}/>
            <ScrollView style={styles.container}>
                <ThemedText style={styles.headerTitle}>Our Picks For You</ThemedText>

                {/* filter bar */}
                <View style={styles.filterBar}>
                    <ThemedText style={styles.filterLabel}>Sort by</ThemedText>
                    <TouchableOpacity style={styles.filterButton}>
                        <ThemedText style={styles.filterButtonText}>{selectedFilter}</ThemedText>
                        <MaterialIcons name="close" size={20} color="white" style={{ marginLeft: 6 }} /> 
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    headerTitle: {
        fontSize: 24,
        fontFamily: 'interBold',
        color: 'white',
        padding: 30,
      },
    filterBar: {
        flexDirection: 'row',
        alignItems: 'center', // ensures vertical alignment
        justifyContent: 'space-between', // keeps "Sort by" on the left and button on the right
        width: '80%',
        height: 44,
        borderRadius: 20,
        backgroundColor: 'black',
        opacity: 0.9,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: 8,
        alignSelf: 'center',
        paddingHorizontal: 12,
      },
      filterLabel: {
        fontFamily: 'InterLight',
        fontSize: 18,
        color: 'white',
      },
      filterButton: {
        backgroundColor: '#5B60F6',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 6,
        flexDirection: 'row',
        alignItems: 'center',
        width: '70%',
        justifyContent: 'space-between',
      },
      filterButtonText: {
        fontFamily: 'InterMedium',
        fontSize: 16,
        color: 'white',
      },
    });