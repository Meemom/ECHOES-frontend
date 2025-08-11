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
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';

// fake reviews
const reviews = [
    {
        id: '1', 
        title: 'DARK THOUGHTS', 
        artist: 'Lil Tecca', 
        type: 'song',
        image: require('@/assets/images/DOPAMINE.png') , 
        year: '2025', 
        review: "Tecca recalls advice from his mother warning him that people who don’t stay focused or move smart in life 'don’t last.' ", 
        reviewDate: '2025-08-10', 
        rating: 4,
        username: '@The Sound of Meowsic',
        source: 'user',
    },
    {
        id: '2', 
        title: "DON'T TAP THE GLASS", 
        artist: 'Tyler, The Creator', 
        type: 'album',
        image: require('@/assets/images/donttaptheglass.jpeg') , 
        year: '2025', 
        review: "everything slaps idk", 
        reviewDate: '2025-08-10', 
        rating: 5,
        username: '@The Sound of Meowsic',
        source: 'user',
    },
    {
        id: '3', 
        title: 'Seigfried', 
        artist: 'Frank Ocean', 
        type: 'song',
        image: require('@/assets/images/seigfried.jpg') , 
        year: '2016', 
        review: "Frank speaks about his interest in pursuing the American Dream and “settling down” to start a family with two children and a swimming pool. In the lines before, he claims he’d prefer to leave the limelight of fame.", 
        reviewDate: '2025-08-09', 
        rating: 5,
        username: '@Badb1tch',
        source: 'friend',
    },
    {
        id: '4', 
        title: 'Come To My Garden', 
        artist: 'Minnie Riperton', 
        type: 'song',
        image: require('@/assets/images/cometomygarden.jpeg') , 
        year: '1970', 
        review: "WHY IS THIS SOOOO GOOD SUCH A CLASSIC UGHHH I FEEL LIKE A GIRL", 
        reviewDate: '2025-08-01', 
        rating: 5,
        username: '@girlyp0p',
        source: 'following',
    },
];

export default function UserReviews() {

    function ReviewCard({ data }) {
        return (
            <View style={styles.reviewCard}>
                <ThemedText>{data.source === 'user'? 'You' : data.username} reviewed {data.title}</ThemedText>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    reviewCard: {
        backgroundColor: '#222222',
        flex: 1,
    },
    reviewText: {

    },
    reviewTitle: {

    },
    reviewDate: {

    },
});