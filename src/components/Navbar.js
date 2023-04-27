import { Button, ConfigProvider } from 'antd'
import React from 'react'

const Navbar = () => {
  return (
    <ConfigProvider
              theme={{
                token: {
                  colorPrimary: '#6F57E9',
                  fontFamily:'Figtree',
                  fontSize:'16px',
                },
              }}
            >
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id='navbar' >
          <div className="container-fluid">
              <a className="navbar-brand logo" href="/">
                  <svg width="168" height="37" viewBox="0 0 168 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.54 13.8C16.556 14.5 17.956 15.452 18.74 16.656C19.524 17.832 19.916 19.302 19.916 21.066C19.916 23.446 19.076 25.336 17.396 26.736C15.716 28.108 13.322 28.794 10.214 28.794C7.918 28.794 5.916 28.388 4.208 27.576C2.5 26.764 1.184 25.742 0.26 24.51V16.026H1.142C1.226 18.154 1.702 20.016 2.57 21.612C3.438 23.208 4.572 24.44 5.972 25.308C7.4 26.148 8.968 26.568 10.676 26.568C12.412 26.568 13.742 26.176 14.666 25.392C15.59 24.58 16.052 23.488 16.052 22.116C16.052 21.052 15.772 20.17 15.212 19.47C14.68 18.742 13.756 18.14 12.44 17.664L6.686 15.648C4.614 14.92 3.13 14.01 2.234 12.918C1.366 11.798 0.932 10.384 0.932 8.676C0.932 7.332 1.282 6.114 1.982 5.022C2.682 3.902 3.732 3.006 5.132 2.334C6.56 1.662 8.296 1.326 10.34 1.326C11.964 1.326 13.518 1.578 15.002 2.082C16.486 2.558 17.732 3.244 18.74 4.14L19.16 11.364H18.278C17.914 8.704 17.032 6.744 15.632 5.484C14.26 4.196 12.58 3.552 10.592 3.552C8.576 3.552 7.092 3.958 6.14 4.77C5.188 5.554 4.712 6.534 4.712 7.71C4.712 8.606 4.964 9.348 5.468 9.936C6 10.524 6.868 11.042 8.072 11.49L14.54 13.8ZM28.0053 25.56C28.0053 26.288 28.1453 26.778 28.4253 27.03C28.7333 27.282 29.2373 27.408 29.9373 27.408V28.5H27.7113H24.2673H22.0413V27.408C22.7413 27.408 23.2313 27.282 23.5113 27.03C23.8193 26.778 23.9733 26.288 23.9733 25.56V4.686C23.9733 3.958 23.8193 3.468 23.5113 3.216C23.2313 2.964 22.7413 2.838 22.0413 2.838V1.746H24.2673H28.0053V25.56ZM28.0053 20.94H26.9133V14.598H28.0893C28.2853 13.058 28.8733 11.77 29.8533 10.734C30.8333 9.67 32.1913 9.138 33.9273 9.138C35.8873 9.138 37.3433 9.74 38.2953 10.944C39.2753 12.12 39.7653 13.842 39.7653 16.11V25.56C39.7653 26.288 39.9053 26.778 40.1853 27.03C40.4933 27.282 40.9973 27.408 41.6973 27.408V28.5H39.4713H36.0273H33.8013V27.408C34.5013 27.408 34.9913 27.282 35.2713 27.03C35.5793 26.778 35.7333 26.288 35.7333 25.56V16.866C35.7333 14.934 35.5233 13.548 35.1033 12.708C34.6833 11.868 33.8853 11.448 32.7093 11.448C31.3373 11.448 30.2033 12.176 29.3073 13.632C28.4393 15.088 28.0053 17.524 28.0053 20.94ZM49.8236 25.56C49.8236 26.288 49.9636 26.778 50.2436 27.03C50.5516 27.282 51.0556 27.408 51.7556 27.408V28.5H49.5296H46.0856H43.8596V27.408C44.5596 27.408 45.0496 27.282 45.3296 27.03C45.6376 26.778 45.7916 26.288 45.7916 25.56V12.456C45.7916 11.728 45.6376 11.238 45.3296 10.986C45.0496 10.734 44.5596 10.608 43.8596 10.608V9.516H46.0856H49.8236V25.56ZM44.7416 3.468L47.7236 0.485998L50.7476 3.468L47.7236 6.492L44.7416 3.468ZM59.3596 36.648H55.6216H53.3956V35.556C54.0956 35.556 54.5856 35.43 54.8656 35.178C55.1736 34.926 55.3276 34.436 55.3276 33.708V12.456C55.3276 11.728 55.1736 11.238 54.8656 10.986C54.5856 10.734 54.0956 10.608 53.3956 10.608V9.516H55.6216H59.3596V36.648ZM59.2336 13.674C59.4856 12.47 60.1716 11.42 61.2916 10.524C62.4396 9.6 63.8396 9.138 65.4916 9.138C67.8156 9.138 69.6636 9.88 71.0356 11.364C72.4356 12.848 73.1356 15.382 73.1356 18.966C73.1356 22.55 72.4356 25.084 71.0356 26.568C69.6636 28.052 67.8156 28.794 65.4916 28.794C63.8676 28.794 62.4816 28.318 61.3336 27.366C60.2136 26.386 59.5136 25.252 59.2336 23.964H57.7636V13.674H59.2336ZM64.4416 26.778C66.1496 26.778 67.3116 26.106 67.9276 24.762C68.5436 23.418 68.8516 21.486 68.8516 18.966C68.8516 16.502 68.5296 14.584 67.8856 13.212C67.2416 11.84 66.0936 11.154 64.4416 11.154C63.5736 11.154 62.7476 11.392 61.9636 11.868C61.2076 12.344 60.5776 13.17 60.0736 14.346C59.5976 15.494 59.3596 17.034 59.3596 18.966C59.3596 20.898 59.5976 22.452 60.0736 23.628C60.5776 24.776 61.2076 25.588 61.9636 26.064C62.7476 26.54 63.5736 26.778 64.4416 26.778Z" fill="black" />
                      <path d="M93.0816 20.94H91.9896V14.598H93.1656C93.3616 13.058 93.9496 11.77 94.9296 10.734C95.9096 9.67 97.2676 9.138 99.0036 9.138C100.964 9.138 102.42 9.74 103.372 10.944C104.352 12.12 104.842 13.842 104.842 16.11V25.56C104.842 26.288 104.982 26.778 105.262 27.03C105.57 27.282 106.074 27.408 106.774 27.408V28.5H104.548H101.104H98.8776V27.408C99.5776 27.408 100.068 27.282 100.348 27.03C100.656 26.778 100.81 26.288 100.81 25.56V16.866C100.81 14.934 100.6 13.548 100.18 12.708C99.7596 11.868 98.9616 11.448 97.7856 11.448C96.4136 11.448 95.2796 12.176 94.3836 13.632C93.5156 15.088 93.0816 17.524 93.0816 20.94ZM81.5736 20.94H80.4816V14.43H81.6576C81.8256 13.03 82.3716 11.798 83.2956 10.734C84.2476 9.67 85.6336 9.138 87.4536 9.138C89.3296 9.138 90.7296 9.726 91.6536 10.902C92.6056 12.078 93.0816 13.814 93.0816 16.11V25.56C93.0816 26.288 93.2216 26.778 93.5016 27.03C93.8096 27.282 94.3136 27.408 95.0136 27.408V28.5H92.7876H89.3436H87.1176V27.408C87.8176 27.408 88.3076 27.282 88.5876 27.03C88.8956 26.778 89.0496 26.288 89.0496 25.56V16.866C89.0496 14.962 88.8396 13.59 88.4196 12.75C87.9996 11.882 87.2016 11.448 86.0256 11.448C84.7656 11.448 83.7016 12.134 82.8336 13.506C81.9936 14.85 81.5736 17.328 81.5736 20.94ZM81.5736 25.56C81.5736 26.288 81.7136 26.778 81.9936 27.03C82.3016 27.282 82.8056 27.408 83.5056 27.408V28.5H81.2796H77.8356H75.6096V27.408C76.3096 27.408 76.7996 27.282 77.0796 27.03C77.3876 26.778 77.5416 26.288 77.5416 25.56V12.456C77.5416 11.728 77.3876 11.238 77.0796 10.986C76.7996 10.734 76.3096 10.608 75.6096 10.608V9.516H77.8356H81.5736V25.56ZM120.666 28.5V23.166H120.54C120.204 24.79 119.574 26.134 118.65 27.198C117.754 28.262 116.438 28.794 114.702 28.794C112.854 28.794 111.454 28.262 110.502 27.198C109.55 26.134 109.074 24.51 109.074 22.326C109.074 20.982 109.284 19.82 109.704 18.84L122.178 17.454V18.504L113.316 20.31C113.064 20.926 112.938 21.752 112.938 22.788C112.938 23.908 113.162 24.804 113.61 25.476C114.086 26.148 114.772 26.484 115.668 26.484C116.536 26.484 117.334 26.134 118.062 25.434C118.79 24.734 119.364 23.67 119.784 22.242C120.232 20.814 120.456 19.05 120.456 16.95C120.456 15.074 120.148 13.646 119.532 12.666C118.916 11.658 117.964 11.154 116.676 11.154C115.612 11.154 114.8 11.448 114.24 12.036C113.68 12.596 113.4 13.338 113.4 14.262C113.4 14.514 113.414 14.752 113.442 14.976C113.498 15.2 113.554 15.424 113.61 15.648V15.774L109.956 16.11C109.732 15.438 109.62 14.892 109.62 14.472C109.62 12.932 110.278 11.658 111.594 10.65C112.938 9.642 114.702 9.138 116.886 9.138C119.042 9.138 120.652 9.586 121.716 10.482C122.808 11.378 123.494 12.456 123.774 13.716C124.054 14.976 124.194 16.46 124.194 18.168V25.56C124.194 26.288 124.334 26.778 124.614 27.03C124.922 27.282 125.426 27.408 126.126 27.408V28.5H123.9H120.666ZM133.632 23.04C133.632 24.048 133.884 24.832 134.388 25.392C134.892 25.952 135.592 26.232 136.488 26.232C137.384 26.232 138.028 25.938 138.42 25.35C138.812 24.734 139.064 23.978 139.176 23.082H140.016C139.988 24.594 139.624 25.924 138.924 27.072C138.252 28.22 136.908 28.794 134.892 28.794C133.184 28.794 131.868 28.276 130.944 27.24C130.048 26.204 129.6 24.72 129.6 22.788V11.868H126.492V10.23C128.368 9.978 129.74 9.32 130.608 8.256C131.504 7.192 132.036 5.666 132.204 3.678H133.632V23.04ZM137.034 9.516H140.31V11.868H133.254V10.314L137.034 9.516ZM151.865 28.794C149.009 28.794 146.755 27.954 145.103 26.274C143.451 24.566 142.625 22.102 142.625 18.882C142.625 15.718 143.395 13.31 144.935 11.658C146.503 9.978 148.645 9.138 151.361 9.138C153.825 9.138 155.715 9.81 157.031 11.154C158.375 12.47 159.047 14.304 159.047 16.656C159.047 17.58 159.019 18.266 158.963 18.714L145.439 19.134V17.79L155.855 16.95L154.721 17.958C155.085 17.23 155.267 16.306 155.267 15.186C155.267 14.066 154.917 13.114 154.217 12.33C153.545 11.546 152.635 11.154 151.487 11.154C149.947 11.154 148.729 11.77 147.833 13.002C146.937 14.206 146.489 16.124 146.489 18.756C146.489 21.248 147.049 23.152 148.169 24.468C149.289 25.784 150.843 26.442 152.831 26.442C153.867 26.442 154.749 26.26 155.477 25.896C156.233 25.532 156.835 25.084 157.283 24.552C157.731 24.02 158.109 23.446 158.417 22.83L159.257 23.166C158.977 24.034 158.557 24.888 157.997 25.728C157.437 26.54 156.639 27.254 155.603 27.87C154.595 28.486 153.349 28.794 151.865 28.794ZM161.402 26.148L164.384 23.166L167.408 26.148L164.384 29.172L161.402 26.148Z" fill="#6F57E9" />
                  </svg>
              </a>
              <div className="d-flex" role="search">
                  <Button style={{fontWeight:600}} className="login-btn mx-2" type="submit">Login</Button>
                  <Button style={{fontWeight:600}} className="learn-btn mx-2" type="submit">Learn more</Button>
              </div>
          </div>
      </nav>
      </ConfigProvider>

  )
}

export default Navbar