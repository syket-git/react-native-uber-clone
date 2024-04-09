import { Icon } from "@rneui/themed";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Code street, London UK",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "London Eye, London, UK",
  },
];

const NavFavorites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View className="bg-gray-200 h-[1.5px]" />}
      renderItem={({ item }) => (
        <TouchableOpacity className="flex-row items-center p-5">
          <Icon
            name={item?.icon}
            style={{
              backgroundColor: "#DDDDDF",
              marginRight: 8,
              borderRadius: 30,
              padding: 6,
            }}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text className="font-semibold text-lg">{item?.location}</Text>
            <Text className="text-gray-500">{item?.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};
export default NavFavorites;
const styles = StyleSheet.create({});
