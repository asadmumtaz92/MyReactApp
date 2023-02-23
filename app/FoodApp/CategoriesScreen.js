import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import CategoryGridTile from './components/CategoryGridTile'
import { CATEGORIES } from './constantData/dummy_data'

const CategoriesScreen = () => {

    const navigation = useNavigation()

    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealsOverview', { item: itemData.item })
        }

        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        )
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default CategoriesScreen
