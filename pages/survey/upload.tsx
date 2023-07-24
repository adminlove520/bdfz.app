//@ts-nocheck
import React from 'react'
import Head from 'next/head'

export default function SurveyPage() {
  return (
    <>
      <Head>
        <title>提交新文档 🎉</title>
        <script async src="https://tally.so/widgets/embed.js"></script>
        <style>{`
          html, body {
            margin: 0;
            height: 100%;
            overflow: hidden;
          }
          iframe {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            border: 0;
          }
        `}</style>
      </Head>
      <iframe
        data-tally-src="https://tally.so/r/wb9A0o?transparentBackground=1"
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      ></iframe>
    </>
  )
}
