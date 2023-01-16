import './App.css'

function App () {
  return (
    <div className="App">
      <main className="main">
        <header>
          <title>Thank you for visiting Reasonlabs</title>
          <meta
            name="description"
            content="Thank you for downloading RAV Endpoint Protection."
          />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="description" key="description" content="ReasonLabs" />

          <meta property="og:type" key="type" content="website" />
          <meta
            property="og:image"
            key="image"
            itemProp="image"
            content="https://reasonlabs.com/images/ReasonLabs-Logo.png"
          />
          <meta property="og:image:type" key="image:type" content="image/png" />
          <meta property="og:image:width" key="image:width" content="1200" />
          <meta property="og:image:height" key="image:height" content="600" />

          <meta name="twitter:card" key="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" key="twitter:domain" content="reasonlabs.com" />
          <meta
            property="twitter:url"
            key="twitter:url"
            content="https://reasonlabs.com/"
          />
          <meta
            name="twitter:title"
            key="twitter:title"
            content="ReasonLabs - Enterprise grade security to all of your personal devices"
          />
          <meta
            name="twitter:description"
            key="twitter:description"
            content="Malwares make no distinction between corporate and personal devices. Therefore, past perceptions of different levels of antivirus for businesses and households must be challenged. ReasonLabs is the first endpoint protection based on a multilayered machine-learning engine, that provides enterprise-grade security for all your personal devices."
          />
          <meta
            name="twitter:image"
            key="twitter:image"
            content="https://reasonlabs.com/images/ReasonLabs-Logo.png"
          />

          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </header>
        <div className="thankyou-epp">
          <h1>Thank you for visiting Reasonlabs</h1>
          <img
            alt="logo"
            src={'https://cdn.reasonsecurity.com/images/reason-labs-logo.svg'}
            width={220}
            height={38}
          />
        </div>
      </main>
    </div>
  )
}

export default App
