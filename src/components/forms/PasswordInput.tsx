import React, { useState } from 'react'
import { Text, Pressable, HStack, VStack, Icon, Input } from 'native-base'
import Ionicons from "react-native-vector-icons/dist/Ionicons"

type Props = {
    placeholder?: string,
    value?: string;
    defaultValue?: string;
    infoText?: string | boolean | null;
    errorText?: string | boolean | null;
    onChange: (value: string) => void;
}

export default function PasswordInput({ placeholder, value, defaultValue, infoText, errorText, onChange }: Props) {
    const [show, setShow] = useState(false)

    return (
        <VStack space={2}>
            <Input
                defaultValue={defaultValue}
                value={value}
                borderRadius="lg"
                variant="filled"
                fontSize="xs"
                focusOutlineColor={"cyan.300"}
                InputRightElement={
                    <HStack space={1}>
                        {value && (
                            <Pressable onPress={() => onChange("")}>
                                <Icon as={<Ionicons name="close-outline" />} size={5} mr="2" color="muted.400" />
                            </Pressable>
                        )}
                        <Pressable onPress={() => setShow(!show)} mr="2">
                            <Icon as={<Ionicons name={show ? "eye-outline" : "eye-off-outline"} />} size={5} mr="2" color="muted.400" />
                        </Pressable>
                    </HStack>
                }
                secureTextEntry={!show}
                placeholder={placeholder}
                onChangeText={onChange}
            />
            {infoText ? <Text fontSize="xs" color="muted.400">{infoText}</Text> : null}
            {errorText ? <Text fontSize="xs" color="red.400">{errorText}</Text> : null}
        </VStack>
    )
}