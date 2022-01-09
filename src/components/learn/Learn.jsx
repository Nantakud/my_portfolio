import "./learn.scss";
import { useInView } from "react-intersection-observer";

export default function Learn() {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  return (
    <svg
      width="649"
      height="500"
      viewBox="0 0 649 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={inView ? "animate_learn" : null}
      ref={ref}
    >
      <g id="learning" clipPath="url(#clip0_1_57)">
        <rect width="648.609" height="500" fill="white" />
        <g id="document">
          <path
            id="background"
            d="M396.338 165.025H328.359V244.224H396.338V165.025Z"
            fill="#F2F2F2"
          />
          <path
            id="curve"
            d="M373.226 362.592L372.281 361.67C376.626 356.745 379.918 350.984 381.958 344.741C385.17 335.077 386.738 319.814 375.973 301.984C364.959 283.743 364.464 268.926 365.987 259.709C367.645 249.679 371.875 244.057 372.054 243.823L373.103 244.624C373.061 244.68 368.868 250.271 367.277 260.002C365.808 268.985 366.32 283.443 377.103 301.302C388.143 319.587 386.508 335.274 383.192 345.213C379.599 355.983 373.485 362.327 373.226 362.592Z"
            fill="#3F3D56"
          />
          <path
            id="Vector"
            d="M422.738 244.884H327.699V149.845H422.738V244.884ZM329.019 243.564H421.418V151.165H329.019V243.564Z"
            fill="#3F3D56"
          />
          <path
            id="Vector_2"
            d="M405.578 177.565H347.499V178.885H405.578V177.565Z"
            fill="#3F3D56"
          />
          <path
            id="Vector_3"
            d="M405.578 192.085H347.499V193.404H405.578V192.085Z"
            fill="#3F3D56"
          />
          <path
            id="Vector_4"
            d="M405.578 206.604H347.499V207.924H405.578V206.604Z"
            fill="#3F3D56"
          />
        </g>
        <path
          id="background_2"
          d="M6.94233 203.052C24.7973 87.1344 86.4918 3.45832 158.908 0.102145C197.192 -1.67216 237.478 19.291 266.809 92.6489C319.241 223.784 263.587 314.402 224.786 357.462C206.024 378.284 189.171 403.389 174.603 431.93C148.394 483.278 97.9751 547.084 37.9279 447.109C-5.59442 374.647 -4.95084 280.264 6.94233 203.052Z"
          fill="#F2F2F2"
        />
        <g id="dude">
          <g id="legs">
            <path
              id="ankle"
              d="M95.7023 437.467L93.3152 460.547L106.845 458.956L108.436 439.855L95.7023 437.467Z"
              fill="#FFB9B9"
            />
            <path
              id="legs_2"
              d="M59.8883 262.375C59.8883 262.375 -9.35238 329.229 34.4205 349.921H47.9503C47.9503 349.921 77.3975 301.373 91.7232 302.169L95.7025 348.33L93.3149 441.446L110.824 442.242C110.824 442.242 121.17 395.286 120.375 369.022L138.68 271.926L59.8883 262.375Z"
              fill="#2F2E41"
            />
            <path
              id="right_leg"
              d="M38.3998 346.738L47.9503 349.921C47.9503 349.921 85.3562 341.167 87.7438 341.963L95.1493 341.911L94.9067 322.862H63.0718L38.3998 346.738Z"
              fill="#2F2E41"
            />
            <path
              id="l_shoe"
              d="M108.436 455.772C108.436 455.772 94.1108 449.405 91.7232 455.772C89.3356 462.139 90.1315 480.444 90.1315 480.444C90.1315 480.444 93.315 486.015 91.7232 492.382C90.1315 498.749 98.0902 501.933 108.436 498.749C118.783 495.566 118.783 487.607 118.783 487.607L108.436 455.772Z"
              fill="#2F2E41"
            />
            <path
              id="r_shoe"
              d="M120.375 321.27C120.375 321.27 131.517 314.903 130.721 324.453C129.925 334.004 125.946 342.758 125.946 342.758C125.946 342.758 136.292 369.818 125.946 372.206C115.599 374.593 107.641 369.022 107.641 365.043C107.641 361.063 120.375 321.27 120.375 321.27Z"
              fill="#2F2E41"
            />
          </g>
          <g id="head">
            <path
              id="neck"
              d="M85.356 103.201L86.9482 133.444L100.478 145.382L115.599 123.894V102.406L85.356 103.201Z"
              fill="#FFB9B9"
            />
            <path
              id="face"
              d="M103.768 118.292C116.319 118.292 126.494 108.117 126.494 95.5656C126.494 83.0144 116.319 72.8397 103.768 72.8397C91.2169 72.8397 81.0422 83.0144 81.0422 95.5656C81.0422 108.117 91.2169 118.292 103.768 118.292Z"
              fill="#FFB9B9"
            />
            <path
              id="hair"
              d="M83.6757 69.9276L79.2354 68.1499C79.2354 68.1499 88.5196 57.9285 101.437 58.8174L97.8038 54.8177C97.8038 54.8177 106.684 51.2625 114.758 60.595C119.002 65.5009 123.912 71.2675 126.973 77.7636H131.728L129.744 82.1336L136.69 86.5036L129.56 85.7186C130.235 89.4914 130.004 93.3706 128.886 97.0364L129.077 100.49C129.077 100.49 120.813 87.7038 120.813 85.9262V90.3703C120.813 90.3703 116.372 86.3706 116.372 83.7042L113.95 86.8151L112.739 81.9265L97.8039 86.8151L100.226 82.8154L90.9416 84.1486L94.5747 79.2601C94.5747 79.2601 84.0795 85.0374 83.6758 89.9259C83.2722 94.8144 78.0246 101.036 78.0246 101.036L75.6027 96.592C75.6027 96.592 71.9695 76.5937 83.6757 69.9276Z"
              fill="#2F2E41"
            />
          </g>
          <g id="body">
            <path
              id="Vector_5"
              d="M95.7026 133.444L86.5917 126.674L80.581 135.832L53.5214 151.749L69.4388 193.135L70.2347 233.724C70.2347 233.724 40.7875 263.967 58.2966 267.947C75.8058 271.926 137.884 280.68 141.067 273.518C144.251 266.355 137.088 192.339 137.088 192.339L139.475 129.465L115.599 120.833L95.7026 133.444Z"
              fill="#D0CDE1"
            />
            <path
              id="Vector_6"
              d="M47.1544 183.851C47.1544 183.851 40.7874 228.949 52.7255 228.949C59.8155 228.973 66.8429 227.622 73.4182 224.97L63.8677 200.298L67.8471 183.584L47.1544 183.851Z"
              fill="#FFB9B9"
            />
            <path
              id="Vector_7"
              d="M65.4595 223.378L74.214 224.97C74.214 224.97 99.6819 209.052 101.274 208.256C102.865 207.46 75.8058 193.931 75.8058 193.931L57.5007 201.093L65.4595 223.378Z"
              fill="#FFB9B9"
            />
            <path
              id="Vector_8"
              opacity="0.1"
              d="M75.8058 193.931L64.3129 198.428L67.8471 183.584L47.1544 183.851C47.1544 183.851 40.7874 228.949 52.7255 228.949C59.8155 228.973 66.8429 227.622 73.4182 224.97L73.3579 224.814L74.214 224.97C74.214 224.97 99.6819 209.052 101.274 208.256C102.865 207.46 75.8058 193.931 75.8058 193.931Z"
              fill="black"
            />
            <path
              id="Vector_9"
              d="M123.558 170.054C123.558 170.054 117.191 177.217 117.191 187.564L75.0099 185.972C75.0099 185.972 63.8677 184.38 63.8677 192.339V200.298C63.8677 200.298 69.4388 197.91 72.6223 200.298C75.8058 202.685 110.028 223.378 126.741 215.419C143.455 207.46 147.434 176.421 147.434 176.421C147.434 176.421 132.313 163.687 123.558 170.054Z"
              fill="#FFB9B9"
            />
            <path
              id="Vector_10"
              d="M133.108 130.261L139.475 129.465C139.475 129.465 152.209 131.057 150.618 155.729C149.026 180.401 148.23 181.993 148.23 181.993C148.23 181.993 131.517 166.871 119.579 174.034L133.108 130.261Z"
              fill="#D0CDE1"
            />
            <path
              id="Vector_11"
              d="M56.7049 151.749H53.5214C49.397 156.959 47.1534 163.41 47.1544 170.054C47.0813 177.171 46.146 184.253 44.3689 191.145L69.4388 186.768L56.7049 151.749Z"
              fill="#D0CDE1"
            />
          </g>
        </g>
        <g id="desktop">
          <path
            id="Vector_12"
            d="M648.609 305.803H126.729V495.529H648.609V305.803Z"
            fill="#3F3D56"
          />
          <path
            id="Vector_13"
            opacity="0.1"
            d="M267.51 305.803L126.729 402.446V346.478L185.98 305.803H267.51Z"
            fill="black"
          />
          <path
            id="Vector_14"
            opacity="0.1"
            d="M406.637 305.803L274.959 396.201L270.244 399.441L130.271 495.529H126.729V441.986L216.923 380.075L219.941 378.002L325.113 305.803H406.637Z"
            fill="black"
          />
          <path
            id="circle"
            d="M374.262 385.116C369.6 385.116 365.042 383.734 361.166 381.144C357.29 378.554 354.268 374.872 352.484 370.565C350.7 366.258 350.233 361.518 351.143 356.946C352.053 352.374 354.297 348.174 357.594 344.877C360.891 341.58 365.091 339.335 369.663 338.426C374.236 337.516 378.975 337.983 383.282 339.767C387.589 341.551 391.271 344.573 393.861 348.449C396.451 352.325 397.833 356.883 397.833 361.545C397.826 367.794 395.341 373.786 390.922 378.205C386.503 382.624 380.511 385.109 374.262 385.116V385.116ZM374.262 339.786C369.958 339.786 365.751 341.062 362.173 343.453C358.595 345.844 355.806 349.242 354.16 353.218C352.513 357.194 352.082 361.569 352.921 365.79C353.761 370.01 355.833 373.887 358.876 376.93C361.919 379.973 365.796 382.045 370.017 382.885C374.238 383.724 378.612 383.294 382.588 381.647C386.564 380 389.962 377.211 392.353 373.633C394.744 370.055 396.02 365.848 396.02 361.545C396.013 355.776 393.719 350.245 389.64 346.166C385.561 342.087 380.03 339.793 374.262 339.786V339.786Z"
            fill="#F2F2F2"
          />
          <g id="desktop_balls">
            <path
              id="ball1"
              d="M288.303 414.459C292.345 414.459 295.622 411.182 295.622 407.14C295.622 403.098 292.345 399.821 288.303 399.821C284.261 399.821 280.985 403.098 280.985 407.14C280.985 411.182 284.261 414.459 288.303 414.459Z"
              fill="#0578F3"
            />
            <path
              id="ball2"
              d="M452.13 404.325C456.172 404.325 459.449 401.049 459.449 397.007C459.449 392.965 456.172 389.688 452.13 389.688C448.088 389.688 444.811 392.965 444.811 397.007C444.811 401.049 448.088 404.325 452.13 404.325Z"
              fill="#0578F3"
            />
            <path
              id="ball3"
              d="M621.023 414.459C625.065 414.459 628.342 411.182 628.342 407.14C628.342 403.098 625.065 399.821 621.023 399.821C616.981 399.821 613.705 403.098 613.705 407.14C613.705 411.182 616.981 414.459 621.023 414.459Z"
              fill="#0578F3"
            />
            <path
              id="ball_central"
              d="M374.262 369.704C378.768 369.704 382.421 366.051 382.421 361.545C382.421 357.038 378.768 353.385 374.262 353.385C369.755 353.385 366.102 357.038 366.102 361.545C366.102 366.051 369.755 369.704 374.262 369.704Z"
              fill="#0578F3"
            />
          </g>
          <g id="curved_arrows">
            <g id="curved_arrow1">
              <path
                id="Vector_19"
                d="M142.068 401.265L140.664 399.504C140.803 399.393 154.88 388.291 177.365 381.941C190.39 378.23 203.964 376.825 217.473 377.792C234.227 379.01 250.886 383.955 266.986 392.489L265.932 394.479C230.113 375.493 198.331 378.36 177.977 384.109C155.925 390.337 142.205 401.156 142.068 401.265Z"
                fill="#F2F2F2"
              />
              <path
                id="Vector_20"
                d="M278.17 400.384C271.448 399.223 262.554 398.737 256.147 399.974L264.877 392.66L266.907 381.456C269.005 387.635 273.832 395.122 278.17 400.384Z"
                fill="#F2F2F2"
              />
            </g>
            <g id="curved_arrow2">
              <path
                id="Vector_21"
                d="M372.443 423.279C361.684 423.266 350.978 421.768 340.629 418.827C318.144 412.477 304.067 401.376 303.927 401.265L305.332 399.504C305.468 399.613 319.257 410.471 341.333 416.686C361.668 422.412 393.416 425.256 429.195 406.29L430.25 408.28C414.149 416.814 397.491 421.758 380.737 422.977C377.976 423.178 375.211 423.279 372.443 423.279Z"
                fill="#F2F2F2"
              />
              <path
                id="Vector_22"
                d="M441.433 400.384C437.096 405.649 432.27 413.136 430.172 419.315L428.141 408.109L419.412 400.797C425.819 402.034 434.713 401.548 441.433 400.384Z"
                fill="#F2F2F2"
              />
            </g>
            <g id="curved_arrow3">
              <path
                id="Vector_23"
                d="M474.789 401.265L473.384 399.504C473.523 399.393 487.6 388.291 510.085 381.941C523.111 378.23 536.685 376.826 550.194 377.792C566.948 379.01 583.606 383.955 599.707 392.489L598.652 394.479C562.834 375.494 531.051 378.36 510.697 384.109C488.645 390.337 474.925 401.156 474.789 401.265Z"
                fill="#F2F2F2"
              />
              <path
                id="Vector_24"
                d="M610.89 400.384C604.168 399.223 595.274 398.737 588.867 399.974L597.597 392.66L599.627 381.456C601.725 387.635 606.552 395.122 610.89 400.384Z"
                fill="#F2F2F2"
              />
            </g>
          </g>
          <g id="lines">
            <g id="lines2">
              <path
                id="Vector_25"
                d="M470.145 357.598H433.552V358.724H470.145V357.598Z"
                fill="#0578F3"
              />
              <path
                id="Vector_26"
                d="M470.145 368.858H433.552V369.984H470.145V368.858Z"
                fill="#0578F3"
              />
              <path
                id="Vector_27"
                d="M470.145 380.117H433.552V381.243H470.145V380.117Z"
                fill="#0578F3"
              />
            </g>
            <g id="lines1">
              <path
                id="Vector_28"
                d="M305.756 424.03H269.162V425.155H305.756V424.03Z"
                fill="#0578F3"
              />
              <path
                id="Vector_29"
                d="M305.756 435.289H269.162V436.415H305.756V435.289Z"
                fill="#0578F3"
              />
              <path
                id="Vector_30"
                d="M305.756 446.549H269.162V447.675H305.756V446.549Z"
                fill="#0578F3"
              />
            </g>
            <g id="lines3">
              <path
                id="Vector_31"
                d="M639.602 424.03H603.008V425.155H639.602V424.03Z"
                fill="#0578F3"
              />
              <path
                id="Vector_32"
                d="M639.602 435.289H603.008V436.415H639.602V435.289Z"
                fill="#0578F3"
              />
              <path
                id="Vector_33"
                d="M639.602 446.549H603.008V447.675H639.602V446.549Z"
                fill="#0578F3"
              />
            </g>
          </g>
        </g>
        <g id="geom_shapes">
          <path
            id="shape1"
            d="M214.813 254.857L203.912 243.17L215.599 232.269L226.5 243.956L214.813 254.857ZM205.65 243.23L214.874 253.119L224.763 243.896L215.539 234.006L205.65 243.23Z"
            fill="#3F3D56"
          />
          <path
            id="shape2"
            d="M477.096 117.853L466.195 106.166L477.882 95.2647L488.783 106.952L477.096 117.853ZM467.932 106.226L477.156 116.115L487.045 106.892L477.822 97.0023L467.932 106.226Z"
            fill="#3F3D56"
          />
          <path
            id="shape3"
            d="M610.964 306.751H594.982V290.769H610.964V306.751ZM596.211 305.522H609.735V291.998H596.212L596.211 305.522Z"
            fill="#3F3D56"
          />
        </g>
        <g id="arrows">
          <g id="arrow2">
            <path
              id="Vector_34"
              d="M452.669 252.511H451.435V284.559H452.669V252.511Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_35"
              d="M452.052 245.062C453.352 248.567 455.571 252.916 457.922 255.612L452.052 253.489L446.183 255.612C448.533 252.916 450.752 248.567 452.052 245.062Z"
              fill="#3F3D56"
            />
          </g>
          <g id="arrow1">
            <path
              id="Vector_36"
              d="M304.556 224.74H303.322V256.788H304.556V224.74Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_37"
              d="M303.939 217.291C305.24 220.796 307.459 225.145 309.809 227.841L303.939 225.717L298.07 227.841C300.421 225.145 302.64 220.796 303.939 217.291Z"
              fill="#3F3D56"
            />
          </g>
          <g id="arrow3">
            <path
              id="Vector_38"
              d="M509.445 200.054H508.211V232.102H509.445V200.054Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_39"
              d="M508.828 192.605C510.129 196.111 512.348 200.459 514.698 203.155L508.828 201.032L502.959 203.155C505.31 200.459 507.529 196.111 508.828 192.605Z"
              fill="#3F3D56"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1_57">
          <rect width="648.609" height="500" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
