import "./handshake.scss";
import { useInView } from "react-intersection-observer";

export default function Handshake() {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  return (
    <svg
      className={inView && "animate_hs"}
      width="617"
      height="500"
      viewBox="0 0 617 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
    >
      <g id="agreement" clip-path="url(#clip0_1_2)">
        <path
          id="ground"
          d="M616.477 499.033C616.478 499.16 616.453 499.286 616.404 499.403C616.356 499.521 616.285 499.627 616.195 499.717C616.105 499.807 615.998 499.878 615.881 499.927C615.763 499.975 615.637 500 615.51 500H0.966978C0.710523 500 0.464581 499.898 0.28324 499.716C0.101898 499.535 1.0796e-05 499.289 1.0796e-05 499.033C1.0796e-05 498.776 0.101898 498.53 0.28324 498.349C0.464581 498.168 0.710523 498.066 0.966978 498.066H615.51C615.637 498.065 615.763 498.09 615.881 498.138C615.998 498.187 616.105 498.258 616.195 498.348C616.285 498.438 616.356 498.545 616.404 498.662C616.453 498.78 616.478 498.906 616.477 499.033V499.033Z"
          fill="#CCCCCC"
        />
        <g id="background">
          <path
            id="Vector"
            d="M49.0193 225.594H23.1764C22.6242 225.595 22.079 225.471 21.5816 225.231C21.0841 224.992 20.6474 224.643 20.3042 224.21C19.9651 223.789 19.7258 223.296 19.6044 222.769C19.483 222.242 19.4825 221.694 19.6031 221.167C22.0644 210.306 21.9097 199.017 19.152 188.228C18.9775 187.518 19.0197 186.771 19.2731 186.085C19.5264 185.399 19.9793 184.804 20.5736 184.378C33.862 174.82 44.3271 175.098 51.6784 185.203C52.0098 185.664 52.2299 186.195 52.3216 186.755C54.2858 198.563 54.3945 210.606 52.6437 222.448C52.5221 223.322 52.0878 224.122 51.4215 224.7C50.7551 225.279 49.9017 225.596 49.0193 225.594V225.594Z"
            fill="#E6E6E6"
          />
          <path
            id="Vector_2"
            d="M41.0073 199.714H32.1173C31.6257 199.714 31.1542 199.519 30.8066 199.171C30.459 198.824 30.2638 198.352 30.2638 197.861C30.2638 197.369 30.459 196.898 30.8066 196.55C31.1542 196.202 31.6257 196.007 32.1173 196.007H41.0073C41.4982 196.008 41.9687 196.204 42.3155 196.551C42.6623 196.899 42.857 197.37 42.857 197.861C42.857 198.352 42.6623 198.822 42.3155 199.17C41.9687 199.517 41.4982 199.713 41.0073 199.714V199.714Z"
            fill="white"
          />
          <path
            id="Vector_3"
            d="M41.0073 206.215H32.1173C31.6257 206.215 31.1542 206.019 30.8066 205.672C30.459 205.324 30.2638 204.853 30.2638 204.361C30.2638 203.87 30.459 203.398 30.8066 203.051C31.1542 202.703 31.6257 202.508 32.1173 202.508H41.0073C41.4982 202.509 41.9687 202.704 42.3155 203.052C42.6623 203.399 42.857 203.87 42.857 204.361C42.857 204.852 42.6623 205.323 42.3155 205.671C41.9687 206.018 41.4982 206.214 41.0073 206.215V206.215Z"
            fill="white"
          />
          <path
            id="Vector_4"
            d="M41.0073 212.715H32.1173C31.6257 212.715 31.1542 212.52 30.8066 212.172C30.459 211.825 30.2638 211.353 30.2638 210.862C30.2638 210.37 30.459 209.899 30.8066 209.551C31.1542 209.204 31.6257 209.008 32.1173 209.008H41.0073C41.4982 209.009 41.9687 209.205 42.3155 209.553C42.6623 209.9 42.857 210.371 42.857 210.862C42.857 211.353 42.6623 211.824 42.3155 212.171C41.9687 212.519 41.4982 212.714 41.0073 212.715V212.715Z"
            fill="white"
          />
          <path
            id="Vector_5"
            d="M518.688 340.98H492.845C492.293 340.981 491.748 340.857 491.251 340.617C490.753 340.378 490.316 340.029 489.973 339.596C489.634 339.175 489.395 338.682 489.273 338.155C489.152 337.628 489.152 337.08 489.272 336.553C491.733 325.692 491.579 314.403 488.821 303.614C488.647 302.903 488.689 302.157 488.942 301.471C489.195 300.785 489.648 300.19 490.243 299.764C503.531 290.206 513.996 290.484 521.347 300.589C521.679 301.05 521.899 301.581 521.991 302.141C523.955 313.949 524.064 325.992 522.313 337.834C522.191 338.708 521.757 339.508 521.09 340.086C520.424 340.665 519.571 340.982 518.688 340.98V340.98Z"
            fill="#E6E6E6"
          />
          <path
            id="Vector_6"
            d="M510.676 315.1H501.786C501.295 315.099 500.825 314.903 500.478 314.556C500.131 314.208 499.937 313.737 499.937 313.246C499.937 312.756 500.131 312.285 500.478 311.937C500.825 311.59 501.295 311.394 501.786 311.393H510.676C511.168 311.393 511.639 311.588 511.987 311.936C512.335 312.283 512.53 312.755 512.53 313.246C512.53 313.738 512.335 314.209 511.987 314.557C511.639 314.905 511.168 315.1 510.676 315.1Z"
            fill="white"
          />
          <path
            id="Vector_7"
            d="M510.676 321.601H501.786C501.295 321.6 500.825 321.404 500.478 321.056C500.131 320.709 499.937 320.238 499.937 319.747C499.937 319.256 500.131 318.785 500.478 318.438C500.825 318.09 501.295 317.894 501.786 317.893H510.676C511.168 317.893 511.639 318.089 511.987 318.436C512.335 318.784 512.53 319.255 512.53 319.747C512.53 320.239 512.335 320.71 511.987 321.058C511.639 321.405 511.168 321.601 510.676 321.601Z"
            fill="white"
          />
          <path
            id="Vector_8"
            d="M510.676 328.101H501.786C501.295 328.1 500.825 327.904 500.478 327.557C500.131 327.209 499.937 326.739 499.937 326.248C499.937 325.757 500.131 325.286 500.478 324.938C500.825 324.591 501.295 324.395 501.786 324.394H510.676C511.168 324.394 511.639 324.589 511.987 324.937C512.335 325.285 512.53 325.756 512.53 326.248C512.53 326.739 512.335 327.211 511.987 327.558C511.639 327.906 511.168 328.101 510.676 328.101Z"
            fill="white"
          />
          <path
            id="Vector_9"
            d="M162.112 439.828L160.5 417.41C149.942 412.132 138.255 409.512 126.454 409.775C143.056 422.608 141.727 448.257 153.224 465.81C156.853 471.258 161.66 475.819 167.29 479.155C172.921 482.492 179.23 484.519 185.75 485.086L199.567 493.035C201.148 482.588 200.445 471.923 197.507 461.775C194.569 451.626 189.465 442.235 182.548 434.248C178.624 429.806 174.155 425.876 169.248 422.551C166.228 431.222 162.112 439.828 162.112 439.828Z"
            fill="#F2F2F2"
          />
          <path
            id="Vector_10"
            d="M454.365 443.078L455.977 420.661C466.535 415.383 478.222 412.762 490.023 413.026C473.421 425.859 474.751 451.507 463.253 469.061C459.625 474.508 454.817 479.069 449.187 482.406C443.557 485.742 437.247 487.769 430.727 488.336L416.91 496.285C415.33 485.839 416.032 475.174 418.971 465.025C421.909 454.876 427.012 445.485 433.929 437.499C437.854 433.057 442.322 429.127 447.229 425.801C450.249 434.473 454.365 443.078 454.365 443.078Z"
            fill="#F2F2F2"
          />
          <path
            id="Vector_11"
            d="M327.512 314.877L300.351 302.051C299.77 301.778 299.258 301.377 298.854 300.879C298.45 300.38 298.165 299.796 298.019 299.171C297.871 298.56 297.865 297.923 297.999 297.309C298.133 296.695 298.404 296.119 298.792 295.624C306.66 285.569 312.063 273.81 314.567 261.29C314.756 260.331 315.272 259.468 316.026 258.847C316.781 258.226 317.727 257.886 318.705 257.885C332.557 257.932 342.91 262.99 349.475 272.917C349.821 273.434 350.051 274.019 350.147 274.633C350.244 275.247 350.205 275.875 350.035 276.473C346.233 289.575 340.449 302.017 332.883 313.369C332.321 314.227 331.467 314.853 330.48 315.13C329.493 315.407 328.438 315.317 327.512 314.877Z"
            fill="#E6E6E6"
          />
          <path
            id="Vector_12"
            d="M335.502 296.888L314.734 287.081C314.218 286.837 313.819 286.398 313.626 285.86C313.433 285.322 313.462 284.73 313.706 284.213C313.95 283.696 314.389 283.298 314.927 283.105C315.465 282.912 316.057 282.941 316.574 283.185L337.342 292.992C337.598 293.112 337.827 293.282 338.018 293.492C338.208 293.701 338.355 293.946 338.45 294.213C338.546 294.479 338.588 294.761 338.574 295.044C338.56 295.327 338.491 295.604 338.37 295.86C338.249 296.115 338.079 296.345 337.87 296.535C337.66 296.725 337.415 296.872 337.149 296.968C336.883 297.063 336.6 297.105 336.318 297.092C336.035 297.078 335.758 297.009 335.502 296.888H335.502Z"
            fill="white"
          />
          <path
            id="Vector_13"
            d="M338.728 290.055L317.96 280.249C317.444 280.005 317.045 279.566 316.852 279.028C316.66 278.49 316.688 277.897 316.932 277.381C317.176 276.864 317.616 276.465 318.153 276.273C318.691 276.08 319.284 276.109 319.8 276.352L340.568 286.159C341.085 286.403 341.484 286.842 341.676 287.38C341.869 287.918 341.84 288.511 341.596 289.027C341.352 289.544 340.913 289.943 340.375 290.135C339.838 290.328 339.245 290.3 338.728 290.056V290.055Z"
            fill="white"
          />
          <path
            id="Vector_14"
            d="M43.2122 179.603C45.4139 176.294 44.1107 171.557 40.3016 169.023C36.4925 166.489 31.6199 167.117 29.4183 170.426C27.2166 173.735 28.5197 178.472 32.3288 181.007C36.1379 183.541 41.0106 182.912 43.2122 179.603Z"
            fill="#CCCCCC"
          />
          <path
            id="Vector_15"
            d="M512.022 299.108C514.223 295.799 512.92 291.062 509.111 288.528C505.302 285.994 500.429 286.622 498.228 289.931C496.026 293.24 497.329 297.977 501.138 300.511C504.947 303.046 509.82 302.417 512.022 299.108Z"
            fill="#CCCCCC"
          />
        </g>
        <g id="right_sign">
          <path
            id="Vector_16"
            d="M300.925 190.096C309.452 190.096 316.364 183.184 316.364 174.657C316.364 166.13 309.452 159.218 300.925 159.218C292.399 159.218 285.486 166.13 285.486 174.657C285.486 183.184 292.399 190.096 300.925 190.096Z"
            fill="#0578F3"
          />
          <path
            id="Vector_17"
            d="M308.851 168.223C308.619 168.001 308.31 167.877 307.989 167.877C307.668 167.877 307.359 168.001 307.127 168.223C303.851 170.835 300.909 173.841 298.366 177.171C297.742 175.964 297.118 174.756 296.493 173.548C295.773 172.154 293.669 173.385 294.389 174.778C295.302 176.545 296.215 178.312 297.128 180.078C297.238 180.259 297.392 180.408 297.577 180.511C297.761 180.614 297.969 180.669 298.18 180.669C298.391 180.669 298.599 180.614 298.783 180.511C298.968 180.408 299.122 180.259 299.233 180.078C301.942 176.262 305.181 172.851 308.851 169.946C309.078 169.717 309.205 169.407 309.205 169.084C309.205 168.762 309.078 168.452 308.851 168.223V168.223Z"
            fill="white"
          />
        </g>
        <g id="cynetics">
          <g id="right_cynetics">
            <path
              id="Vector_18"
              d="M492.149 91.0762C488.947 126.361 479.823 163.567 465.515 199.465C447.821 243.859 423.646 282.96 395.604 312.543L394.047 311.186C421.954 281.746 446.019 242.817 463.639 198.607C479.564 158.655 489.035 117.08 491.043 78.393L493.031 78.7259C492.82 82.8117 492.526 86.9285 492.149 91.0762Z"
              fill="#F2F2F2"
            />
            <path
              id="Vector_19"
              d="M504.904 296.003C465.516 358.666 417.731 403.439 370.349 422.073L369.391 420.316C416.445 401.81 463.95 357.267 503.158 294.891L504.904 296.003Z"
              fill="#F2F2F2"
            />
            <path
              id="Vector_20"
              d="M491.193 135.007C487.991 170.292 478.867 207.498 464.559 243.396C446.865 287.79 422.69 326.891 394.648 356.474L393.091 355.117C420.998 325.677 445.063 286.748 462.683 242.538C478.608 202.586 488.079 161.011 490.087 122.324L492.075 122.657C491.864 126.743 491.57 130.859 491.193 135.007Z"
              fill="#F2F2F2"
            />
          </g>
          <g id="left_cynetics">
            <path
              id="Vector_21"
              d="M310.978 75.5818L309.045 75.7936C300.425 41.9219 283.718 18.4559 260.728 7.93212C231.501 -5.4455 195.361 3.53782 158.965 33.2276C122.385 63.069 90.0008 110.205 67.7804 165.956L65.9046 165.098C88.2226 109.103 120.773 61.7393 157.558 31.732C194.529 1.57311 231.406 -7.47608 261.397 6.2518C285.047 17.0772 302.192 41.0512 310.978 75.5818Z"
              fill="#F2F2F2"
            />
            <path
              id="Vector_22"
              d="M97.6977 119.695C92.6421 130.346 87.8335 141.379 83.4052 152.489C57.9223 216.425 45.0088 281.72 46.064 341.319L44.0724 341.106C43.0161 281.285 55.9668 215.766 81.5294 151.631C85.9704 140.489 90.7928 129.425 95.8629 118.744L97.6977 119.695Z"
              fill="#F2F2F2"
            />
            <path
              id="Vector_23"
              d="M96.7418 163.626C91.6862 174.276 86.8775 185.31 82.4492 196.42C56.9664 260.356 44.0528 325.65 45.1081 385.249L43.1165 385.037C42.0601 325.216 55.0109 259.696 80.5735 195.562C85.0145 184.42 89.8368 173.355 94.9069 162.675L96.7418 163.626Z"
              fill="#F2F2F2"
            />
          </g>
        </g>
        <g id="right_dude">
          <path
            id="Vector_24"
            d="M362 272.59L404.985 228.94L416.31 194.029L398.086 186.658C389.058 195.764 379.764 223.642 379.764 223.642L350.426 263.018C350.192 263.105 349.958 263.197 349.728 263.306C348.377 263.944 347.214 264.919 346.35 266.138C345.486 267.357 344.952 268.778 344.798 270.264C344.644 271.749 344.876 273.25 345.471 274.62C346.066 275.99 347.005 277.183 348.196 278.084C349.388 278.985 350.791 279.564 352.272 279.764C353.752 279.964 355.259 279.779 356.647 279.227C358.034 278.675 359.256 277.774 360.194 276.611C361.132 275.448 361.754 274.063 362 272.59Z"
            fill="#FFB8B8"
          />
          <path
            id="Vector_25"
            d="M393.114 190.651L416.162 197.318L416.247 197.302C424.719 195.657 431.421 181.578 435.55 170.057C436.909 166.257 436.774 162.083 435.173 158.379C433.572 154.675 430.624 151.716 426.925 150.102V150.102C424.188 148.93 421.179 148.547 418.236 148.996C415.293 149.444 412.534 150.707 410.271 152.642L398.78 162.537L393.114 190.651Z"
            fill="#0578F3"
          />
          <path
            id="Vector_26"
            d="M373.396 486.648L361.001 486.647L355.105 438.839L373.397 438.84L373.396 486.648Z"
            fill="#FFB8B8"
          />
          <path
            id="Vector_27"
            d="M376.558 482.601L373.069 482.601L359.448 477.062L352.148 482.6H352.147C348.021 482.6 344.065 484.239 341.148 487.156C338.23 490.073 336.591 494.03 336.591 498.155V498.661L376.557 498.662L376.558 482.601Z"
            fill="#2F2E41"
          />
          <path
            id="Vector_28"
            d="M428.393 486.648L415.998 486.647L410.102 438.839L428.396 438.84L428.393 486.648Z"
            fill="#FFB8B8"
          />
          <path
            id="Vector_29"
            d="M431.555 482.601L428.067 482.601L414.446 477.062L407.146 482.6H407.145C403.019 482.6 399.063 484.239 396.145 487.156C393.228 490.073 391.589 494.03 391.589 498.155V498.661L431.555 498.662L431.555 482.601Z"
            fill="#2F2E41"
          />
          <path
            id="Vector_30"
            d="M447.293 280.72C447.293 280.72 448.74 298.088 445.122 314.732C441.504 331.376 441.504 378.251 441.504 378.251L433.544 469.594L409.663 467.423L403.15 314.732L379.993 366.112L382.164 373.348L379.272 375.157C379.272 375.157 381.441 389.268 379.993 389.268C378.546 389.268 374.928 391.439 374.928 391.439L377.822 465.976L353.218 465.252L344.534 360.322L353.942 300.259L354.665 288.681L357.922 288.814L359.58 283.977L362.626 275.655L447.293 280.72Z"
            fill="#2F2E41"
          />
          <path
            id="Vector_31"
            d="M448.544 284.368L448.673 284.187C455.561 274.544 445.201 251.371 443.639 248.011L450.22 245.876L448.738 233.279L448.036 227.662L453.066 222.633L453.08 222.507L455.974 197.179L460.183 180.357C461.769 173.997 461.634 167.33 459.792 161.04C457.949 154.75 454.467 149.064 449.7 144.565L439.972 135.392L428.149 117.898H409.083L402.546 130.246C396.208 131.711 390.585 135.353 386.656 140.537C382.727 145.722 380.741 152.121 381.045 158.619L382.526 191.004L376.726 231.326L376.723 238.624L370.195 245.878L371.621 253.005L366.653 255.133L364.459 265.369C363.552 266.567 357.56 274.556 357.56 276.74C357.56 277.068 357.802 277.385 358.321 277.737C362.405 280.502 384.974 286.139 394.962 282.142C405.602 277.887 447.898 284.269 448.324 284.334L448.544 284.368Z"
            fill="#0578F3"
          />
          <path
            id="Vector_32"
            d="M416.153 112.251C430.099 112.251 441.404 100.946 441.404 87.0006C441.404 73.0552 430.099 61.7502 416.153 61.7502C402.208 61.7502 390.903 73.0552 390.903 87.0006C390.903 100.946 402.208 112.251 416.153 112.251Z"
            fill="#FFB8B8"
          />
          <path
            id="Vector_33"
            d="M413.734 112.66C417.645 112.62 421.545 112.246 425.391 111.542C429.2 110.665 437.602 104.167 439.892 100.329C441.594 97.4772 442.615 93.066 443.172 89.8678C443.925 85.6353 443.78 81.292 442.747 77.119C441.714 72.9461 439.816 69.0367 437.176 65.6438C436.158 64.2225 434.775 63.1025 433.174 62.4026C433.032 62.3513 432.886 62.3065 432.739 62.2687C430.417 61.7214 428.312 60.4926 426.694 58.7401C426.379 58.3853 426.04 58.0536 425.678 57.7476C423.862 56.2938 421.728 55.2904 419.451 54.8194C415.771 53.9357 410.507 55.0431 403.806 58.1136C400.439 59.6563 396.703 59.226 393.822 58.6786C393.661 58.6518 393.495 58.6676 393.342 58.7247C393.188 58.7817 393.053 58.8779 392.948 59.0037C391.759 60.1792 390.169 60.861 388.498 60.9121C387.475 60.9835 386.438 62.4287 385.187 64.3106C384.904 64.7378 384.573 65.2364 384.332 65.5406L384.284 64.9693L383.722 65.6226C382.837 66.6494 382.227 67.8833 381.948 69.2094C381.669 70.5355 381.73 71.9106 382.126 73.2067C382.521 74.5029 383.238 75.6779 384.21 76.6223C385.182 77.5667 386.377 78.2498 387.684 78.6081C388.721 78.8555 389.78 78.9964 390.846 79.0286C391.491 79.0699 392.16 79.1127 392.801 79.207C394.862 79.5739 396.793 80.469 398.405 81.8049C400.017 83.1408 401.255 84.8719 401.998 86.829C402.174 87.2813 402.451 87.6873 402.808 88.0155C403.165 88.3437 403.593 88.5854 404.059 88.722C404.524 88.8586 405.015 88.8864 405.493 88.8033C405.971 88.7201 406.423 88.5282 406.815 88.2424C407.467 87.707 408.239 87.3373 409.065 87.1648C409.891 86.9923 410.747 87.0221 411.558 87.2516C412.264 87.6207 412.822 88.2213 413.138 88.9527C413.52 89.7667 414.135 90.4486 414.906 90.9113C417.535 92.1819 417.867 98.1029 417.063 103.067C416.288 107.851 414.601 111.342 412.962 111.554C411.699 111.718 411.557 111.812 411.471 112.038L411.394 112.24L411.541 112.424C412.247 112.659 412.995 112.74 413.734 112.66V112.66Z"
            fill="#2F2E41"
          />
          <path
            id="Vector_34"
            d="M392.785 193.352L380.648 177.887C368.285 181.291 346.348 200.844 346.348 200.844L301.298 220.394C299.794 220.142 298.251 220.29 296.822 220.823C295.394 221.357 294.131 222.257 293.162 223.434C292.192 224.61 291.549 226.022 291.299 227.526C291.048 229.03 291.197 230.573 291.733 232.001C292.268 233.428 293.17 234.69 294.348 235.658C295.526 236.626 296.938 237.267 298.442 237.516C299.946 237.766 301.489 237.614 302.916 237.077C304.343 236.54 305.604 235.636 306.571 234.458L365.586 217.993L392.785 193.352Z"
            fill="#FFB8B8"
          />
          <path
            id="Vector_35"
            d="M389.876 196.887L409.027 175.539L410.09 160.412C410.288 157.441 409.651 154.475 408.252 151.847C406.852 149.22 404.746 147.036 402.17 145.543V145.543C398.665 143.543 394.531 142.948 390.605 143.879C386.678 144.81 383.251 147.197 381.017 150.558C374.25 160.756 366.97 174.545 370.716 182.319L370.754 182.398L389.876 196.887Z"
            fill="#0578F3"
          />
        </g>
        <g id="left_dude">
          <g id="left_arm">
            <path
              id="l_forearm"
              d="M231.844 218.436L208.562 181.874L235.522 167.436L242.598 195.331L292.454 222.272C294.422 221.564 296.554 221.443 298.59 221.926C300.625 222.408 302.476 223.472 303.918 224.988C305.359 226.505 306.328 228.408 306.706 230.465C307.085 232.522 306.856 234.645 306.049 236.575C305.242 238.505 303.89 240.158 302.16 241.333C300.429 242.509 298.394 243.155 296.302 243.193C294.211 243.232 292.153 242.661 290.38 241.55C288.608 240.439 287.196 238.837 286.319 236.938L231.844 218.436Z"
              fill="#A0616A"
            />
            <path
              id="Vector_36"
              d="M191.553 138.021C184.238 148.761 210.234 187.801 210.234 187.801C211.5 185.072 223.606 215.726 225.634 213.916C231.397 208.769 240.418 194.433 245.433 193.794C248.3 193.429 238.782 173.091 238.782 173.091C238.782 173.091 234.432 161.081 228.529 145.741C226.94 141.372 224.272 137.477 220.774 134.418C217.275 131.358 213.059 129.233 208.518 128.241C208.518 128.241 198.868 127.281 191.553 138.021Z"
              fill="#3F3D56"
            />
          </g>
          <g id="right_foot">
            <path
              id="Vector_37"
              d="M191.91 487.945L202.967 487.944L208.227 445.296L191.908 445.297L191.91 487.945Z"
              fill="#A0616A"
            />
            <path
              id="r_shoe"
              d="M189.089 484.335L192.201 484.334L204.352 479.393L210.864 484.334H210.865C214.545 484.334 218.075 485.796 220.677 488.398C223.28 491.001 224.742 494.53 224.742 498.21V498.661L189.09 498.663L189.089 484.335Z"
              fill="#2F2E41"
            />
          </g>
          <g id="left_foot">
            <path
              id="Vector_38"
              d="M243.278 487.945L254.335 487.944L259.595 445.296L243.276 445.297L243.278 487.945Z"
              fill="#A0616A"
            />
            <path
              id="l_shoe"
              d="M240.458 484.335L243.57 484.334L255.72 479.393L262.233 484.334H262.234C265.914 484.334 269.443 485.796 272.046 488.398C274.648 491.001 276.11 494.53 276.11 498.21V498.661L240.458 498.663L240.458 484.335Z"
              fill="#2F2E41"
            />
          </g>
          <path
            id="legs"
            d="M248.064 254.785L176.145 256.583C162.486 264.002 162.279 280.059 166.754 299.123C166.754 299.123 165.243 310.454 168.265 313.476C171.287 316.497 172.798 316.498 171.287 321.785C169.776 327.073 177.758 335.71 176.789 336.68C175.819 337.649 173.553 342.937 173.553 342.937L181.107 385.996C181.107 385.996 186.395 460.782 187.906 462.293C189.417 463.804 190.928 462.293 189.417 466.07C187.906 469.847 186.395 468.336 187.906 469.847C189.244 471.29 190.505 472.803 191.683 474.379H209.947C209.947 474.379 211.324 466.825 211.324 466.07C211.324 465.314 212.835 460.782 212.835 460.027C212.835 459.271 211.499 457.936 211.499 457.936C211.038 456.4 210.726 454.823 210.568 453.228C210.568 451.717 206.036 393.55 206.036 393.55L215.101 318.008L237.008 392.039C237.008 392.039 237.008 457.005 238.519 458.516C240.03 460.027 240.03 459.271 239.274 462.293C238.519 465.314 235.497 464.559 237.763 466.825C240.03 469.092 240.785 465.314 240.03 469.092L239.274 472.869L261.937 473.193C261.937 473.193 264.958 466.825 263.448 464.559C261.937 462.293 262.027 462.911 263.871 459.203C265.714 455.494 266.469 454.739 265.714 453.983C264.958 453.228 264.958 449.21 264.958 449.21L261.181 376.931C261.181 376.931 260.426 300.634 260.426 298.368C260.369 297.201 260.584 296.038 261.053 294.969V291.893L258.16 280.993L248.064 254.785Z"
            fill="#2F2E41"
          />
          <path
            id="body"
            d="M216.034 120.01C220.848 122.872 223.728 128.13 225.381 133.481C228.442 143.388 230.284 153.63 230.867 163.983L232.613 194.976L254.238 260.968C235.497 276.826 165.05 264.572 165.05 264.572C165.05 264.572 162.888 263.851 165.05 261.689C167.213 259.526 169.318 261.442 167.155 259.28C164.993 257.117 166.484 259.526 167.204 257.364C167.925 255.201 167.204 256.643 166.484 255.922C165.763 255.201 172.064 248.714 172.064 248.714L166.297 210.834L159.089 134.426C167.739 123.614 185.135 117.24 185.135 117.24L189.63 109.149L212.105 110.947L216.034 120.01Z"
            fill="#3F3D56"
          />
          <g id="head">
            <path
              id="Vector_39"
              d="M204.861 105.241C217.203 105.241 227.207 95.2363 227.207 82.8951C227.207 70.554 217.203 60.5495 204.861 60.5495C192.52 60.5495 182.516 70.554 182.516 82.8951C182.516 95.2363 192.52 105.241 204.861 105.241Z"
              fill="#A0616A"
            />
            <path
              id="Vector_40"
              d="M223.282 71.0233C225.019 72.3186 226.305 74.1261 226.961 76.1911C227.213 72.8164 227.229 69.4282 227.009 66.0512C226.745 63.6782 225.075 63.1444 223.14 62.5259C221.393 61.9672 219.417 61.3359 218.886 59.0323C211.862 52.199 199.634 52.5436 191.266 54.9271C186.661 56.2388 184.011 57.9239 183.774 58.9111L183.725 59.1144L183.538 59.2079C179.989 60.9826 179.298 66.5867 179.343 70.9754C179.43 79.2441 182.285 88.6352 183.893 89.3981C183.978 89.4385 184 89.4227 184.037 89.3919C186.459 87.4566 189.413 89.539 190.712 90.6711C191.477 85.532 193.943 80.7977 197.715 77.2245C201.488 73.6512 206.348 71.4451 211.521 70.9584C213.211 70.7951 214.887 70.5141 216.537 70.1174C217.374 69.9008 218.234 69.7879 219.099 69.7811C220.587 69.7585 222.047 70.192 223.282 71.0233V71.0233Z"
              fill="#2F2E41"
            />
          </g>
          <g id="right_arm">
            <g id="document">
              <path
                id="paper"
                d="M204.861 265.41L171.044 248.091C167.728 246.393 166.63 241.889 168.596 238.05L195.558 185.406C197.523 181.567 201.82 179.826 205.136 181.525L245.98 202.443C249.296 204.141 250.394 208.645 248.429 212.483L233.781 241.083C225.025 258.18 219.631 272.975 204.861 265.41Z"
                fill="white"
              />
              <g id="lines">
                <path
                  id="Vector_41"
                  d="M221.581 236.661L191.628 221.321C191.262 221.06 191.002 220.676 190.896 220.239C190.789 219.802 190.843 219.341 191.048 218.941C191.253 218.541 191.595 218.228 192.012 218.059C192.429 217.89 192.892 217.877 193.318 218.021L223.271 233.362C223.637 233.623 223.897 234.007 224.004 234.443C224.11 234.88 224.056 235.341 223.851 235.741C223.646 236.142 223.304 236.455 222.887 236.624C222.471 236.792 222.007 236.806 221.581 236.661V236.661Z"
                  fill="#0578F3"
                />
                <path
                  id="Vector_42"
                  d="M195.125 231.34L188.29 227.84C187.924 227.579 187.664 227.195 187.557 226.758C187.45 226.321 187.505 225.86 187.71 225.46C187.915 225.06 188.257 224.747 188.674 224.578C189.09 224.409 189.554 224.395 189.98 224.54L196.815 228.041C197.182 228.302 197.442 228.686 197.548 229.123C197.655 229.56 197.601 230.02 197.396 230.421C197.191 230.821 196.848 231.134 196.432 231.303C196.015 231.472 195.551 231.485 195.125 231.34V231.34Z"
                  fill="#0578F3"
                />
                <path
                  id="Vector_43"
                  d="M203.893 244.06L184.951 234.359C184.585 234.098 184.325 233.714 184.218 233.277C184.112 232.84 184.166 232.379 184.371 231.979C184.576 231.579 184.918 231.265 185.335 231.097C185.752 230.928 186.215 230.914 186.641 231.059L205.583 240.76C205.949 241.021 206.21 241.405 206.316 241.842C206.423 242.279 206.368 242.74 206.163 243.14C205.958 243.54 205.616 243.853 205.2 244.022C204.783 244.191 204.319 244.204 203.893 244.06V244.06Z"
                  fill="#0578F3"
                />
                <path
                  id="Vector_44"
                  d="M233.434 213.517L203.482 198.177C203.115 197.916 202.855 197.532 202.749 197.095C202.642 196.658 202.696 196.198 202.901 195.797C203.106 195.397 203.448 195.084 203.865 194.915C204.282 194.746 204.746 194.733 205.171 194.878L235.124 210.218C235.49 210.479 235.75 210.863 235.857 211.3C235.963 211.737 235.909 212.197 235.704 212.597C235.499 212.998 235.157 213.311 234.74 213.48C234.324 213.649 233.86 213.662 233.434 213.517V213.517Z"
                  fill="#0578F3"
                />
                <path
                  id="Vector_45"
                  d="M206.978 208.197L200.143 204.696C199.777 204.435 199.517 204.051 199.41 203.614C199.303 203.177 199.358 202.716 199.563 202.316C199.768 201.916 200.11 201.603 200.527 201.434C200.943 201.265 201.407 201.252 201.833 201.396L208.668 204.897C209.035 205.158 209.295 205.542 209.401 205.979C209.508 206.416 209.454 206.877 209.249 207.277C209.044 207.677 208.701 207.99 208.285 208.159C207.868 208.328 207.404 208.341 206.978 208.197V208.197Z"
                  fill="#0578F3"
                />
                <path
                  id="Vector_46"
                  d="M215.746 220.916L196.804 211.215C196.438 210.954 196.178 210.57 196.071 210.133C195.965 209.696 196.019 209.235 196.224 208.835C196.429 208.435 196.771 208.122 197.188 207.953C197.605 207.784 198.068 207.77 198.494 207.915L217.436 217.616C217.802 217.877 218.063 218.261 218.169 218.698C218.276 219.135 218.222 219.596 218.017 219.996C217.812 220.396 217.469 220.709 217.053 220.878C216.636 221.047 216.172 221.061 215.746 220.916L215.746 220.916Z"
                  fill="#0578F3"
                />
              </g>
            </g>
            <path
              id="r_forearm"
              d="M172.12 221.961L160.876 180.1L190.924 174.411L189.308 203.145L228.79 243.798C230.88 243.712 232.95 244.237 234.747 245.308C236.544 246.378 237.991 247.948 238.911 249.827C239.831 251.706 240.185 253.812 239.929 255.888C239.673 257.964 238.818 259.921 237.469 261.52C236.12 263.119 234.335 264.291 232.332 264.893C230.329 265.495 228.193 265.501 226.186 264.91C224.18 264.319 222.388 263.158 221.03 261.566C219.672 259.975 218.807 258.023 218.539 255.948L172.12 221.961Z"
              fill="#A0616A"
            />
            <path
              id="Vector_47"
              d="M157.801 133.164C147.601 141.216 160.692 186.256 160.692 186.256C162.719 184.031 165.075 216.906 167.552 215.787C174.593 212.605 187.498 201.635 192.474 202.529C195.319 203.04 192.338 180.784 192.338 180.784C192.338 180.784 191.79 168.023 190.759 151.618C190.554 146.974 189.177 142.458 186.757 138.49C184.337 134.522 180.952 131.231 176.918 128.923C176.918 128.923 168 125.112 157.801 133.164Z"
              fill="#3F3D56"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1_2">
          <rect width="616.477" height="500" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
