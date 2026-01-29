/* 
Author: Dinura Sasmitha
Created: 2026-01-19 DS0043 Welcome Screen UI
Description: Implements the Welcome Screen Layout and navigation logic 
Last Update: 2026-01- DS0043 Initial implementation
*/

/*import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';

export const WelcomePage = () => {
  const router = useRouter();
  const handleGetStarted = () => {
    router.push('/tour');
  };

  const handleSignIn = () => {
    // Navigate to sign in
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center px-6">
        {/* Welcome Title */
/*<View className="flex-row items-center flex-wrap justify-center mb-4">
  <Text className="text-[28px] font-semibold text-[#11181C]">Welcome to Solar </Text>
  <View className="bg-black px-3 py-1.5 rounded-full">
    <Text className="text-[28px] font-semibold text-white">Koala</Text>
  </View>
</View>

{/* Tagline */
/*/<Text className="text-base text-[#687076] text-center mb-10 leading-6">
  Your intelligent solar partner for a brighter tomorrow
</Text>

{/* Logo */
/*<Image
  source={require('../../../public/assets/Logo.png')}
  className="w-[200px] h-[200px] mb-12 border-2 border-white"
  contentFit="contain"
/>

{/* Get Started Button */
/*</*TouchableOpacity
  className="bg-black py-4 px-12 rounded-full w-full items-center mb-6" 
  onPress={handleGetStarted}
>
  <Text className="text-white text-lg font-semibold">Get Started</Text>
</TouchableOpacity>

{/* Sign In Link */
/*<View className="flex-row items-center">
  <Text className="text-sm text-[#687076]">Already have an account? </Text>
  <TouchableOpacity onPress={handleSignIn}>
    <Text className="text-sm text-[#0a7ea4] font-semibold">Sign In</Text>
  </TouchableOpacity>
</View>
</View>
</SafeAreaView>
);
};

export default WelcomePage;
*/