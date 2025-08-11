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

    const [selectedTab, setSelectedTab] = useState('You');

    function ReviewCard({ data }) {
        return (
                <TouchableOpacity style={styles.reviewCard}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                        <ThemedText style={{ fontFamily: 'InterLight', color: 'white' }}>
                            {data.source === 'user' ? 'You' : data.username} reviewed
                        </ThemedText>
                        <ThemedText style={styles.reviewTitle}>{data.title}</ThemedText>
                        <ThemedText style={styles.reviewYear}>{data.year}</ThemedText>
                        </View>
                        <ThemedText style={styles.reviewDate}>{data.reviewDate}</ThemedText>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Image source={data.image} style={styles.reviewImage} />
                        <ThemedText style={styles.reviewText} numberOfLines={3}>
                        {data.review}
                        </ThemedText>
                    </View>
                </TouchableOpacity>
        );
    }

    return (
    <ScrollView style={{ flex: 1, backgroundColor: '#101010' }}>

        {/* friends/you/following toggle */}
        <View style={{ alignItems: 'center', marginVertical: 20 }}>
            <View style={[styles.toggleContainer, { flexDirection: 'row' }]}>
                {['Friends', 'You', 'Followers'].map(tab => (
                <TouchableOpacity
                    key={tab}
                    style={[
                    styles.toggleButton,
                    selectedTab === tab && styles.activeToggle,
                    ]}
                    onPress={() => setSelectedTab(tab)}
                >
                    <ThemedText
                    style={[
                        styles.toggleText,
                        selectedTab === tab && styles.activeToggleText,
                    ]}
                    >
                    {tab}
                    </ThemedText>
                </TouchableOpacity>
                ))}
            </View>
        </View>

        <View>
    {reviews
        .filter(review => {
            if (selectedTab === 'You') return review.source === 'user';
            if (selectedTab === 'Friends') return review.source === 'friend';
            if (selectedTab === 'Followers') return review.source === 'following';
            return true;
        })
        .map((review, index) => (
            <ReviewCard key={index} data={review} />
        ))
    }
</View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    reviewCard: {
        backgroundColor: '#222222',
        flex: 1,
    },
    reviewText: {
        fontFamily: 'InterLight',
        fontSize: 13,
        alignSelf: 'flex-start',
        color: 'white',
    },
    reviewTitle: {
        fontFamily: 'InterRegular',
        fontSize: 16,
        color: 'white',
    },
    reviewYear: {
        fontFamily: 'InterMedium',
        fontSize: 15,
        opacity: 0.4,
        color: 'white',
    },
    reviewDate: {
        fontFamily: 'InterExtraLight',
        fontSize: 15,
        color: 'white',
    },
    reviewImage: {
        width: 78,
        height: 78,
    },
    toggleContainer: {
        backgroundColor: '#5B60F6',
        borderRadius: 30,
        padding: 9,
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    toggleButton: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        marginHorizontal: 4,
    },
    activeToggle: {
        backgroundColor: 'white',
    },
    toggleText: { color: 'black', fontFamily: 'InterBold', fontSize: 20 },
    activeToggleText: { color: 'black' },
});