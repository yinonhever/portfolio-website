import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PageHeading from "./PageHeading";
import { motion } from "framer-motion";

const Page = props => {
  const { title, children } = props;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="page-layout"
    >
      <Header />
      {title && <PageHeading title={title} />}
      <main className="page-container">{children}</main>
      <Footer />
    </motion.div>
  );
};

export default Page;
