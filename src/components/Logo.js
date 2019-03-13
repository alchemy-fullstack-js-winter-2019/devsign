import React from 'react';
import styled from 'styled-components';

const Img = styled.img `
  width: 50%;
  margin: 2em 5em;

  @media (min-width: 700px) {
    margin: 0;
    width: 25%;
  }
`;

export default function Logo() {
  return (
    <header>
      <figure>
        <Img src="https://lh3.googleusercontent.com/7gy2A_w8eiSMgqDNVC7p-KVUDfhXFxUc-uFQv_JvgkhzFlYzS4r0VDK_g4RlkkRBa7F8yh5xEi9ndvwM-wyZmncBDsfJeBfjKXLhyWaTtsWtegF5G0oLMf8GK4JovegpWlfItSc6gtChWJ1VXlm7RagayiOjnBhx-Pw85nzfM3IHntoMNWVagzeZeyIgokqQdtjUV9CSN1OBLVTUSetkhxBuznlZxmntaQ5TfT5qq-E0aVt4J5TgWsCFXQn1UbEkpjARMoX-ANVbd7pfHCAqBhQ2Lz41iCtZdcBijL913BeVU0q1h8TaILtumlZd4mFBjazDbT8JL49kxxFrnPs_Bf_54gGRoyE1RlGwR6GMoHwArwsg5-DOb8UrLF9js9q_8o1kGQsdbcFBVZ2Y7SvXIA7OUefuiknEOTlJosmxcsK-b1srV-7vPz6ccoZtatSmnVd4xlaAwM9jHj49hznmCfKB2PACOezkZFI8MDlsEwwtULPsmtjePh21ic1JLjyHM_HZy5JXhP49ykk3Kp0txMzMpxAwjcvnAEJSz82FJXGVK7ZNBR-1sXS9vq_RZZhZ0TSM-2g1wMsd4GeclDBtZv-rE3bPWrXpYw-sYVb1WBCEa8PnZa5TDh0BNw17ogNxqw8eslHTsgja0YM4opmjMeD_V2mWxwM=w300-h210-no" alt="Chirp Logo"/>
      </figure>
    </header>
  );
}
