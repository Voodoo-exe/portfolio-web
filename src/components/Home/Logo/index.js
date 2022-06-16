import './index.scss'
import LogoV from '../../../assets/images/Asset 1.png'
import { useRef } from 'react';


const Logo = () => {
    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();
    return (
      <div className="logo-container">
        <img className="solid-logo" src={LogoV} alt="V" />
        <svg
          width="559pt"
          height="897pt"
          version="1.0"
          viewBox="0 0 1100 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            className="svg-container"
            transform="translate(0 457) scale(.1 -.1)"
            fill="none"
          >
            <path
              ref={outlineLogoRef}
              d="M5210.8,1.1l-5210,10270h1590l3690-7130l2950,5800l-576.1-17.5l-83.9-2.5h-1710l350-900l-930-1650l-1480,3900
		h6700L5210.8,1.1z M10501.3,10270.9l0.4,0.7H3800.1l0.3-0.7l1480-3900l0.4-1l0.5,0.9l930,1650l0.1,0.2l-349.8,899.5h1709.3
		l659.2,20L5280.8,3142.2l-3689.6,7129.1l-0.1,0.3H0l0.4-0.7l5210-10270l0.4-0.9L10501.3,10270.9z M1590.5,10270.6l3689.9-7129.7
		l0.4-0.9l2950.4,5800.9l0.4,0.8l-660.8-20H5860.1l0.3-0.7l349.9-899.8l-929.4-1648.9l-1479.4,3898.3H10500L5210.8,2.2L1.6,10270.6
		H1590.5z"
            />
          </g>
        </svg>
      </div>
    )
}

export default Logo