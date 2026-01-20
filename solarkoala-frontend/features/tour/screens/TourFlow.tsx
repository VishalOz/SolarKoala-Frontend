import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { TourScreen } from '../components/TourScreen';

// Data for the 5 Tour Steps based on the design
const TOUR_STEPS = [
    {
        id: 1,
        title: 'Instant Tracking', // Short title for accessibility/metadata if needed, actual text is description in design
        description: (
            <>
                Instantly track your energy{'\n'}
                <Text style={{ color: '#2E8B57' }}>flow</Text> as it happens
            </>
        ),
        backgroundColor: '#E8F5E9', // Light Green
        accentColor: '#2E8B57', // Green
        imagePlaceholder: undefined,
    },
    {
        id: 2,
        title: 'Sync Devices',
        description: (
            <>
                Seamlessly sync all your{'\n'}
                <Text style={{ color: '#FBC02D' }}>devices</Text> into one smart{'\n'}network
            </>
        ),
        backgroundColor: '#FFF8E1', // Light Yellow
        accentColor: '#FBC02D', // Yellow/Orange
        imagePlaceholder: undefined,
    },
    {
        id: 3,
        title: 'Forecast Updates',
        description: (
            <>
                Stay prepared with{'\n'}
                <Text style={{ color: '#0097A7' }}>forecast-driven</Text> energy{'\n'}updates.
            </>
        ),
        backgroundColor: '#E0F7FA', // Light Blue/Cyan
        accentColor: '#0097A7', // Cyan
        imagePlaceholder: undefined,
    },
    {
        id: 4,
        title: 'Battery Health',
        description: (
            <>
                Know your battery <Text style={{ color: '#7B1FA2' }}>health</Text>{'\n'}anytime, anywhere
            </>
        ),
        backgroundColor: '#F3E5F5', // Light Purple
        accentColor: '#7B1FA2', // Purple
        imagePlaceholder: undefined,
    },
    {
        id: 5,
        title: 'Optimise Use',
        description: (
            <>
                Optimise your energy use{'\n'}with <Text style={{ color: '#9E9E9E' }}>intelligent</Text>{'\n'}suggestions
            </>
        ),
        backgroundColor: '#FAFAFA', // Light Grey
        accentColor: '#9E9E9E', // Grey
        imagePlaceholder: undefined,
    },
];
// Note: The Text component import needs to be inside the file for the JSX in description to work, 
// but since we are defining it outside, we might need to adjust or import Text in the array definition context?
// Actually, it's safer to just pass strings and highlights or render function. 
// For simplicity in this step, I'll refactor to pass the raw data and render logic inside the component 
// OR import Text here which is valid.

import { Text } from 'react-native';

export default function TourFlow() {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const router = useRouter();

    const handleNext = () => {
        if (currentStepIndex < TOUR_STEPS.length - 1) {
            setCurrentStepIndex(currentStepIndex + 1);
        } else {
            handleComplete();
        }
    };

    const handleComplete = () => {
        // Navigate back to home or login, based on app flow.
        // For now, let's assume it goes back to the main tabs or a specific dashboard
        if (router.canGoBack()) {
            // If we want to force them to explore, we might shouldn't go back, but replace?
            // User asked to proceed to explore page.
            router.replace('/(tabs)/explore');
        } else {
            router.replace('/(tabs)/explore');
        }
    };

    const handleClose = () => {
        // User skipped the tour
        router.back();
    };

    const step = TOUR_STEPS[currentStepIndex];

    return (
        <View style={styles.container}>
            <TourScreen
                title={step.title}
                description={step.description}
                stepCurrent={currentStepIndex + 1}
                stepTotal={TOUR_STEPS.length}
                backgroundColor={step.backgroundColor}
                accentColor={step.accentColor}
                imagePlaceholder={step.imagePlaceholder} // Will default to icon
                onNext={handleNext}
                onClose={handleClose}
                isLastStep={currentStepIndex === TOUR_STEPS.length - 1}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
