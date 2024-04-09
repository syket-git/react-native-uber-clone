import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const NavOptions = () => {
  const origin = useSelector(selectOrigin);
  const navigation = useNavigation();
  const data = [
    {
      id: "123",
      title: "Get a ride",
      image: "https://links.papareact.com/3pn",
      screen: "MapScreen",
    },
    {
      id: "456",
      title: "Order food",
      image: "https://links.papareact.com/28w",
      screen: "EatsScreen",
    },
  ];
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            disabled={!origin}
            onPress={() => navigation.navigate(item?.screen)}
            className="p-2 pt-4 pb-8 bg-gray-200 m-2 w-40 h-[240px]"
          >
            <View
              className={` ${
                !origin && "opacity-20"
              } flex items-center justify-center`}
            >
              <Image
                style={{ width: 120, height: 120, resizeMode: "contain" }}
                source={{ uri: item?.image }}
              />
              <Text className="text-lg font-semibold mt-2">{item?.title}</Text>
              <Icon
                style={{
                  backgroundColor: "black",
                  padding: 4,
                  borderRadius: 30,
                  marginTop: 12,
                }}
                name="arrowright"
                type="antdesign"
                color="white"
              />
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};
export default NavOptions;
