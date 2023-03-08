import Head from 'next/head'
import { Navbar, Switch, Spacer, Button, Link, Text, Card, Radio, Container } from "@nextui-org/react"
import { Grid } from "@nextui-org/react"
import { Card4 } from './components/Card4'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ecom</title>
        <meta name="description" content="Ecommerce Example" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <Navbar className={styles.navbar} isBordered variant={"floating"}>
          <Navbar.Brand>
            <Text color="inherit" hideIn="xs">
              ACME
            </Text>
          </Navbar.Brand>
          <Navbar.Content>
            <Navbar.Item>
              <Switch shadow color="warning" checked={true} />
            </Navbar.Item>
          </Navbar.Content>
        </Navbar>

      <main className={styles.main}>

        <Spacer y={1} />
        <Container>
          <Text className={inter.className}
            h1
            size={50}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
          >
            Let's
          </Text>
          <Text className={inter.className}
            h1
            size={50}
            css={{
              textGradient: "45deg, $purple600 -20%, $pink600 100%",
            }}
            weight="bold"
          >
            Make the Web
          </Text>
          <Text className={inter.className}
            h1
            size={50}
            css={{
              textGradient: "45deg, $yellow600 -20%, $red600 100%",
            }}
            weight="bold"
          >
            Prettier
          </Text>
        </Container>
        <Grid.Container gap={2} justify="center">
          <Grid xs={12} sm={5}>
            <Card4 />
          </Grid>
          <Grid xs={12} sm={5}>
            <Card4 />
          </Grid>
          <Grid xs={12} sm={5}>
            <Card4 />
          </Grid>
        </Grid.Container>

      </main>
    </>
  )
}
