import React from "react";
import Head from "next/head";
import Page from "../../components/layout/Page";
import ContactMain from "../../components/layout/ContactMain";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact – Yinon Hever</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Page title="Contact">
        <ContactMain />
      </Page>
    </>
  );
}
