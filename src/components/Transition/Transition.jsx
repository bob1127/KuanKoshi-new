import { motion } from "framer-motion";
import { useEffect } from "react";
import "./Transition.css";

const Transition = (OriginalComponent, transitionText = "loading") => {
  // ✅ 這裡返回一個合法的 React 組件
  const WrappedComponent = () => {
    useEffect(() => {
      document.body.style.overflow = "hidden";

      const timeoutId = setTimeout(() => {
        document.body.style.overflow = "unset";
      }, 1000);

      window.scrollTo({
        top: 0,
        behavior: "instant",
      });

      return () => {
        clearTimeout(timeoutId);
        document.body.style.overflow = "hidden";
      };
    }, []);

    return (
      <>
        <OriginalComponent />

        <motion.div
          className="slide-in"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="loader-bg">
            <img src="/loader/loader-bg.jpg" alt="" />
          </div>
          <p className="transition-text">
            origin <span>studio</span>
          </p>
        </motion.div>

        <motion.div
          className="slide-out"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="loader-bg">
            <img src="/loader/loader-bg.jpg" alt="" />
          </div>
          <p className="transition-text">
            origin <span>studio</span>
          </p>
        </motion.div>
      </>
    );
  };

  return WrappedComponent;
};

export default Transition;
