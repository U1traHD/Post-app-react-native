import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { globalStyle } from "../styels/styel";

export default function Main({ navigation }) {
  const [news, setNews] = useState([
    {
      name: "Audi",
      anons: "Audi это топ",
      full: "Audi RS 7 — спортивный пятидверный фастбэк класса Гран Туризмо выпускаемый подразделением Audi Sport GmbH на платформе Audi A7. Автомобиль был представлен 16 января 2013 года на Североамериканском международном салоне в Детройте.",
      key: "1",
      img: "https://img3.fonwall.ru/o/vs/2023-audi-tuning-nrpn.jpeg?auto=compress&fit=resize&w=1200&display=large",
    },
    {
      name: "Windows",
      anons: 'Почему Windows 11 "хорошая" система?',
      full: "Вот несколько причин, по которым многие считают, что Windows 11 — отстой: Требования к оборудованию непомерно высоки, особенно к TPM. Панель задач Windows 11 менее персонализирована. Меню «Пуск» в Windows 11 слишком упрощено и не имеет функций.  Автономные локальные учётные записи недоступны для Windows 11 Домашняя. Пользовательский интерфейс Windows 11 иногда требует слишком много щелчков мышью.",
      key: "2",
      img: "https://img3.fonwall.ru/o/jj/abstraction-blue-curves-cccc.jpg?auto=compress&fit=resize&w=1200&display=large",
    },
    {
      name: "Программирование",
      anons: "Новости из мира IT",
      full: "Компания «Дабл Ю Экспо» создала на основе робототехнической платформы Robo‑C от компании «Промобот» антропоморфного робота «Арди». По словам создателей, робот обладает анатомичным движением механики, широким диапазоном микромимики и эластичной силиконовой кожей. «Арди» был представлен разработчиками на международной выставке‑форуме «Россия» на ВДНХ.",
      key: "3",
      img: "https://fikiwiki.com/uploads/posts/2022-02/1644890755_11-fikiwiki-com-p-kartinki-yazikov-programmirovaniya-14.jpg",
    },
  ]);

  return (
    <View style={globalStyle.main}>
      <Text style={[globalStyle.title, styles.header]}>Главная страница</Text>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("FullInfo", item)}
          >
            <Image
              source={{
                width: "100%",
                height: 200,
                uri: item.img,
              }}
            />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 15,
  },
  item: {
    width: "100%",
    marginBottom: 5,
  },
  title: {
    fontFamily: "Pacifico-R",
    fontSize: 22,
    textAlign: "center",
    marginTop: 5,
    color: "#474747",
  },
  anons: {
    fontFamily: "Caveat-V",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#474747",
  },
});
