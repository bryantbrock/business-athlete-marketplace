import styles from './styles/app.css'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'
import {onServer, inProduction} from './utils/misc'
import {sendEmail} from './utils/email.server'

export function meta() {
  return {
    charset: 'utf-8',
    title: 'Marketplace',
    viewport: 'width=device-width,initial-scale=1',
  }
}

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

const Document = ({children, title}) => {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <Meta />
        <title>{title}</title>
        <Links />
      </head>
      <body className='m-8'>
        {children}
        <LiveReload />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  )
}

export function ErrorBoundary({error}) {
  if (onServer() && inProduction()) {
    sendEmail({error})
  }

  return (
    <Document title='Uh-oh!'>
      <div>
        <h1>App Error</h1>
        <pre>{error.message}</pre>
      </div>
    </Document>
  );
}