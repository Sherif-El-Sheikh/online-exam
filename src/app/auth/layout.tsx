export default function Layout({ children } : {children : React.ReactNode}) {
    return (
        <html>
            <body>
                header
            {children}
            footer
            </body>
        </html>
    )
}