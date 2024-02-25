import { TouchableOpacity, TouchableOpacityProps, Image, ImageProps, View, Text } from "react-native";
import { forwardRef } from "react";

type ProductProps = TouchableOpacityProps & {
    data: ProcuctDataProps
}

type ProcuctDataProps = {
    title: string
    description: string
    thumbnail: ImageProps
}

export const Product = forwardRef<TouchableOpacity, ProductProps>(
    ({ data, ...rest }, ref) => {
    return(
        <TouchableOpacity ref={ref} className="w-full flex-row items-center pb-4" {...rest}>
            <Image source={data.thumbnail} alt=""/>
            <View className="flex-1 ml-3">
                <Text className="text-white ml-2 font-body text-xl">{data.title}</Text>
                <Text className="text-white text-sm mt-0.5">{data.description}</Text>
            </View>
        </TouchableOpacity>
    )
})