import { GOOGLE_MAPS_KEY } from "@env";
import React from "react";
import { Image, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import NavFavorites from "../components/NavFavorites";
import NavOptions from "../components/NavOptions";
import { setDestination, setOrigin } from "../slices/navSlice";

export default function App() {
  const dispatch = useDispatch();
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="flex-1 p-5 bg-white">
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />

        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          placeholder="Where are you from?"
          debounce={400}
          nearbyPlacesAPI="GooglePlacesSearch"
          query={{
            key: GOOGLE_MAPS_KEY,
            language: "en",
          }}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          fetchDetails={true}
          minLength={2}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details?.geometry?.location,
                description: data?.description,
              })
            );
            dispatch(setDestination(null));
          }}
        />

        <NavOptions />
        <NavFavorites />
      </View>
    </SafeAreaView>
  );
}
