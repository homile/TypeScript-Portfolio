import React, { useRef } from 'react';
import styled from 'styled-components';
import SnsLink from '../button/SnsLink';
import emailjs from '@emailjs/browser';

const ContactCard = () => {
  const form = useRef<HTMLFormElement>(null);

  // 이메일 전송
  const submitHandler = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_lzcfztn',
          'template_fq339gk',
          form.current,
          'igW3zkrbWOEerjgRc',
        )
        .then(
          () => {
            alert('전송되었습니다.');
            e.target.reset();
          },
          () => {
            alert('전송을 실패했습니다.');
          },
        );
    }
  };

  return (
    <CardContainer>
      <LeftContainer>
        <H2>조 민 우</H2>
        <Span>alsalsdyd@gmail.com</Span>
        <SnsLink />
      </LeftContainer>
      <RightContainer>
        <Form ref={form} onSubmit={submitHandler}>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="이름을 입력해주세요"
          />
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="이메일을 입력해주세요"
          />
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            name="message"
            placeholder="내용을 입력해주세요"
          />
          <SubmitButton type="submit" value="전 송" />
        </Form>
      </RightContainer>
    </CardContainer>
  );
};

export default ContactCard;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  height: 100%;
  min-height: 500px;
  margin: 1rem 0;
  border-radius: 10px;
  padding: 1.5rem;
  background: ${(props) => props.theme.colorMain};

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  padding: 1rem;

  @media screen and (max-width: 767px) {
    max-width: 100%;
  }
`;

const H2 = styled.h2`
  color: ${(props) => props.theme.colorWhite};
  height: 3rem;
`;

const Span = styled.span`
  color: ${(props) => props.theme.colorWhite};
  height: 3rem;
`;

const RightContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  background: ${(props) => props.theme.colorWhite};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 1rem;
`;

const Label = styled.label`
  font-weight: ${(props) => props.theme.weightBold};
  margin-bottom: 0.3rem;
`;

const Input = styled.input`
  height: 2.25em;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.colorBlack};
  resize: none;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
`;

const TextArea = styled.textarea`
  height: 15em;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.colorBlack};
  resize: none;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
`;

const SubmitButton = styled.input`
  font-weight: ${(props) => props.theme.weightBold};
  color: ${(props) => props.theme.colorWhite};
  background: ${(props) => props.theme.colorMain};
  border: 0px;
  border-radius: 5px;
  height: 2rem;
  font-size: ${(props) => props.theme.fontSmall};
`;
