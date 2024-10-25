// components/CircularImage.tsx
import { useEffect, useRef } from "react";

interface CircularImageProps {
  images: string[]; // Define images as an array of strings
}

const CircularImage: React.FC<CircularImageProps> = ({ images }) => {
  const containerRef = useRef<HTMLDivElement | null>(null); // Set type for containerRef

  useEffect(() => {
    const imagesElements = containerRef.current?.children as
      | HTMLCollectionOf<HTMLImageElement>
      | undefined;
    const radius = 400; // Radius of the circle
    const center = 400; // Center position (half of container size)

    const setPositions = (angleOffset = 0) => {
      if (imagesElements) {
        Array.from(imagesElements).forEach((image, index) => {
          const angle = (index / images.length) * (2 * Math.PI) + angleOffset; // Update angle
          const x = center + radius * Math.cos(angle) - image.width / 2;
          const y = center + radius * Math.sin(angle) - image.height / 2;
          image.style.transform = `translate(${x}px, ${y}px)`;
        });
      }
    };

    let angleOffset = 0;

    const animate: any = () => {
      angleOffset += 0.01; // Adjust speed of rotation
      setPositions(angleOffset);
      requestAnimationFrame(animate);
    };

    animate(); // Start the animation
    setPositions(); // Set initial positions

    return () => cancelAnimationFrame(animate); // Cleanup on unmount
  }, [images]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        margin: "0 auto",
      }}
      className="content-center justify-center max-md:hidden"
    >
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          style={{
            position: "absolute",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            transition: "transform 0.5s ease",
          }}
        />
      ))}
    </div>
  );
};

export default CircularImage;