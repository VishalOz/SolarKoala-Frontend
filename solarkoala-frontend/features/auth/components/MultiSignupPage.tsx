/* 
Author: Dinura Sasmitha
Created: 2026-01-20 - DS0043 - Multi Signup Screen UI
Description: Implements the Multi-Signup selection screen with Google and Email options.
Last Update: SolarKoala - 2026-01-20 - DS0043 - Initial creation
*/

/*import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';

const { width, height } = Dimensions.get('window');

export const MultiSignupPage = () => {
    const handleGoogleSignup = () => {
        console.log('Google Signup stubbed');
    };

    const handleEmailSignup = () => {
        console.log('Navigate to Email Signup stubbed');
    };

    return (
        <SafeAreaView className="flex-1 bg-[#FAF9F6]">
            <View className="flex-1 items-center px-10 pb-10 justify-center">
                {/* Koala Image */
/*<Image
    source={require('../../../public/assets/kolala1.jpg')}
    style={{ width: width * 0.75, height: height * 0.35 }}
    className="mb-10"
    contentFit="contain"
/>

{/* Title Section */
/*<View className="items-center mb-4">
    <Text className="text-[34px] font-extrabold text-[#0D1E2D] tracking-tight">
        A step Closer to
    </Text>
    <View className="items-center">
        <Text className="text-[34px] font-extrabold text-[#0D1E2D] tracking-tight">
            Smarter days
        </Text>
        <View className="h-0.5 bg-[#0D1E2D] w-full mt-1" />
    </View>
</View>

{/* Description */
/*<Text className="text-lg text-black text-center mb-12 leading-[26px] px-5">
    Create an account & take a step toward self care
</Text>

{/* Action Buttons */
/*<View className="w-full gap-4">
    <TouchableOpacity
        className="bg-white border border-[#E8EAED] rounded-xl h-16 justify-center w-full shadow-sm"
        onPress={handleGoogleSignup}
        activeOpacity={0.7}
    >
        <View className="flex-row items-center justify-center">
            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png' }}
                className="w-6 h-6 mr-4"
            />
            <Text className="text-lg font-medium text-black">Sign up with Google</Text>
        </View>
    </TouchableOpacity>

    <TouchableOpacity
        className="bg-white border border-[#E8EAED] rounded-xl h-16 justify-center w-full shadow-sm"
        onPress={handleEmailSignup}
        activeOpacity={0.7}
    >
        <View className="flex-row items-center justify-center">
            <Ionicons name="mail-outline" size={22} color="#000" style={{ marginRight: 16 }} />
            <Text className="text-lg font-medium text-black">Sign up with Email</Text>
        </View>
    </TouchableOpacity>
</View>
</View>
</SafeAreaView>
);
};

export default MultiSignupPage;
*/