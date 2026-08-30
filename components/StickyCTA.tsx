import Link from "next/link";

export default function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-2 rounded-2xl border border-white/50 bg-ink p-2 shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-xl">
        <Link
          href="tel:+919373208379"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-medium text-white transition active:scale-[0.98] active:bg-white/[0.06]"
          aria-label="Call The Rare Fin"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path
                d="M5 4.5 8.2 3c.5-.2 1 0 1.3.5l1.6 3.7c.2.5.1 1-.3 1.3L8.9 10c1 2.1 2.7 3.8 4.8 4.8l1.5-1.9c.3-.4.8-.5 1.3-.3l3.7 1.6c.5.2.7.8.5 1.3L19.2 19c-.2.5-.7.8-1.2.8C10.3 19.8 4.2 13.7 4.2 6c0-.7.3-1.2.8-1.5Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="hidden xs:inline">Call</span>
        </Link>

        <Link
          href="https://wa.me/919373208379"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-[1.3] items-center justify-center gap-2 rounded-xl bg-blue px-4 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-95 active:scale-[0.98]"
          aria-label="Chat on WhatsApp"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path
                d="M20 11.5a8 8 0 0 1-11.8 7.1L4 20l1.4-4A8 8 0 1 1 20 11.5Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.5 9.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.2.1.4-.1.6l-.5.6c.6 1 1.4 1.7 2.5 2.2l.5-.5c.2-.2.4-.2.6-.1l1.4.6c.2.1.3.3.3.5v.5c0 .3-.1.5-.4.7-.3.2-.7.3-1 .2-2.9-.7-5.2-3-5.9-5.9-.1-.3 0-.7.3-1Z"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </span>
          WhatsApp
        </Link>

        <Link
          href="https://maps.app.goo.gl/m6BpxrqpqjaD1JLm7?g_st=ac"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-medium text-white transition active:scale-[0.98] active:bg-white/[0.06]"
          aria-label="Get directions"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path
                d="m12 21-7-7 7-11 7 11-7 7Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </span>
          <span className="hidden xs:inline">Map</span>
        </Link>
      </div>
    </div>
  );
}