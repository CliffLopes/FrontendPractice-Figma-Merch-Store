import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div className="footer w-full min-h-[48vh] bg-[#C7B9FF]">
      <div className=" flex justify-center items-center">
        <div>
          <svg
            class="svg-logo current"
            width="250"
            height="273"
            viewBox="0 0 250 273"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 125C0 55.9644 55.9644 0 125 0C194.036 0 250 55.9644 250 125V272.5H0V125Z"
              fill="#FFC700"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M103.811 67.7499H99.5614V48.4966H91.6182V44.8682H111.885V48.4966H103.811V67.7499ZM119.424 67.7499H115.175V44.8682H119.424V54.1189H130.146V44.8682H134.395V67.7499H130.146V57.78H119.424V67.7499ZM140.329 67.7499H157.131V64.1215H144.579V57.7473H153.993V54.1516H144.579V48.4966H157.131V44.8682H140.329V67.7499ZM62.1259 124.596V119.889L39.2442 128.421L39.2442 134.076L62.1259 142.738V138.162L56.4709 136.168V126.525L62.1259 124.596ZM52.8425 134.893L47.3182 132.932C46.5604 132.67 45.921 132.448 45.3734 132.258L45.3519 132.25L45.3511 132.25L45.3495 132.249L45.3435 132.247C44.0664 131.804 43.292 131.535 42.6765 131.33L47.2855 129.696L52.8425 127.8L52.8425 134.893ZM62.1259 167.635V171.884H39.2442L39.2442 164.922L51.2081 160.541C54.2481 159.463 55.2614 159.07 55.8498 158.809C55.1961 158.547 54.2481 158.188 51.2081 157.076L39.2442 152.696L39.2442 145.962H62.1259V150.212H51.6657H43.1014L62.1259 157.174V160.705L43.1014 167.635H51.6657H62.1259ZM62.6163 188.328C62.6163 183.654 60.132 181.627 58.5629 180.745H62.1259V176.822H50.5543V188.688H54.2154V181.072C56.4709 181.3 58.9879 183.36 58.9879 187.478C58.9879 191.532 56.0133 194.703 50.7178 194.703C45.3896 194.703 42.415 191.368 42.415 187.348C42.415 183.654 44.5397 181.791 47.2528 180.843L45.6838 176.724C42.0554 177.934 38.7539 181.268 38.7539 187.315C38.7539 193.951 43.8533 199.148 50.7505 199.148C58.2361 199.148 62.6163 194.408 62.6163 188.328ZM62.1259 203.579L62.1259 207.828H39.2442L39.2442 203.579H62.1259ZM62.1259 224.488V228.737H39.2442L39.2442 211.576H42.8726L42.8726 224.488H49.3776L49.3776 214.224H53.0386L53.0386 224.488H62.1259ZM184.261 130.361C184.261 136.572 187.399 139.481 191.321 139.481C195.277 139.481 197.467 136.441 198.186 132.094L198.709 129.119C199.101 126.995 199.984 125.883 201.553 125.883C203.187 125.883 204.593 127.125 204.593 130.002C204.593 133.205 202.664 134.644 200.801 135.265L202.337 139.22C205.116 138.337 208.123 135.624 208.123 130.133C208.123 124.641 205.05 121.536 201.357 121.536C197.271 121.536 195.375 124.183 194.688 128.237L194.198 131.146C193.708 133.925 192.662 135.069 191.027 135.069C189.164 135.069 187.791 133.63 187.791 130.427C187.791 126.831 190.112 125.033 192.531 124.412L190.994 120.392C187.333 121.34 184.261 124.51 184.261 130.361ZM184.751 148.717V152.966H204.004V161.04H207.633V140.774H204.004V148.717H184.751ZM196.159 185.794C189.197 185.794 184.261 181.12 184.261 173.896C184.261 166.672 189.197 161.998 196.159 161.998C203.089 161.998 208.123 166.705 208.123 173.896C208.123 181.055 203.089 185.794 196.159 185.794ZM196.159 166.443C191.419 166.443 187.889 169.222 187.889 173.896C187.889 178.57 191.419 181.316 196.159 181.316C200.964 181.316 204.495 178.57 204.495 173.896C204.495 169.222 200.964 166.443 196.159 166.443ZM184.751 190.251V194.501H193.773V198.881C193.773 201.823 192.76 203.163 189.981 203.588L184.751 204.372V208.949L190.341 207.903C193.479 207.347 194.884 205.778 195.244 202.869C195.767 205.745 197.663 208.556 201.52 208.556C205.083 208.556 207.633 205.745 207.633 200.907V190.251H184.751ZM197.336 194.501H204.004V200.156C204.004 202.411 202.958 204.111 200.67 204.111C198.382 204.111 197.336 202.411 197.336 200.156V194.501ZM184.751 230.292V213.49H207.633V230.292H204.004V217.74H198.349V227.154H194.754V217.74H188.379V230.292H184.751Z"
              fill="black"
            ></path>
          </svg>
        </div>
        <div className="p-[10vh] font-bold text-[4vh]">
          <h1>
            OBJECTS <br />
            THAT <br /> INSPIRE.
          </h1>
        </div>
        <div className="p-[10vh] underline text-[2vh]">
          <h1>FAQ</h1>
          <h1>Contact Us</h1>
          <h1>Privacy Policy </h1>
          <h1>Terms of Service</h1>
        </div>
        <div className="p-[10vh] font-bold">
          <p>
            This site is powered by Harper + Scott,a <br />
            Certified B-Corporation. For more <br /> information read Harper +
            Scott's CSR <br /> policy.
          </p>
        </div>
      </div>
      <div className=" flex justify-center items-center text-[3vh]">
        <h1 className="px-[5vh] underline hover:underline-offset-4">Figma ↗</h1>
        <h1 className="px-[5vh] underline hover:underline-offset-4">TWITTER</h1>
        <h1 className="px-[5vh] underline hover:underline-offset-4">
          INSTAGRAM
        </h1>
        <h1 className="px-[5vh] underline hover:underline-offset-4">YOUTUBE</h1>
      </div>
      <div className="text border-t-2  border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[2vw]  uppercase   font-semibold pr-10"
        >
          Figma's marvelously considered collection of objects for our time on
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[2vw]   uppercase   font-semibold pr-10"
        >
          Figma's marvelously considered collection of objects for our time on
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[2vw]  uppercase  font-semibold pr-10"
        >
          Figma's marvelously considered collection of objects for our time on
        </motion.h1>
      </div>
    </div>
  );
}

export default Footer;
