export default function Loading() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-ink">
            <div className="flex flex-col items-center gap-4">
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="animate-pulse"
                >
                    <path
                        d="M3 12c3-5 8-7 13-5-1 2-1 3 0 5-1 2-1 3 0 5-5 2-10 0-13-5Z"
                        stroke="#0B5FCE"
                        strokeWidth="2"
                    />
                    <circle cx="8.5" cy="11" r="0.9" fill="#0B5FCE" />
                </svg>

                <div className="flex gap-1.5">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue [animation-delay:-0.3s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue [animation-delay:-0.15s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue" />
                </div>
            </div>
        </div>
    );
}