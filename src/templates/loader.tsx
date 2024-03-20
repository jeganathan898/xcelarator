import { SiteLoader } from "../assets/styles"

export default function Loader() {
  return (
    <>
      <SiteLoader>
        <svg viewBox="0 0 64 64" width="0" height="0">
          <defs xmlns="http://www.w3.org/2000/svg">
            <linearGradient id="b" x1="0" y1="62" x2="0" y2="2" gradientUnits="userSpaceOnUse">
              <stop stopColor="#168A12"></stop>
              <stop offset="1" stopColor="#e0ffdf"></stop>
            </linearGradient>
            <linearGradient id="c" x1="0" y1="64" x2="0" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4a86d8"></stop>
              <stop offset="1" stopColor="#bad6fb"></stop>
              <animateTransform
                attributeName="gradientTransform"
                type="rotate"
                values="0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32"
                dur="8s"
                keyTimes="0; 0.125; 0.25; 0.375; 0.5; 0.625; 0.75; 0.875; 1"
                keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1"
                repeatCount="indefinite"
              ></animateTransform>
            </linearGradient>
            <linearGradient id="d" x1="0" y1="62" x2="0" y2="2" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00E0ED"></stop>
              <stop offset="1" stopColor="#00DA72"></stop>
            </linearGradient>
          </defs>
        </svg>

        <svg
          className="icon"
          width="128"
          height="128"
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            pathLength="360"
            id="x"
            className="dash"
            d="M59.3309 53.6649L89.1436 96.3404H65.7021L47.3697 68.6314L29.6383 96.3404H8L36.1298 53.6649L10.5846 17H33.425L48.091 39.8404L62.5766 17H84.4553L59.3309 53.6649Z"
            stroke="url(#c)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            pathLength="360"
            id="o"
            className="dash"
            stroke="url(#b)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M107.777 110.766C115.08 110.766 121 104.846 121 97.5426C121 90.2395 115.08 84.3192 107.777 84.3192C100.474 84.3192 94.5532 90.2395 94.5532 97.5426C94.5532 104.846 100.474 110.766 107.777 110.766Z"
            fill="none"
          />
        </svg>
      </SiteLoader>
    </>
  )
}
