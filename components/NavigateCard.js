import { GOOGLE_MAPS_KEY } from "@env";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import NavFavorites from "./NavFavorites";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white flex-1">
      <Text className="text-center py-5 text-xl">Good Morning, Syket</Text>
      <View className="border-t border-gray-200 flex-shrink">
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            styles={toInputBoxStyle}
            query={{
              key: GOOGLE_MAPS_KEY,
              language: "en",
            }}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details?.geometry?.location,
                  description: data?.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
            debounce={400}
            nearbyPlacesAPI="GooglePlacesSearch"
            enablePoweredByContainer={false}
          />
        </View>
        <NavFavorites />
      </View>
      <View className="flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100">
        <TouchableOpacity
          onPress={() => navigation.navigate("RideOptionsCard")}
          className="flex-row bg-black w-24 px-4 py-3 rounded-full justify-between items-center"
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text className="text-white text-center">Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row bg-white w-24 px-4 py-3 rounded-full justify-between items-center">
          <Icon name="car" type="font-awesome" color="black" size={16} />
          <Text className="text-black text-center">Rides</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default NavigateCard;

toInputBoxStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 0,
    paddingBottom: 0,
  },
});
