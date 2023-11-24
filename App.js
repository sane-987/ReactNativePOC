import { StatusBar } from "expo-status-bar";
import { Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import EntypoIcon from "react-native-vector-icons/Entypo";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function App() {
  return (
    <View style={tw`flex-1 bg-black`}>
      <StatusBar hidden />
      <View style={tw`flex-1 flex-row justify-between`}>
        <TouchableHighlight
          style={tw`bg-zinc-500 p-2 h-10 justify-center rounded-lg`}
        >
          <View style={tw`flex-1 flex-row items-center gap-2`}>
            <AntDesignIcon name="gift" color="white" size={20} />
            <Text style={tw`text-white text-base`}>Earn $250</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={tw`bg-zinc-500 p-2 h-10 w-10 items-center justify-center rounded-full`}
        >
          <EntypoIcon name="dots-three-horizontal" color="white" />
        </TouchableHighlight>
      </View>
      <View style={tw`flex-1 flex-row justify-end`}>
        <View>
          <TouchableOpacity style={tw`bg-zinc-500 rounded-full p-2 m-1`}>
            <AntDesignIcon name="user" color="white" size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-zinc-500 rounded-full p-2 m-1`}>
            <AntDesignIcon name="eyeo" color="white" size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-lime-300 rounded-full p-2 m-1`}>
            <FeatherIcon name="dollar-sign" color="black" size={30} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={tw`flex-1 gap-5`}>
        <View style={tw`flex-0.2 flex-row gap-4`}>
          <TouchableOpacity
            style={tw`rounded-full items-center justify-center w-32px h-40px bg-white`}
          >
            <AntDesignIcon name="user" color="black" size={20} />
          </TouchableOpacity>
          <View>
            <Text style={tw`text-3xl text-white font-bold`}>Profile Name</Text>
            <Text style={tw`text-xl text-white`}>Description</Text>
          </View>
        </View>

        <View style={tw`flex-0.4 flex-row gap-2 items-center w-full`}>
          <TouchableOpacity
            style={tw`bg-fuchsia-300 flex-0.2 flex-row p-2 gap-1 w-15 items-center rounded-2xl`}
          >
            <EntypoIcon name="bar-graph" color="black" size={10} />
            <Text style={tw`text-black`}>Text1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`bg-zinc-500 flex-0.2 flex-row p-2 gap-1 w-15 items-center rounded-2xl`}
          >
            <EntypoIcon name="location" color="white" size={10} />
            <Text style={tw`text-black`}>Text2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`bg-zinc-500 flex-0.2 flex-row p-2 w-15 items-center rounded-2xl`}
          >
            <EntypoIcon name="location" color="white" size={10} />
            <Text style={tw`text-black`}>Text3</Text>
          </TouchableOpacity>
        </View>
        <View style={tw`flex-0.2 flex-row items-center justify-around`}>
          <TouchableOpacity
            style={tw`bg-zinc-500 p-2 w-117.67px h-66px items-start  rounded-2xl`}
          >
            <Text style={tw`text-white text-xl font-bold`}>$1.5k</Text>
            <Text>Text1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`bg-zinc-500 p-2 w-117.67px h-66px items-start rounded-2xl`}
          >
            <Text style={tw`text-white text-xl font-bold`}>$1.5k</Text>
            <Text>Text2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`bg-zinc-500 p-2 w-117.67px h-66px items-start rounded-2xl`}
          >
            <Text style={tw`text-white text-xl font-bold`}>$1.5k</Text>
            <Text>Text3</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={tw`flex-0.2 flex-row bg-zinc-500 justify-around items-center w-361px h-44px ml-16px rounded-full`}
      >
        <TouchableOpacity style={tw` rounded-full`}>
          <AntDesignIcon name="user" color="white" size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={tw` rounded-full`}>
          <AntDesignIcon name="search1" color="white" size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={tw` rounded-full`}>
          <EntypoIcon name="bar-graph" color="white" size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={tw` rounded-full`}>
          <MaterialCommunityIcon name="soccer" color="white" size={20} />
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
