import { useGlobalProps } from '../../GlobalContext'

const VideoBg = () => {
  const { isDarkMode } = useGlobalProps();

  return (
    <video
      key={isDarkMode ? "dark" : "light"} // 🔑 Force re-render
      className="absolute left-0 right-0 w-full h-full object-cover z-0"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={isDarkMode ? "/bgs/blackVid.mp4" : "/bgs/wtVid.mp4"}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoBg;
