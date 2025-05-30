'use client';

export default function Error({
    error,
    reset
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html>
            <body>
                <main>
                <div>
                    <h2>Something went wrong!</h2>
                    <p>{error.message}</p>
                    <button onClick={() => reset()}>Try again</button>
                </div>
                </main>
            </body>
        </html>
    );
}