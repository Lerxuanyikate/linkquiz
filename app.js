import { useState } from 'react';
import { View, Text, Button, ToastAndroid, ScrollView, Image} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  // Store answers for each question
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');

  // Correct answers
  const correctAnswers = {
    q1: 'b',
    q2: 'a',
    q3: 'c',
  };

  const checkAnswers = () => {
    let score = 0;

    if (answer1 === correctAnswers.q1) score++;
    if (answer2 === correctAnswers.q2) score++;
    if (answer3 === correctAnswers.q3) score++;

    ToastAndroid.show(`You have ${score} correct answers!`, ToastAndroid.SHORT);
  };

  return (
    <ScrollView style={{ padding: 20, marginTop: 50, marginBottom: 100 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20 }}>Link Quiz</Text>
      <Text> What game is this Link from? </Text>
      <Image src="https://cdn.wikimg.net/en/zeldawiki/images/4/4d/TWW_Link_Wind_Waker_Artwork.png" 
      alt="Wind Waker" style={{ width: 200, height: 200}} />
      <Picker
        selectedValue={answer1}
        onValueChange={(value) => setAnswer1(value)}
      >
        <Picker.Item label="Choose one" value="" />
        <Picker.Item label="Age of Calamity" value="a" />
        <Picker.Item label="Wind Waker" value="b" />
        <Picker.Item label="Link's Awakening" value="c" />
      </Picker>

      <Text> What game is this Link from? </Text>
      <Image src="https://i.pinimg.com/736x/d7/1c/87/d71c8736bed63cb8d747ec3a8734b10a--the-paw-to-draw.jpg" 
      alt="Ocarina of Time" style={{ width: 200, height: 300}} />
      <Picker
        selectedValue={answer2}
        onValueChange={(value) => setAnswer2(value)}
      >
        <Picker.Item label="Choose one" value="" />
        <Picker.Item label="Ocarina of Time" value="a" />
        <Picker.Item label="Breath of the Wild" value="b" />
        <Picker.Item label="Legend of Zelda II" value="c" />
      </Picker>

      <Text> What game is this Link from? </Text>
      <Image src="https://tse2.mm.bing.net/th/id/OIP.XaTgqAMKgnjXnuNOhNDT5AHaGd?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3" 
      alt="Twilight Princess" style={{ width: 200, height: 200}} />
      <Picker
        selectedValue={answer3}
        onValueChange={(value) => setAnswer3(value)}
      >
        <Picker.Item label="Choose one" value="" />
        <Picker.Item label="Echoes of Wisdom" value="a" />
        <Picker.Item label="Spirit Tracks" value="b" />
        <Picker.Item label="Twilight Princess" value="c" />
      </Picker>

      <Button title="Submit Answers" onPress={checkAnswers} />
    </ScrollView>
  );
}
