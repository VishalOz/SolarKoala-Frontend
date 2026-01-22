import React from 'react';
import { Stack } from 'expo-router';
import TourFlow from '../features/tour/screens/TourFlow';

export default function TourRoute() {
    return (
        <>
            <Stack.Screen options={{ headerShown: false, animation: 'slide_from_right' }} />
            <TourFlow />
        </>
    );
}
