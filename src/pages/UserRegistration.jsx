import React, { createContext, useContext, useState } from 'react';
import Layout from '../components/Layout'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../components/UserContext'; 

const H1 = styled.h1`
    margin-top: 100px;
`

const Input = styled.input`
    padding: 10px;
    margin-top: 50px;
    width: 400px;
    height: 50px;
    font-size: 25px;
`
const RadioGroup = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    font-size: 25px;
`

const RadioWrapper = styled.label`
  align-items: center;
  gap: 5px;
  margin-right: 50px;
`



const RadioInput = styled.input`
  accent-color: #007bff;
  width: 40px;
  height: 40px;
`

const RadioLabelText = styled.span`
  display: inline-block;
  width: 100px; 
`;

const ButtonGroup = styled.div`
    margin-top: 70px;
    display: flex;
    flex-direction: row;
`
const Button = styled.button`
    margin-right: 30px;
    font-size: 20px;
    border: 1px solid;   
`

const UserRegistration = () => {
    const [name, setName] = useState('');
    const [userState, setUserState] = useState('online');
    const [age,setAge] = useState('');
    const { userList, setUserList } = useUserContext();
    const navigator = useNavigate();
    const [gender, setGender] = useState('man');

    const handleSubmit = () => {
        const newUser ={
            id: Date.now(),
            name: name,
            age: age,
            userState: userState,
            gender: gender
        }

        setUserList(prev => [...prev,newUser]);

        console.log("저장된 유저목록:",[...userList,newUser]);

        navigator("/");
    }

    return (
        <Layout direction={"column"} justify={"flex-start"} >
            <H1>유저 등록</H1>
            <Input
                type='text'
                placeholder='이름을 입력하세요.'
                value={name}
                onChange= {(e) => { setName(e.target.value) }}
            />
            <Input 
                style={{margin:30}}
                type='text'
                placeholder='나이를 입력하세요.'
                value={age}
                onChange = {(e) => {setAge(e.target.value)}}
            />
         
            <RadioGroup>
                <RadioWrapper>
                    <RadioInput 
                    type="radio" 
                    name="userState" 
                    value="online"
                    checked= {userState === 'online'}
                    onChange={(e) => {setUserState("online")}} />
                    <RadioLabelText>온라인</RadioLabelText>
                </RadioWrapper>
                <RadioWrapper>
                    <RadioInput 
                    type="radio" 
                    name="userState" 
                    value="offline"
                    checked= {userState === "offline"}
                    onChange={(e) => {setUserState("offline")}} />
                    <RadioLabelText>오프라인</RadioLabelText>
                </RadioWrapper>
            </RadioGroup>
            <RadioGroup>
                <RadioWrapper>
                    <RadioInput 
                    type="radio" 
                    name="gender" 
                    value="man"
                    checked= {gender === "man"}
                    onChange={(e) => {setGender("man")}} />
                    <RadioLabelText>남자</RadioLabelText>
                </RadioWrapper>
                <RadioWrapper>
                    <RadioInput 
                    type="radio" 
                    name="gender" 
                    value="woman"
                    checked= {gender === "woman"}
                    onChange={(e) => {setGender("woman")}} />
                    <RadioLabelText>여자</RadioLabelText>
                </RadioWrapper>
            </RadioGroup>
            <ButtonGroup>
                <Button onClick={handleSubmit}>저장하기</Button>
                <Button onClick={() => {navigator("/")}}>취소하기</Button>
            </ButtonGroup>
        </Layout>
    )
}

export default UserRegistration