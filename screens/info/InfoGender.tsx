import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ButtonGroup, Button } from "@rneui/themed";
import { NextBtn } from "../../components/info/InfoBtn";

export default function InfoGender({ navigation }: { navigation: any }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [gender, setGender] = useState("남자");
  const genderList = ["남자", "여자"];

  return (
    <>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
        }}
      >
        성별을 입력해주세요
      </Text>
      <ButtonGroup
        buttons={genderList}
        selectedIndex={selectedIndex}
        containerStyle={{ margin: 16 }}
        onPress={(value) => {
          setSelectedIndex(value);
          setGender(genderList[value]);
        }}
      />
      <NextBtn
        onPress={() =>
          navigation.navigate("InfoAge" as never, {
            user_id: "3258378056",
            gender: gender,
          })
        }
      />
    </>
  );
}