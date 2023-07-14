import React, { Fragment, useEffect } from "react";
import PageHeading from "../components/layout/PageHeading";

const Page = props => {
  const { title, children } = props;

  useEffect(() => {
    document.title = title
      ? `${title} – Yinon Hever`
      : "Yinon Hever – Portfolio Website";
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <Fragment>
      {title && <PageHeading title={title} />}
      <main className="page-container">{children}</main>
    </Fragment>
  );
};

export default Page;
