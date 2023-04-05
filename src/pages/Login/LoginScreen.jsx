import React, { useState } from 'react';
import { ImageBackground, Keyboard, Platform, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
  if (!email || !password) {
    alert('Preencha o email e a senha para continuar.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Email inválido. Por favor, digite um email válido.');
    return;
  }

  // Adicione aqui a lógica para validar a senha, por exemplo:
  if (password.length < 6) {
    alert('Senha inválida. A senha deve ter pelo menos 6 caracteres.');
    return;
  }

  // Se o email e a senha forem válidos, navegue para a tela principal.
  // Exemplo:
  navigation.navigate('Home')
}

const validateEmail = (email) => {
  // Expressão regular para validar o email
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function handleDismissKeyboard() {
  Keyboard.dismiss()
}

  return (
    <ImageBackground
    source={require('../../assets/img/2560x1600-340019-Lofi-Chillhop-Raccoon-Night-Camping-Bonfire-Digital-Art.jpg')}
    className="flex flex-1"
    >
      <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
        <View className="flex flex-1 items-center justify-center p-5">
          <Text className="text-2xl font-bold absolute top-44 text-[#c0f3ff]">TRAVELERS APP</Text>
          <Text className="text-2xl font-bold mb-8 text-[#c0f3ff]">Login</Text>
          <TextInput
            className="w-full h-12 border-b-2 border-[#0A1021] text-[#c0f3ff] text-lg rounded-md px-4 mb-8"
            placeholder="Email"
            placeholderTextColor="#c0f3ff"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            className="w-full h-12 border-b-2 border-[#0A1021] text-[#c0f3ff] text-lg rounded-md px-4 mb-8"
            placeholder="Senha"
            placeholderTextColor="#c0f3ff"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          <View className="flex flex-row gap-10">
            <TouchableOpacity className="py-3 px-7 rounded-md border-2 border-[#0A1021] bg-[#222e3fa5]" onPress={handleLogin}>
              <Text className="text-[#c0f3ff] text-lg font-bold">Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity className="py-3 px-7" onPress={() => navigation.navigate('Signup')}>
              <Text className="text-[#c0f3ff] text-lg font-bold underline">Cadastre aqui!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>  
  );
}
