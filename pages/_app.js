import "@/styles/bttn.min.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import "@/styles/main.scss";
import { config as faConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { AnimatePresence } from "framer-motion";
import ProgressBar from "nextjs-progressbar";
import NProgress from "nprogress";

faConfig.autoAddCss = false;

NProgress.configure({ showSpinner: false });

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <ProgressBar color="#1d89ff" height={4} />
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  );
}
