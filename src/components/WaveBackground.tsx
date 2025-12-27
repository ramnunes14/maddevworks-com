import waveBg from "@/assets/wave-bg.png";

const WaveBackground = () => {
  return (
    <div 
      className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${waveBg})` }}
    />
  );
};

export default WaveBackground;
