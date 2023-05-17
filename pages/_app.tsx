import { AppProps } from "next/app"
import Head from "next/head"
import { MantineProvider } from "@mantine/core"
import "../styles/globals.css"

import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { SessionContextProvider } from "@supabase/auth-helpers-react"

import { useState } from "react"

import Layout from "@/components/Layout"

export default function App(props: AppProps) {
  const { Component, pageProps } = props
  const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    <>
      <Head>
        <title>LLMonitor</title>
      </Head>

      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}
      >
        <MantineProvider
          theme={{
            colorScheme: "light",
            defaultRadius: "md",
            primaryColor: "pink",
            headings: {
              fontWeight: 700,
            },
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </SessionContextProvider>
    </>
  )
}