import { View, Image, Text} from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router"
import { Feather } from "@expo/vector-icons"

import { Button } from "@/components/button"
import { PRODUCTS } from "@/utils/products";
import { formatCurrency } from "@/utils/functions/format-currency";
import { LinkButton } from "@/components/link-button";
import { useCartStore } from "@/stores/cart-store";

export default function Product() {
    const cartStore = useCartStore()
    const navigation = useNavigation()
    const { id } = useLocalSearchParams()

    const product = PRODUCTS.filter(( item ) => item.id === id)[0]
    console.log(cartStore.products)

    function handleAddToCart() {
        cartStore.add(product)
        navigation.goBack()
    }

    return(
        <View className="flex-1">
            <Image 
                source={product.cover}
                className="w-full h-52"
                resizeMode="cover"
                alt=''
            />
            <View className="p-5 mt-8 flex-1">
                <View className="flex-row ml-4">
                    <Text className="text-lime-400 text-2xl font-heading">{product.title}</Text>
                    <Text className="text-lime-400 text-2xl font-heading">
                        {formatCurrency(product.price)}
                    </Text>
                </View>

                <Text className="text-slate-400 font-body text-base leading-6 mb-6">
                    {product.description}
                </Text>
                {
                    product.ingredients.map((ingredient) => (
                        <Text key={ingredient} className="text-slate-400 font-body text-base leading-6">
                           {"\u2022"} {ingredient}
                        </Text>
                    ))
                }
            </View>

            <View className="p-5 -b-8 gap-5">
                <Button onPress={handleAddToCart}>
                    <Button.Icon>
                        <Feather name="plus-circle" size={20} />
                    </Button.Icon>
                    <Button.Text>
                        Adicionar ao Pedido
                    </Button.Text>
                </Button>

                <LinkButton title="Voltar ao cardápio" href="/"/>
            </View>
        </View>
    )

}