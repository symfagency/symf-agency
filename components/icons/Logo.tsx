/*!
 * @author Mohamed Muntasir
 * @link https://github.com/symfagency
 */

import type { LogoProps } from "../../types";

const Logo = ({ className }: LogoProps) => (
  <svg
    className={className}
    fill="none"
    height="516"
    id="logo"
    viewBox="0 0 516 516"
    width="516"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>logo</title>

    <circle cx="258" cy="258" r="246" />

    <path
      d="M115.997 138.117C111.592 139.508 104.901 143.043 101.468 145.778C96.8895 149.295 94.5918 150.088 94.0006 148.354C92.818 144.887 83.8683 153.658 75.5334 166.867C68.1435 178.329 63.2838 193.633 60.7572 212.2L59.3203 223.611L57.341 216.867L55.3617 210.123L53.4835 214.968C52.3549 217.683 51.1084 228.898 50.438 240.108L49.2708 260.402L58.5119 241.004C69.6362 217.339 80.4254 199.279 95.0384 179.254C101.113 171.087 105.086 164.291 103.934 164.301C101.246 164.325 90.2157 176.785 80.1609 190.974C76.1771 196.611 72.3768 201.281 71.8007 201.286C69.6884 201.304 73.7749 185.428 77.7351 177.087C80.0024 172.817 83.7926 166.988 86.4557 164.068C91.4031 158.809 114.53 146.05 123.537 143.846L128.52 142.644L128.092 159.647C127.981 168.921 127.861 177.229 127.674 177.81C127.489 178.584 120.259 186.375 111.313 195.532C99.7013 207.417 95.1431 213.253 95.1734 216.73C95.2644 227.16 73.2127 253.046 68.3697 248.259C66.2388 246.152 78.3048 220.354 90.8037 200.154C104.064 179.175 110.302 167.723 109.525 166.764C106.427 163.893 75.3585 212.846 63.6799 239.027C56.7079 254.349 38.3302 305.122 38.3622 308.793C38.3673 309.372 40.4645 307.615 42.9339 304.503C45.4051 301.583 48.4153 294.41 49.7089 288.603C51.1845 281.636 54.3968 275.619 58.7715 270.751C62.5734 266.275 64.2747 263.169 62.7385 263.183C61.2022 263.196 63.4914 261.437 67.6993 259.469C79.5582 253.956 94.5991 238.95 99.8733 227.12C105.718 214.706 105.717 214.513 101.49 214.356C98.2257 214.385 98.2241 214.192 101.286 213.006C108.174 210.048 131.97 185.886 135.362 178.516C139.695 168.819 140.035 163.793 136.014 165.18C130.081 167.55 135.103 148.768 142.713 140.588L147.849 134.941L136.137 135.237C129.608 135.294 120.592 136.531 115.997 138.117Z"
      fill="black"
    />

    <path
      d="M57.1886 303.306C52.4242 305.352 48.3701 309.372 48.396 311.355C48.4306 313.999 151.108 314.638 276.35 313.659C400.909 312.69 495.322 309.471 485.707 306.952C464.414 301.281 68.7532 297.866 57.1886 303.306Z"
      fill="black"
    />

    <path
      d="M33.2355 324.206C36.646 327.099 43.403 324.996 42.3602 321.469C41.9031 320.127 42.3079 318.359 43.321 317.405C44.5341 316.103 44.2722 315.49 41.9271 314.752C40.2926 314.117 38.5558 314.192 37.9736 314.933C37.4582 315.559 37.3963 314.6 37.8677 312.717C38.4416 310.123 37.744 310.798 34.7618 315.696C31.1797 321.634 31.0773 322.345 33.2355 324.206Z"
      fill="black"
    />

    <path
      d="M165.815 240.077C165.579 237.473 164.525 235.448 162.655 234.004C160.808 232.536 158.169 231.803 154.736 231.803C152.463 231.803 150.569 232.098 149.054 232.69C147.539 233.282 146.402 234.099 145.645 235.141C144.887 236.159 144.497 237.33 144.473 238.656C144.426 239.745 144.639 240.704 145.112 241.533C145.609 242.361 146.32 243.095 147.243 243.734C148.19 244.35 149.326 244.894 150.652 245.368C151.978 245.841 153.469 246.256 155.126 246.611L161.376 248.031C164.975 248.812 168.147 249.854 170.893 251.156C173.663 252.458 175.983 254.009 177.854 255.808C179.748 257.607 181.18 259.679 182.151 262.023C183.121 264.366 183.618 266.994 183.642 269.906C183.618 274.499 182.458 278.441 180.162 281.732C177.866 285.022 174.563 287.544 170.254 289.295C165.969 291.047 160.796 291.923 154.736 291.923C148.652 291.923 143.348 291.012 138.827 289.189C134.305 287.366 130.789 284.596 128.28 280.879C125.77 277.162 124.48 272.463 124.409 266.781H141.241C141.384 269.125 142.011 271.078 143.124 272.641C144.236 274.203 145.763 275.387 147.705 276.192C149.67 276.997 151.942 277.399 154.523 277.399C156.89 277.399 158.902 277.08 160.56 276.44C162.241 275.801 163.531 274.913 164.43 273.777C165.33 272.641 165.792 271.339 165.815 269.871C165.792 268.498 165.366 267.326 164.537 266.355C163.708 265.361 162.43 264.509 160.702 263.798C158.997 263.064 156.819 262.39 154.168 261.774L146.568 259.999C140.271 258.554 135.311 256.223 131.689 253.003C128.067 249.759 126.268 245.38 126.291 239.864C126.268 235.366 127.475 231.424 129.913 228.038C132.352 224.653 135.725 222.013 140.034 220.119C144.343 218.225 149.255 217.278 154.771 217.278C160.406 217.278 165.295 218.237 169.438 220.155C173.604 222.049 176.836 224.712 179.132 228.145C181.429 231.578 182.6 235.555 182.648 240.077H165.815ZM188.898 218.273H208.536L223.912 248.706H224.551L239.928 218.273H259.565L232.967 266.71V291H215.496V266.71L188.898 218.273ZM266.934 218.273H288.702L307.168 263.301H308.021L326.487 218.273H348.255V291H331.138V246.327H330.535L313.063 290.538H302.126L284.654 246.078H284.05V291H266.934V218.273ZM359.219 291V218.273H408.864V232.548H376.797V247.463H405.703V261.774H376.797V291H359.219Z"
      fill="black"
    />
    <path
      d="M83.9631 328.815C83.9157 328.295 83.705 327.89 83.331 327.601C82.9616 327.307 82.4337 327.161 81.7472 327.161C81.2926 327.161 80.9138 327.22 80.6108 327.338C80.3078 327.456 80.0805 327.62 79.929 327.828C79.7775 328.032 79.6993 328.266 79.6946 328.531C79.6851 328.749 79.7277 328.941 79.8224 329.107C79.9219 329.272 80.0639 329.419 80.2486 329.547C80.438 329.67 80.6652 329.779 80.9304 329.874C81.1955 329.968 81.4938 330.051 81.8253 330.122L83.0753 330.406C83.795 330.562 84.4295 330.771 84.9787 331.031C85.5327 331.292 85.9967 331.602 86.3707 331.962C86.7495 332.321 87.036 332.736 87.2301 333.205C87.4242 333.673 87.5237 334.199 87.5284 334.781C87.5237 335.7 87.2917 336.488 86.8324 337.146C86.3731 337.804 85.7126 338.309 84.8509 338.659C83.9938 339.009 82.9593 339.185 81.7472 339.185C80.5303 339.185 79.4697 339.002 78.5653 338.638C77.661 338.273 76.9579 337.719 76.456 336.976C75.9541 336.232 75.696 335.293 75.6818 334.156H79.0483C79.0767 334.625 79.2022 335.016 79.4247 335.328C79.6473 335.641 79.9527 335.877 80.3409 336.038C80.7339 336.199 81.1884 336.28 81.7045 336.28C82.178 336.28 82.5805 336.216 82.9119 336.088C83.2481 335.96 83.5062 335.783 83.6861 335.555C83.866 335.328 83.9583 335.068 83.9631 334.774C83.9583 334.5 83.8731 334.265 83.7074 334.071C83.5417 333.872 83.286 333.702 82.9403 333.56C82.5994 333.413 82.1638 333.278 81.6335 333.155L80.1136 332.8C78.8542 332.511 77.8622 332.045 77.1378 331.401C76.4134 330.752 76.0535 329.876 76.0582 328.773C76.0535 327.873 76.295 327.085 76.7827 326.408C77.2704 325.731 77.9451 325.203 78.8068 324.824C79.6686 324.445 80.651 324.256 81.7543 324.256C82.8812 324.256 83.8589 324.447 84.6875 324.831C85.5208 325.21 86.1671 325.742 86.6264 326.429C87.0857 327.116 87.3201 327.911 87.3295 328.815H83.9631ZM96.3423 334.291V328.091H99.8082V339H96.4986V336.969H96.3849C96.1435 337.636 95.7315 338.167 95.1491 338.56C94.5715 338.948 93.8731 339.142 93.054 339.142C92.3106 339.142 91.6572 338.972 91.0938 338.631C90.5303 338.29 90.0923 337.814 89.7798 337.203C89.4673 336.588 89.3087 335.868 89.304 335.044V328.091H92.777V334.362C92.7817 334.954 92.938 335.42 93.2457 335.761C93.5535 336.102 93.9725 336.273 94.5028 336.273C94.8485 336.273 95.1586 336.197 95.4332 336.045C95.7126 335.889 95.9328 335.664 96.0938 335.371C96.2595 335.072 96.3423 334.713 96.3423 334.291ZM102.019 343.091V328.091H105.456V329.959H105.563C105.705 329.627 105.906 329.308 106.167 329C106.432 328.692 106.768 328.441 107.175 328.247C107.587 328.048 108.079 327.949 108.652 327.949C109.41 327.949 110.118 328.148 110.776 328.545C111.439 328.943 111.974 329.556 112.381 330.385C112.788 331.214 112.992 332.269 112.992 333.553C112.992 334.788 112.795 335.823 112.402 336.656C112.014 337.49 111.489 338.115 110.826 338.531C110.167 338.948 109.436 339.156 108.631 339.156C108.082 339.156 107.606 339.066 107.203 338.886C106.801 338.706 106.462 338.47 106.188 338.176C105.918 337.883 105.71 337.568 105.563 337.232H105.492V343.091H102.019ZM105.421 333.545C105.421 334.133 105.499 334.644 105.655 335.08C105.816 335.515 106.046 335.854 106.344 336.095C106.647 336.332 107.009 336.45 107.431 336.45C107.857 336.45 108.219 336.332 108.517 336.095C108.816 335.854 109.041 335.515 109.192 335.08C109.348 334.644 109.426 334.133 109.426 333.545C109.426 332.958 109.348 332.449 109.192 332.018C109.041 331.588 108.816 331.254 108.517 331.017C108.224 330.78 107.862 330.662 107.431 330.662C107.005 330.662 106.642 330.778 106.344 331.01C106.046 331.242 105.816 331.573 105.655 332.004C105.499 332.435 105.421 332.949 105.421 333.545ZM119.911 339.206C118.77 339.206 117.785 338.981 116.957 338.531C116.133 338.077 115.498 337.43 115.053 336.592C114.613 335.75 114.393 334.748 114.393 333.588C114.393 332.461 114.615 331.476 115.06 330.634C115.505 329.786 116.133 329.128 116.942 328.659C117.752 328.186 118.706 327.949 119.805 327.949C120.581 327.949 121.291 328.07 121.935 328.311C122.579 328.553 123.136 328.91 123.604 329.384C124.073 329.857 124.438 330.442 124.698 331.138C124.959 331.829 125.089 332.622 125.089 333.517V334.384H115.607V332.366H121.857C121.853 331.997 121.765 331.668 121.594 331.379C121.424 331.09 121.19 330.866 120.891 330.705C120.598 330.539 120.259 330.456 119.876 330.456C119.487 330.456 119.139 330.544 118.832 330.719C118.524 330.889 118.28 331.124 118.1 331.422C117.92 331.715 117.826 332.049 117.816 332.423V334.476C117.816 334.921 117.904 335.312 118.079 335.648C118.254 335.979 118.503 336.237 118.825 336.422C119.147 336.607 119.53 336.699 119.975 336.699C120.283 336.699 120.562 336.656 120.813 336.571C121.064 336.486 121.28 336.36 121.46 336.195C121.639 336.029 121.774 335.825 121.864 335.584L125.053 335.676C124.921 336.391 124.629 337.014 124.18 337.544C123.735 338.07 123.15 338.479 122.425 338.773C121.701 339.062 120.863 339.206 119.911 339.206ZM126.863 339V328.091H130.236V330.08H130.35C130.549 329.36 130.873 328.825 131.323 328.474C131.773 328.119 132.296 327.942 132.892 327.942C133.053 327.942 133.219 327.954 133.39 327.977C133.56 327.996 133.719 328.027 133.865 328.07V331.088C133.7 331.031 133.482 330.986 133.212 330.953C132.947 330.92 132.71 330.903 132.502 330.903C132.09 330.903 131.718 330.996 131.387 331.18C131.06 331.36 130.802 331.614 130.613 331.94C130.428 332.262 130.336 332.641 130.336 333.077V339H126.863ZM139.806 339.206C138.656 339.206 137.669 338.969 136.845 338.496C136.026 338.022 135.396 337.364 134.956 336.521C134.515 335.674 134.295 334.694 134.295 333.581C134.295 332.464 134.515 331.483 134.956 330.641C135.401 329.793 136.033 329.133 136.852 328.659C137.676 328.186 138.658 327.949 139.799 327.949C140.808 327.949 141.686 328.131 142.434 328.496C143.187 328.86 143.774 329.376 144.196 330.044C144.622 330.707 144.847 331.486 144.87 332.381H141.625C141.558 331.822 141.369 331.384 141.056 331.067C140.749 330.75 140.346 330.591 139.849 330.591C139.447 330.591 139.094 330.705 138.791 330.932C138.488 331.154 138.251 331.486 138.081 331.926C137.915 332.362 137.832 332.902 137.832 333.545C137.832 334.189 137.915 334.734 138.081 335.179C138.251 335.619 138.488 335.953 138.791 336.18C139.094 336.403 139.447 336.514 139.849 336.514C140.171 336.514 140.455 336.446 140.701 336.308C140.952 336.171 141.158 335.97 141.319 335.705C141.48 335.435 141.582 335.108 141.625 334.724H144.87C144.837 335.624 144.612 336.41 144.196 337.082C143.784 337.755 143.204 338.278 142.456 338.652C141.712 339.021 140.829 339.206 139.806 339.206ZM150.121 332.778V339H146.648V324.455H150.007V330.094H150.128C150.374 329.421 150.777 328.896 151.335 328.517C151.899 328.138 152.588 327.949 153.402 327.949C154.169 327.949 154.837 328.119 155.405 328.46C155.973 328.796 156.413 329.272 156.726 329.888C157.043 330.503 157.199 331.223 157.195 332.047V339H153.722V332.729C153.726 332.123 153.575 331.649 153.267 331.308C152.959 330.967 152.526 330.797 151.967 330.797C151.603 330.797 151.281 330.877 151.001 331.038C150.727 331.195 150.511 331.42 150.355 331.713C150.204 332.007 150.125 332.362 150.121 332.778ZM162.438 339.185C161.742 339.185 161.124 339.069 160.584 338.837C160.049 338.6 159.625 338.245 159.313 337.771C159.005 337.293 158.851 336.694 158.851 335.974C158.851 335.368 158.958 334.857 159.171 334.44C159.384 334.024 159.677 333.685 160.051 333.425C160.426 333.164 160.856 332.968 161.344 332.835C161.832 332.698 162.353 332.606 162.907 332.558C163.527 332.501 164.026 332.442 164.405 332.381C164.784 332.314 165.059 332.222 165.229 332.104C165.404 331.981 165.492 331.808 165.492 331.585V331.55C165.492 331.185 165.366 330.903 165.115 330.705C164.864 330.506 164.526 330.406 164.1 330.406C163.641 330.406 163.271 330.506 162.992 330.705C162.712 330.903 162.535 331.178 162.459 331.528L159.256 331.415C159.351 330.752 159.595 330.16 159.988 329.639C160.385 329.114 160.93 328.702 161.621 328.403C162.317 328.1 163.153 327.949 164.128 327.949C164.824 327.949 165.466 328.032 166.053 328.197C166.64 328.358 167.151 328.595 167.587 328.908C168.023 329.215 168.359 329.594 168.596 330.044C168.837 330.494 168.958 331.008 168.958 331.585V339H165.691V337.48H165.605C165.411 337.849 165.163 338.162 164.86 338.418C164.561 338.673 164.209 338.865 163.801 338.993C163.399 339.121 162.944 339.185 162.438 339.185ZM163.51 336.912C163.884 336.912 164.221 336.836 164.519 336.685C164.822 336.533 165.063 336.325 165.243 336.06C165.423 335.79 165.513 335.477 165.513 335.122V334.085C165.414 334.137 165.293 334.185 165.151 334.227C165.014 334.27 164.862 334.31 164.696 334.348C164.531 334.386 164.36 334.419 164.185 334.447C164.01 334.476 163.842 334.502 163.681 334.526C163.354 334.578 163.075 334.658 162.843 334.767C162.615 334.876 162.44 335.018 162.317 335.193C162.199 335.364 162.14 335.567 162.14 335.804C162.14 336.164 162.267 336.438 162.523 336.628C162.783 336.817 163.113 336.912 163.51 336.912ZM171.081 339V328.091H174.455V330.08H174.569C174.767 329.36 175.092 328.825 175.542 328.474C175.991 328.119 176.515 327.942 177.111 327.942C177.272 327.942 177.438 327.954 177.608 327.977C177.779 327.996 177.937 328.027 178.084 328.07V331.088C177.918 331.031 177.701 330.986 177.431 330.953C177.166 330.92 176.929 330.903 176.721 330.903C176.309 330.903 175.937 330.996 175.605 331.18C175.279 331.36 175.021 331.614 174.831 331.94C174.647 332.262 174.554 332.641 174.554 333.077V339H171.081ZM184.018 343.318C182.981 343.318 182.093 343.174 181.355 342.885C180.616 342.596 180.036 342.201 179.615 341.699C179.193 341.197 178.94 340.629 178.855 339.994L182.143 339.81C182.205 340.032 182.318 340.226 182.484 340.392C182.654 340.558 182.875 340.686 183.145 340.776C183.419 340.866 183.741 340.911 184.11 340.911C184.693 340.911 185.173 340.768 185.552 340.484C185.936 340.205 186.127 339.715 186.127 339.014V337.097H186.007C185.869 337.433 185.661 337.733 185.382 337.999C185.102 338.264 184.754 338.472 184.338 338.624C183.926 338.775 183.452 338.851 182.917 338.851C182.122 338.851 181.393 338.666 180.73 338.297C180.072 337.923 179.544 337.345 179.146 336.564C178.753 335.778 178.556 334.767 178.556 333.531C178.556 332.258 178.76 331.209 179.167 330.385C179.574 329.556 180.107 328.943 180.765 328.545C181.428 328.148 182.141 327.949 182.903 327.949C183.476 327.949 183.966 328.048 184.373 328.247C184.785 328.441 185.124 328.692 185.389 329C185.654 329.308 185.855 329.627 185.993 329.959H186.092V328.091H189.551V339.043C189.551 339.966 189.319 340.745 188.855 341.379C188.391 342.014 187.742 342.494 186.909 342.821C186.075 343.152 185.112 343.318 184.018 343.318ZM184.125 336.322C184.546 336.322 184.906 336.211 185.204 335.989C185.502 335.766 185.732 335.446 185.893 335.03C186.054 334.613 186.135 334.114 186.135 333.531C186.135 332.939 186.054 332.43 185.893 332.004C185.737 331.573 185.507 331.242 185.204 331.01C184.906 330.778 184.546 330.662 184.125 330.662C183.694 330.662 183.329 330.78 183.031 331.017C182.733 331.254 182.505 331.588 182.349 332.018C182.198 332.445 182.122 332.949 182.122 333.531C182.122 334.114 182.2 334.613 182.356 335.03C182.512 335.446 182.737 335.766 183.031 335.989C183.329 336.211 183.694 336.322 184.125 336.322ZM196.864 339.206C195.723 339.206 194.738 338.981 193.91 338.531C193.086 338.077 192.451 337.43 192.006 336.592C191.566 335.75 191.346 334.748 191.346 333.588C191.346 332.461 191.568 331.476 192.013 330.634C192.459 329.786 193.086 329.128 193.896 328.659C194.705 328.186 195.659 327.949 196.758 327.949C197.534 327.949 198.245 328.07 198.888 328.311C199.532 328.553 200.089 328.91 200.558 329.384C201.026 329.857 201.391 330.442 201.651 331.138C201.912 331.829 202.042 332.622 202.042 333.517V334.384H192.56V332.366H198.81C198.806 331.997 198.718 331.668 198.548 331.379C198.377 331.09 198.143 330.866 197.844 330.705C197.551 330.539 197.212 330.456 196.829 330.456C196.441 330.456 196.093 330.544 195.785 330.719C195.477 330.889 195.233 331.124 195.053 331.422C194.873 331.715 194.779 332.049 194.769 332.423V334.476C194.769 334.921 194.857 335.312 195.032 335.648C195.207 335.979 195.456 336.237 195.778 336.422C196.1 336.607 196.483 336.699 196.928 336.699C197.236 336.699 197.515 336.656 197.766 336.571C198.017 336.486 198.233 336.36 198.413 336.195C198.593 336.029 198.728 335.825 198.817 335.584L202.006 335.676C201.874 336.391 201.583 337.014 201.133 337.544C200.688 338.07 200.103 338.479 199.379 338.773C198.654 339.062 197.816 339.206 196.864 339.206ZM207.388 324.455H211.316L214.391 330.541H214.519L217.594 324.455H221.522L216.202 334.142V339H212.708V334.142L207.388 324.455ZM225.568 339.206C224.422 339.206 223.438 338.972 222.614 338.503C221.795 338.029 221.162 337.371 220.717 336.528C220.277 335.681 220.057 334.698 220.057 333.581C220.057 332.459 220.277 331.476 220.717 330.634C221.162 329.786 221.795 329.128 222.614 328.659C223.438 328.186 224.422 327.949 225.568 327.949C226.714 327.949 227.696 328.186 228.516 328.659C229.339 329.128 229.972 329.786 230.412 330.634C230.857 331.476 231.08 332.459 231.08 333.581C231.08 334.698 230.857 335.681 230.412 336.528C229.972 337.371 229.339 338.029 228.516 338.503C227.696 338.972 226.714 339.206 225.568 339.206ZM225.589 336.585C226.006 336.585 226.359 336.457 226.648 336.202C226.937 335.946 227.157 335.591 227.308 335.136C227.464 334.682 227.543 334.156 227.543 333.56C227.543 332.954 227.464 332.423 227.308 331.969C227.157 331.514 226.937 331.159 226.648 330.903C226.359 330.648 226.006 330.52 225.589 330.52C225.159 330.52 224.794 330.648 224.496 330.903C224.202 331.159 223.977 331.514 223.821 331.969C223.67 332.423 223.594 332.954 223.594 333.56C223.594 334.156 223.67 334.682 223.821 335.136C223.977 335.591 224.202 335.946 224.496 336.202C224.794 336.457 225.159 336.585 225.589 336.585ZM239.897 334.291V328.091H243.363V339H240.053V336.969H239.94C239.698 337.636 239.286 338.167 238.704 338.56C238.126 338.948 237.428 339.142 236.609 339.142C235.865 339.142 235.212 338.972 234.648 338.631C234.085 338.29 233.647 337.814 233.335 337.203C233.022 336.588 232.863 335.868 232.859 335.044V328.091H236.332V334.362C236.336 334.954 236.493 335.42 236.8 335.761C237.108 336.102 237.527 336.273 238.058 336.273C238.403 336.273 238.713 336.197 238.988 336.045C239.267 335.889 239.487 335.664 239.648 335.371C239.814 335.072 239.897 334.713 239.897 334.291ZM245.574 339V328.091H248.947V330.08H249.061C249.26 329.36 249.584 328.825 250.034 328.474C250.484 328.119 251.007 327.942 251.603 327.942C251.764 327.942 251.93 327.954 252.1 327.977C252.271 327.996 252.43 328.027 252.576 328.07V331.088C252.411 331.031 252.193 330.986 251.923 330.953C251.658 330.92 251.421 330.903 251.213 330.903C250.801 330.903 250.429 330.996 250.098 331.18C249.771 331.36 249.513 331.614 249.324 331.94C249.139 332.262 249.047 332.641 249.047 333.077V339H245.574ZM258.288 324.455H262.642L266.335 333.46H266.506L270.199 324.455H274.553V339H271.129V330.065H271.009L267.514 338.908H265.327L261.832 330.016H261.712V339H258.288V324.455ZM279.821 339.185C279.125 339.185 278.507 339.069 277.967 338.837C277.432 338.6 277.008 338.245 276.696 337.771C276.388 337.293 276.234 336.694 276.234 335.974C276.234 335.368 276.341 334.857 276.554 334.44C276.767 334.024 277.06 333.685 277.434 333.425C277.808 333.164 278.239 332.968 278.727 332.835C279.215 332.698 279.735 332.606 280.289 332.558C280.91 332.501 281.409 332.442 281.788 332.381C282.167 332.314 282.441 332.222 282.612 332.104C282.787 331.981 282.875 331.808 282.875 331.585V331.55C282.875 331.185 282.749 330.903 282.498 330.705C282.247 330.506 281.909 330.406 281.483 330.406C281.023 330.406 280.654 330.506 280.375 330.705C280.095 330.903 279.918 331.178 279.842 331.528L276.639 331.415C276.734 330.752 276.977 330.16 277.37 329.639C277.768 329.114 278.313 328.702 279.004 328.403C279.7 328.1 280.536 327.949 281.511 327.949C282.207 327.949 282.849 328.032 283.436 328.197C284.023 328.358 284.534 328.595 284.97 328.908C285.405 329.215 285.742 329.594 285.978 330.044C286.22 330.494 286.341 331.008 286.341 331.585V339H283.074V337.48H282.988C282.794 337.849 282.546 338.162 282.243 338.418C281.944 338.673 281.592 338.865 281.184 338.993C280.782 339.121 280.327 339.185 279.821 339.185ZM280.893 336.912C281.267 336.912 281.603 336.836 281.902 336.685C282.205 336.533 282.446 336.325 282.626 336.06C282.806 335.79 282.896 335.477 282.896 335.122V334.085C282.797 334.137 282.676 334.185 282.534 334.227C282.396 334.27 282.245 334.31 282.079 334.348C281.913 334.386 281.743 334.419 281.568 334.447C281.393 334.476 281.225 334.502 281.064 334.526C280.737 334.578 280.458 334.658 280.225 334.767C279.998 334.876 279.823 335.018 279.7 335.193C279.582 335.364 279.522 335.567 279.522 335.804C279.522 336.164 279.65 336.438 279.906 336.628C280.166 336.817 280.495 336.912 280.893 336.912ZM288.464 339V328.091H291.838V330.08H291.951C292.15 329.36 292.475 328.825 292.924 328.474C293.374 328.119 293.897 327.942 294.494 327.942C294.655 327.942 294.821 327.954 294.991 327.977C295.162 327.996 295.32 328.027 295.467 328.07V331.088C295.301 331.031 295.083 330.986 294.814 330.953C294.548 330.92 294.312 330.903 294.103 330.903C293.691 330.903 293.32 330.996 292.988 331.18C292.662 331.36 292.404 331.614 292.214 331.94C292.029 332.262 291.937 332.641 291.937 333.077V339H288.464ZM300.014 336.138L300.028 331.997H300.511L303.58 328.091H307.514L302.955 333.688H302.038L300.014 336.138ZM296.882 339V324.455H300.355V339H296.882ZM303.658 339L300.803 334.469L303.089 332.004L307.67 339H303.658ZM313.407 339.206C312.266 339.206 311.281 338.981 310.453 338.531C309.629 338.077 308.994 337.43 308.549 336.592C308.109 335.75 307.889 334.748 307.889 333.588C307.889 332.461 308.111 331.476 308.556 330.634C309.002 329.786 309.629 329.128 310.439 328.659C311.248 328.186 312.202 327.949 313.301 327.949C314.077 327.949 314.788 328.07 315.431 328.311C316.075 328.553 316.632 328.91 317.1 329.384C317.569 329.857 317.934 330.442 318.194 331.138C318.455 331.829 318.585 332.622 318.585 333.517V334.384H309.103V332.366H315.353C315.349 331.997 315.261 331.668 315.091 331.379C314.92 331.09 314.686 330.866 314.387 330.705C314.094 330.539 313.755 330.456 313.372 330.456C312.984 330.456 312.636 330.544 312.328 330.719C312.02 330.889 311.776 331.124 311.596 331.422C311.416 331.715 311.322 332.049 311.312 332.423V334.476C311.312 334.921 311.4 335.312 311.575 335.648C311.75 335.979 311.999 336.237 312.321 336.422C312.643 336.607 313.026 336.699 313.471 336.699C313.779 336.699 314.058 336.656 314.309 336.571C314.56 336.486 314.776 336.36 314.956 336.195C315.136 336.029 315.27 335.825 315.36 335.584L318.549 335.676C318.417 336.391 318.126 337.014 317.676 337.544C317.231 338.07 316.646 338.479 315.922 338.773C315.197 339.062 314.359 339.206 313.407 339.206ZM326.516 328.091V330.648H319.634V328.091H326.516ZM321.076 325.477H324.549V335.57C324.549 335.783 324.582 335.955 324.648 336.088C324.719 336.216 324.821 336.308 324.954 336.365C325.086 336.417 325.245 336.443 325.43 336.443C325.562 336.443 325.702 336.431 325.849 336.408C326 336.379 326.114 336.356 326.19 336.337L326.715 338.844C326.549 338.891 326.315 338.95 326.012 339.021C325.714 339.092 325.356 339.137 324.94 339.156C324.125 339.194 323.427 339.099 322.844 338.872C322.267 338.64 321.824 338.28 321.516 337.793C321.213 337.305 321.067 336.692 321.076 335.953V325.477ZM328.288 339V328.091H331.761V339H328.288ZM330.028 326.82C329.541 326.82 329.122 326.659 328.771 326.337C328.421 326.01 328.246 325.617 328.246 325.158C328.246 324.703 328.421 324.315 328.771 323.993C329.122 323.666 329.541 323.503 330.028 323.503C330.521 323.503 330.94 323.666 331.286 323.993C331.636 324.315 331.811 324.703 331.811 325.158C331.811 325.617 331.636 326.01 331.286 326.337C330.94 326.659 330.521 326.82 330.028 326.82ZM337.445 332.778V339H333.972V328.091H337.275V330.094H337.395C337.637 329.426 338.049 328.903 338.631 328.524C339.213 328.141 339.907 327.949 340.712 327.949C341.479 327.949 342.144 328.122 342.708 328.467C343.276 328.808 343.716 329.286 344.029 329.902C344.346 330.513 344.502 331.228 344.498 332.047V339H341.025V332.729C341.029 332.123 340.875 331.649 340.563 331.308C340.255 330.967 339.827 330.797 339.277 330.797C338.913 330.797 338.591 330.877 338.311 331.038C338.037 331.195 337.824 331.42 337.672 331.713C337.525 332.007 337.45 332.362 337.445 332.778ZM351.733 343.318C350.696 343.318 349.808 343.174 349.07 342.885C348.331 342.596 347.751 342.201 347.33 341.699C346.908 341.197 346.655 340.629 346.57 339.994L349.858 339.81C349.92 340.032 350.033 340.226 350.199 340.392C350.369 340.558 350.589 340.686 350.859 340.776C351.134 340.866 351.456 340.911 351.825 340.911C352.408 340.911 352.888 340.768 353.267 340.484C353.651 340.205 353.842 339.715 353.842 339.014V337.097H353.722C353.584 337.433 353.376 337.733 353.097 337.999C352.817 338.264 352.469 338.472 352.053 338.624C351.641 338.775 351.167 338.851 350.632 338.851C349.837 338.851 349.107 338.666 348.445 338.297C347.786 337.923 347.259 337.345 346.861 336.564C346.468 335.778 346.271 334.767 346.271 333.531C346.271 332.258 346.475 331.209 346.882 330.385C347.289 329.556 347.822 328.943 348.48 328.545C349.143 328.148 349.856 327.949 350.618 327.949C351.191 327.949 351.681 328.048 352.088 328.247C352.5 328.441 352.839 328.692 353.104 329C353.369 329.308 353.57 329.627 353.707 329.959H353.807V328.091H357.266V339.043C357.266 339.966 357.034 340.745 356.57 341.379C356.106 342.014 355.457 342.494 354.624 342.821C353.79 343.152 352.827 343.318 351.733 343.318ZM351.839 336.322C352.261 336.322 352.621 336.211 352.919 335.989C353.217 335.766 353.447 335.446 353.608 335.03C353.769 334.613 353.849 334.114 353.849 333.531C353.849 332.939 353.769 332.43 353.608 332.004C353.452 331.573 353.222 331.242 352.919 331.01C352.621 330.778 352.261 330.662 351.839 330.662C351.409 330.662 351.044 330.78 350.746 331.017C350.447 331.254 350.22 331.588 350.064 332.018C349.912 332.445 349.837 332.949 349.837 333.531C349.837 334.114 349.915 334.613 350.071 335.03C350.227 335.446 350.452 335.766 350.746 335.989C351.044 336.211 351.409 336.322 351.839 336.322ZM363.777 339V324.455H373.706V327.31H367.292V330.293H373.074V333.155H367.292V339H363.777ZM381.831 334.291V328.091H385.297V339H381.987V336.969H381.873C381.632 337.636 381.22 338.167 380.637 338.56C380.06 338.948 379.361 339.142 378.542 339.142C377.799 339.142 377.145 338.972 376.582 338.631C376.019 338.29 375.581 337.814 375.268 337.203C374.956 336.588 374.797 335.868 374.792 335.044V328.091H378.265V334.362C378.27 334.954 378.426 335.42 378.734 335.761C379.042 336.102 379.461 336.273 379.991 336.273C380.337 336.273 380.647 336.197 380.922 336.045C381.201 335.889 381.421 335.664 381.582 335.371C381.748 335.072 381.831 334.713 381.831 334.291ZM390.98 332.778V339H387.507V328.091H390.81V330.094H390.93C391.172 329.426 391.584 328.903 392.166 328.524C392.749 328.141 393.442 327.949 394.247 327.949C395.014 327.949 395.679 328.122 396.243 328.467C396.811 328.808 397.251 329.286 397.564 329.902C397.881 330.513 398.037 331.228 398.033 332.047V339H394.56V332.729C394.564 332.123 394.411 331.649 394.098 331.308C393.79 330.967 393.362 330.797 392.812 330.797C392.448 330.797 392.126 330.877 391.847 331.038C391.572 331.195 391.359 331.42 391.207 331.713C391.061 332.007 390.985 332.362 390.98 332.778ZM403.656 332.778V339H400.183V328.091H403.485V330.094H403.606C403.848 329.426 404.26 328.903 404.842 328.524C405.424 328.141 406.118 327.949 406.923 327.949C407.69 327.949 408.355 328.122 408.919 328.467C409.487 328.808 409.927 329.286 410.24 329.902C410.557 330.513 410.713 331.228 410.708 332.047V339H407.235V332.729C407.24 332.123 407.086 331.649 406.774 331.308C406.466 330.967 406.038 330.797 405.488 330.797C405.124 330.797 404.802 330.877 404.522 331.038C404.248 331.195 404.035 331.42 403.883 331.713C403.736 332.007 403.661 332.362 403.656 332.778ZM417.958 339.206C416.817 339.206 415.832 338.981 415.004 338.531C414.18 338.077 413.545 337.43 413.1 336.592C412.66 335.75 412.44 334.748 412.44 333.588C412.44 332.461 412.662 331.476 413.107 330.634C413.552 329.786 414.18 329.128 414.989 328.659C415.799 328.186 416.753 327.949 417.852 327.949C418.628 327.949 419.338 328.07 419.982 328.311C420.626 328.553 421.183 328.91 421.651 329.384C422.12 329.857 422.485 330.442 422.745 331.138C423.005 331.829 423.136 332.622 423.136 333.517V334.384H413.654V332.366H419.904C419.899 331.997 419.812 331.668 419.641 331.379C419.471 331.09 419.237 330.866 418.938 330.705C418.645 330.539 418.306 330.456 417.923 330.456C417.534 330.456 417.186 330.544 416.879 330.719C416.571 330.889 416.327 331.124 416.147 331.422C415.967 331.715 415.872 332.049 415.863 332.423V334.476C415.863 334.921 415.951 335.312 416.126 335.648C416.301 335.979 416.549 336.237 416.871 336.422C417.193 336.607 417.577 336.699 418.022 336.699C418.33 336.699 418.609 336.656 418.86 336.571C419.111 336.486 419.326 336.36 419.506 336.195C419.686 336.029 419.821 335.825 419.911 335.584L423.1 335.676C422.968 336.391 422.676 337.014 422.227 337.544C421.781 338.07 421.197 338.479 420.472 338.773C419.748 339.062 418.91 339.206 417.958 339.206ZM428.382 324.455V339H424.909V324.455H428.382ZM440.117 331.422L436.928 331.507C436.895 331.28 436.805 331.079 436.658 330.903C436.512 330.723 436.32 330.584 436.083 330.484C435.851 330.38 435.581 330.328 435.273 330.328C434.871 330.328 434.528 330.409 434.244 330.57C433.964 330.731 433.827 330.948 433.832 331.223C433.827 331.436 433.912 331.621 434.087 331.777C434.267 331.933 434.587 332.059 435.046 332.153L437.148 332.551C438.237 332.759 439.047 333.105 439.577 333.588C440.112 334.071 440.382 334.71 440.387 335.506C440.382 336.254 440.16 336.905 439.719 337.459C439.284 338.013 438.687 338.444 437.93 338.751C437.172 339.054 436.306 339.206 435.33 339.206C433.772 339.206 432.544 338.886 431.644 338.247C430.749 337.603 430.238 336.741 430.11 335.662L433.54 335.577C433.616 335.974 433.813 336.277 434.13 336.486C434.447 336.694 434.852 336.798 435.344 336.798C435.79 336.798 436.152 336.715 436.431 336.55C436.71 336.384 436.853 336.164 436.857 335.889C436.853 335.643 436.744 335.446 436.531 335.3C436.317 335.148 435.984 335.03 435.529 334.945L433.626 334.582C432.532 334.384 431.718 334.017 431.183 333.482C430.647 332.942 430.382 332.255 430.387 331.422C430.382 330.693 430.576 330.07 430.969 329.554C431.362 329.033 431.921 328.635 432.646 328.361C433.37 328.086 434.225 327.949 435.21 327.949C436.687 327.949 437.852 328.259 438.704 328.879C439.556 329.495 440.027 330.342 440.117 331.422Z"
      fill="black"
    />
  </svg>
);

export default Logo;
