import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import BackButton from "../../components/UI/BackButton";
import GalleryIntro from "../../components/layout/GalleryIntro";
import GallerySection from "../../components/UI/GallerySection";
import SelectedImage from "../../components/UI/SelectedImage";
import Page from "../../components/layout/Page";
import getWorks from "@/util/get-works";

export default function WorkPage({ work }) {
  const [selectedImage, setSelectedImage] = useState(work.gallery[0].items[0]);
  const container = useRef();
  const gallerySection = useRef();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      setTimeout(() => {
        const { top } = container.current.getBoundingClientRect();
        window.scrollTo(0, top);
      }, 10);
    }
    firstRender.current = false;
  }, []);

  const itemClickHandler = image => {
    setSelectedImage(null);
    setTimeout(() => setSelectedImage(image), 10);
    const { top } = gallerySection.current.getBoundingClientRect();
    setTimeout(() => window.scrollTo(0, window.scrollY + top), 10);
  };

  return (
    <>
      <Head>
        <title>{`${work.title} – Yinon Hever`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Page title="Works">
        <div ref={container}>
          <BackButton />
          <main className="gallery">
            <GalleryIntro work={work} />
            <section className="gallery__container" ref={gallerySection}>
              <div className="gallery__items">
                {work.gallery &&
                  work.gallery.map(section => (
                    <GallerySection
                      key={section.title}
                      title={section.title}
                      items={section.items}
                      itemClicked={itemClickHandler}
                    />
                  ))}
              </div>
              <div className="gallery__selected">
                {selectedImage && <SelectedImage image={selectedImage} />}
              </div>
            </section>
          </main>
        </div>
      </Page>
    </>
  );
}

export const getStaticPaths = async () => {
  try {
    const works = await getWorks();
    const paths = works.map(work => ({ params: { id: work.id } }));
    return { paths, fallback: "blocking" };
  } catch (error) {
    console.log(error.message);
    return { paths: [], fallback: "blocking" };
  }
};

export const getStaticProps = async ({ params }) => {
  const works = await getWorks();
  const matchingWork = works.find(work => work.id === params.id);
  if (!matchingWork) return { notFound: true };
  return { props: { work: matchingWork } };
};
