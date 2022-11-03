import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    // Link,
    Stack,
    Image,
} from '@chakra-ui/react';

export default function Login() {

    const Nav = useNavigate()

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    let url = "https://6362424c7521369cd068e030.mockapi.io/ToDoList"

    const postData = () => {
        axios.post(url, {

            Email,
            Password
        }).then(res => {
            console.log(res);
        })
    }
    return (
        <>
            <form action='/Pokemon'>
                <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                    <Flex p={8} flex={1} align={'center'} justify={'center'}>
                        <Stack spacing={4} w={'full'} maxW={'md'}>
                            <Heading fontSize={'2xl'}>Sign in to your account</Heading>
                            <FormControl id="email">
                                <FormLabel>username</FormLabel>
                                <Input type="text" onChange={e => { setEmail(e.target.value) }} />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input type="password" onChange={e => { setPassword(e.target.value) }} />
                            </FormControl>
                            <Stack spacing={6}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox>Remember me</Checkbox>
                                    <Link color={'blue.500'}>Forgot password?</Link>
                                </Stack>
                                {/* <button onClick={() => Nav("/Pokemon")}>Log in</button> */}
                                <button onClick={postData} >Login</button>

                                {/* <Button  colorScheme={'blue'} variant={'solid'}>
                            Sign in
                        </Button> */}
                            </Stack>
                        </Stack>
                    </Flex>
                    <Flex flex={1}>
                        <Image
                            alt={'Login Image'}
                            objectFit={'cover'}
                            src={
                                'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
                            }
                        />
                    </Flex>
                </Stack>
            </form>
        </>
    );
}
