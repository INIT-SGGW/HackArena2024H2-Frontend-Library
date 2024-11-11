import "./PhotoGallery.css";
import { useEffect, useRef, useState, TouchEvent } from "react";

//ASSETS
import CloseIcon from "../../Assets/close-cross.svg";
import ChevronIcon from "../../Assets/chevron-down.svg";

const PhotoGallery = ({ photos }: { photos: string[] }) => {
    const [isZoomed, setIsZoomed] = useState<boolean>(false);
    const [currentPhoto, setCurrentPhoto] = useState<number>(0);
    const CarouselRef = useRef<HTMLDivElement>(null);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    useEffect(() => {
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                setIsZoomed(false);
            } else if (event.key === "ArrowRight") {
                handleNextPhoto();
            } else if (event.key === "ArrowLeft") {
                handlePreviousPhoto();
            }
        });

        return () => {
            document.removeEventListener("keydown", () => { });
        };
    }, []);

    useEffect(() => {
        if (isZoomed && CarouselRef.current !== null) {
            CarouselRef.current.style.transform = `translateX(-${currentPhoto * 100}vw)`;
        }
    }, [currentPhoto, isZoomed]);

    const handleNextPhoto = (): void => {
        setCurrentPhoto((prev) => Math.min(prev + 1, photos.length - 1));
    };

    const handlePreviousPhoto = (): void => {
        setCurrentPhoto((prev) => Math.max(prev - 1, 0));
    };

    const handleZoomIn = (photoIndex: number): void => {
        setIsZoomed(true);
        setCurrentPhoto(photoIndex);
    };

    const getPhotoSrcSet = (photo: string): string => {
        const sizes = ["1920", "1440", "1024", "768", "480", "320", "250", "200"];

        return sizes.map((size) => `${photo}/${size}.jpg ${size}w`).join(", ");
    };

    // SWIPE GESTURE DETECTION

    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50;

    const onTouchStart = (e: TouchEvent) => {
        setTouchEnd(0); // otherwise the swipe is fired even with usual touch events
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) {
            handleNextPhoto();
        } else if (isRightSwipe) {
            handlePreviousPhoto();
        }
    };

    return (
        <div className={`photo-gallery`}>
            {photos.map((photo: string, index: number) => (
                <img
                    key={index}
                    src={`${photo + "/480.jpg"}`}
                    sizes={`(max-width: 395px) 100vw, (max-width: 572px) 50vw, (max-width: 768px) 33vw, 350px`}
                    srcSet={getPhotoSrcSet(photo)}
                    alt={`${index}`}
                    onClick={() => handleZoomIn(index)}
                />
            ))}

            <div
                className={`photo-gallery__zoom${isZoomed ? " photo-gallery__zoom--visible" : ""
                    }`}
            >
                <div className="photo-gallery__controls">
                    <img
                        className="phtoto-gallery-close"
                        src={CloseIcon}
                        alt="close"
                        onClick={() => setIsZoomed(false)}
                    />
                    <img
                        src={ChevronIcon}
                        className={`photo-gallery-next${currentPhoto > 0 ? "" : " hidden"}`}
                        alt="left"
                        onClick={() => handlePreviousPhoto()}
                    />
                    <img
                        src={ChevronIcon}
                        className={`photo-gallery-previous${currentPhoto < photos.length - 1 ? "" : " hidden"}`}
                        alt="right"
                        onClick={() => handleNextPhoto()}
                    />
                </div>
                <div className="photo-gallery__carousel" ref={CarouselRef}>
                    {photos.map((photo: string, index: number) => (
                        <div key={index} className="photo-gallery__photo-wrapper">
                            <img
                                src={`${photo + "/1024.jpg"}`}
                                srcSet={getPhotoSrcSet(photo)}
                                sizes="(max-width: 1000px) 100vw, 80vw"
                                alt={`${index}`}
                                onTouchStart={onTouchStart}
                                onTouchMove={onTouchMove}
                                onTouchEnd={onTouchEnd}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;