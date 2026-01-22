import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function ModalScreen() {
  return (
    <View className="flex-1 items-center justify-center p-5">
      <Text className="text-3xl font-bold leading-8 mb-0">This is a modal</Text>
      <Link href="/" dismissTo className="mt-4 py-4">
        <Text className="text-base leading-[30px] text-[#0a7ea4]">Go to home screen</Text>
      </Link>
    </View>
  );
}
