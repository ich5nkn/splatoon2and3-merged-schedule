import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html >
        <Head prefix='og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#'>
            <meta property="og:url" content="https://ich5nkn.github.io/splatoon2and3-merged-schedule" />
            <meta property="og:title" content="splatoon2,3 Schedule" />
            <meta property="og:site_name" content="splatoon2,3 Schedule" />
            <meta property="og:description" content="Splatoon2とSplatoon3のスケジュールを同時に見ることができます。イカリング２とイカリング３を行ったり来たりしなくてよくなります！個人用に作成しましたが、ルールとステージ次第ではスプラ２のパワー更新も狙いたいという方のお役に立つかもです。" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://ich5nkn.github.io/splatoon2and3-merged-schedule/ogp.png" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@splich5" />
            <link rel="icon" href="https://ich5nkn.github.io/splatoon2and3-merged-schedule/favicon.ico" id="favicon" />
            <title>Splatoon2,3 Schedule</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
