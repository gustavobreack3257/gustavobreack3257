import { View, Text, TouchableOpacity} from 'react-native'
import { styles } from './styles'

type props = {
    name: string
    onRemove: () => void;
}

export function Tasks ({ name, onRemove }: props) {
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{ name }</Text>

                <TouchableOpacity style={styles.btn} onPress={onRemove}>
                    <Text style={styles.btnText}>
                        -
                    </Text>
                </TouchableOpacity>
            </View>

    )
}