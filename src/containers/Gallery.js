import React, { useState, useEffect, useContext, useRef } from "react";
import BackButton from "../components/UI/BackButton";
import GalleryIntro from "../components/layout/GalleryIntro";
import GallerySection from "../components/UI/GallerySection";
import SelectedImage from "../components/UI/SelectedImage";
import WorksContext from "../store/works-context";
import Page from "./Page";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../components/UI/Spinner";
import Error from "../components/UI/Error";

const Gallery = () => {
  const { works, loading, error } = useContext(WorksContext);
  const [work, setWork] = useState({});
  const [selectedImage, setSelectedImage] = useState();
  const container = useRef();
  const gallerySection = useRef();
  const { id: workId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    const matchingWork = works.find(item => item.id === workId);
    if (matchingWork) {
      setWork(matchingWork);
      setSelectedImage(matchingWork.gallery[0].items[0]);
      document.title = matchingWork.title + " – Yinon Hever";
      const { top } = container.current.getBoundingClientRect();
      window.scrollTo(0, top);
    } else {
      navigate("/works");
    }
  }, [workId, works, loading]);

  const itemClickHandler = image => {
    setSelectedImage(null);
    setTimeout(() => setSelectedImage(image), 10);
    const { top } = gallerySection.current.getBoundingClientRect();
    setTimeout(() => window.scrollTo(0, window.scrollY + top), 10);
  };

  return (
    <Page title="Works">
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error />
      ) : (
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
      )}
    </Page>
  );
};

export default Gallery;
