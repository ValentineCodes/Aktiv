import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Button as RNButton, Text } from "native-base"

type Props = {
    title: string;
    type?: "normal" | "outline";
    loading?: boolean;
    disabled?: boolean;
    style?: any;
    onPress: () => void;
}

export default function Button({ title, type, loading, disabled, style, onPress }: Props) {
    if (type === "outline") {
        return <RNButton py="3" borderRadius={15} bgColor="#E8F7ED" disabled={disabled || loading} style={[style]} w="full" onPress={onPress} _pressed={{ backgroundColor: 'rgba(39, 184, 88, 0.2)' }}>{loading ? <ActivityIndicator color={"cyan.300"} /> : <Text color={"cyan.300"} bold fontSize="md">{title}</Text>
        }</RNButton >
    }
    return (
        <RNButton py="3" borderRadius={15} bgColor={disabled ? "#2A974D" : "cyan.300"} disabled={disabled || loading} style={[style]} w="full" onPress={onPress} _pressed={{ opacity: 0.8 }}>{loading ? <ActivityIndicator color="white" /> : <Text color="white" bold fontSize="md">{title}</Text>}</RNButton >
    )
}