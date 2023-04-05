import React, { useState } from 'react';
import { ImageBackground, Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!name || !email || !password) {
      alert('Preencha todos os campos para continuar.');
      return;
    }

    if (!validateEmail(email)) {
      alert('Email inválido. Por favor, digite um email válido.');
      return;
    }

    if (password.length < 6) {
      alert('Senha inválida. A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    // Adicione aqui a lógica para registrar o usuário, por exemplo:
    const user = {
      name: name,
      email: email,
      password: password
    };

    console.log(user);

    // Se o registro for bem-sucedido, navegue para a tela de login.
    // Exemplo:
    navigation.navigate('Login');
  }

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  function handleDismissKeyboard() {
    Keyboard.dismiss();
  }

  return (
    <ImageBackground
      source={require('../../assets/img/2560x1600-340019-Lofi-Chillhop-Raccoon-Night-Camping-Bonfire-Digital-Art.jpg')}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
        <View className="flex flex-1 items-center justify-center p-5">
          <Text className="text-2xl font-bold mb-8 text-[#c0f3ff]">Cadastro</Text>
          <TextInput
            className="w-full h-12 border-b-2 border-[#0A1021] text-[#c0f3ff] text-lg rounded-md px-4 mb-8"
            placeholder="Nome"
            placeholderTextColor="#fff"
            onChangeText={setName}
            value={name}
          />
          <TextInput
            className="w-full h-12 border-b-2 border-[#0A1021] text-[#c0f3ff] text-lg rounded-md px-4 mb-8"
            placeholder="Email"
            placeholderTextColor="#fff"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            className="w-full h-12 border-b-2 border-[#0A1021] text-[#c0f3ff] text-lg rounded-md px-4 mb-8"
            placeholder="Senha"
            placeholderTextColor="#fff"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          <View className="flex flex-row gap-10 justify-center">
            <TouchableOpacity className="py-3 px-7 rounded-md border-2 border-[#0A1021] bg-[#222e3fa5]" onPress={() => navigation.navigate('Login')}>
              <Text className="text-[#c0f3ff] text-lg font-bold">Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity className="py-3 px-7 rounded-md border-2 border-[#0A1021] bg-[#222e3fa5]" onPress={handleRegister}>
              <Text className="text-[#c0f3ff] text-lg font-bold">Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}