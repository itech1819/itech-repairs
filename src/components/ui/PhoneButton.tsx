'use client'

export default function PhoneButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex md:hidden">
      <a
        href="tel:+61432933273"
        className="flex items-center justify-center gap-3 w-full bg-primary hover:bg-primary-dark text-white text-base font-semibold py-4 px-6 transition-colors shadow-[0_-2px_10px_rgba(0,0,0,0.15)]"
        aria-label="Call iTech Repairs on 0432 933 273"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 flex-shrink-0"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
            clipRule="evenodd"
          />
        </svg>
        <span>0432 933 273 &mdash; Call Now</span>
      </a>
    </div>
  )
}
