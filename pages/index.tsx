import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button>Hello test</Button>
      <Button>Hello test</Button>
    </div>
  );
};

const Button = styled.button`
  color: blue;
  padding: 10px;
`;

export default Home;
