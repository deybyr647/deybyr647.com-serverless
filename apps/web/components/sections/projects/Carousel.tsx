import { ReactNode, useEffect } from "react";
import ImageGallery, { ReactImageGalleryProps } from "react-image-gallery";

interface ICarouselProps {
  projects: object[];
}

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const ImageGalleryProps: ReactImageGalleryProps = {
  items: images,
  showPlayButton: false,
  showFullscreenButton: false,
  infinite: true,
  showBullets: false,
  onErrorImageURL:
    "https://d33wubrfki0l68.cloudfront.net/1c9c8c01b0e5efecef2bfa5c1d72e1fbf57aaf38/e8af8/v3/img/blog/the404.png",
};

const Carousel = ({ projects }: ICarouselProps) => {
  useEffect(() => {}, []);

  return (
    <div className="carousel">
      <ImageGallery {...ImageGalleryProps} />
    </div>
  );
};

export default Carousel;
