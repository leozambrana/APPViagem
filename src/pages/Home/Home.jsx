import { View, Text} from 'react-native';
import React from 'react';


import AnimatedLottieView from 'lottie-react-native';
import travelerAnimation from '../../assets/animation/traveler_walking.json';

const Home = () => {
  return (
    <View className="flex flex-1">
        <View className="h-1/2 w-11/12">
            <AnimatedLottieView style={{margin: 'auto'}}
                  autoPlay source={travelerAnimation} loop
              />       
        </View>

        <View className="h-1/2 flex flex-row justify-center items-center bg-[#add8e6] rounded-3xl opacity-80 ">
          <View className="flex flex-col">
              <Text className="font-bold text-2xl text-center text-[#0064ff]">
                  Bem Vindo
              </Text>
              <Text className="font-medium text-xl text-[#00bfff] ">
                Aqui encontrará seu lugar preferido
              </Text>
          </View>
        </View>

    </View>
  )
}

export default Home