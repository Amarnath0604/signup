import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import Input from './Input'

const Sidebar = () => {
  return (
    <Container>
        <LogoWrapper>
            <img src={logo} alt="" />
            <h3>
                ZED <span>DIGITAL</span>
            </h3>
        </LogoWrapper>
        <Form>
            <h3>Sign Up</h3>
            <Input placeholder="Full Name"/>
            <Input type="email" placeholder="Email"/>
            <Input type="password" placeholder="Password"/>
            <Input type="password" placeholder="Confirm Password"/>
            <button>Sign Up</button>
        </Form>
        <div>
            <Terms>
                By signing up, I agree to the Privacy Policy <br /> and Terms of Service
            </Terms>
        </div>
        <h4>Already have an account? <span>Sign In</span></h4>
    </Container>
  )
}

const Terms = styled.p`
    padding: 0 1rem;
    text-align: center;
    font-size: 12px;
    color: #808080;
    font-weight: 300;
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        color: #666666;
        margin-bottom: 2rem;
    }

    button {
        width: 75%;
        max-width: 350px;
        min-width: 250px;
        height: 40px;
        border: none;
        margin: 1rem 0;
        background-color: #70ebd9;
        box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        color: black;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease-in;

        &:hover {
            transform: translateY(-3px);
        }
    }
`;

const LogoWrapper = styled.div`
    img {
        height: 6em;
    }

    h3 {
        color: #ff8d8d;
        text-algin: center;
        font-size: 20px;
    }

    span {
        color: #5dc399;
        font-weight: 300;
        font-size: 18px;
    }
`;

const Container = styled.div`
    min-width: 400px;
    backdrop-filter: blur(35px);
    background-color: rgba(255, 255, 255, 0.8);
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 2em;

    @media (max-width: 900px) {
        width: 100vw;
        position: absolute;
        padding: 0;
    }

    h4 {
        color: #808080;
        font-weight: bold;
        font-size: 13px;
        margin-top: 2rem;

        span {
            color: #ff8d8d;
            cursor: pointer;
        }
    }
`;

export default Sidebar