import { Steps } from '@/components/steps'
import { Welcome } from '@/components/welcome'
import { View } from 'react-native'

export default function Index() {
    return (
        <View style={{ flex: 1, padding: 40, gap: 40 }}>
            {/* <Text style={{ fontSize: 22 }}>Hello React Native</Text> */}
            <Welcome />
            <Steps />
        </View>
    )
}