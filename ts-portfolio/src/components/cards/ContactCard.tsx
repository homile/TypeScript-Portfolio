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
      <div>
        <h2>조 민 우</h2>
        <span>alsalsdyd@gmail.com</span>
        <SnsLink />
      </div>
      <div>
        <form ref={form} onSubmit={submitHandler}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="이름을 입력해주세요"
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="이메일을 입력해주세요"
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="내용을 입력해주세요"
          />
          <input type="submit" value="전송" />
        </form>
      </div>
    </CardContainer>
  );
};

export default ContactCard;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  height: 500px;
  margin: 1rem 0;
  border: 1px solid black;
`;
