import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { TourScreen } from '../components/TourScreen';

// Data for the 5 Tour Steps based on the design
const TOUR_STEPS = [
    {
        id: 1,
        title: 'Instant Tracking',
        description: (
            <>
                Instantly track your energy{'\n'}
                <Text style={{ color: '#2E8B57' }}>flow</Text> as it happens
            </>
        ),
        backgroundColor: '#E8F5E9',
        accentColor: '#2E8B57',
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
        backgroundColor: '#FFF8E1',
        accentColor: '#FBC02D',
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
        backgroundColor: '#E0F7FA',
        accentColor: '#0097A7',
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
        backgroundColor: '#F3E5F5',
        accentColor: '#7B1FA2',
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
        backgroundColor: '#FAFAFA',
        accentColor: '#9E9E9E',
        imagePlaceholder: undefined,
    },
];

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
        if (router.canGoBack()) {
            router.replace('/(tabs)/explore');
        } else {
            router.replace('/(tabs)/explore');
        }
    };

    const handleClose = () => {
        router.back();
    };

    const step = TOUR_STEPS[currentStepIndex];

    return (
        <View className="flex-1">
            <TourScreen
                title={step.title}
                description={step.description}
                stepCurrent={currentStepIndex + 1}
                stepTotal={TOUR_STEPS.length}
                backgroundColor={step.backgroundColor}
                accentColor={step.accentColor}
                imagePlaceholder={step.imagePlaceholder}
                onNext={handleNext}
                onClose={handleClose}
                isLastStep={currentStepIndex === TOUR_STEPS.length - 1}
            />
        </View>
    );
}
