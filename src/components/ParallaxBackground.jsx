import { motion, useScroll, useTransform, useSpring } from "motion/react";

const ASSET_BASE = `${import.meta.env.BASE_URL}assets/`;

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();

  const x = useSpring(scrollYProgress, { damping: 50 });

  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: `url(${ASSET_BASE}sky.jpg)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />

        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: `url(${ASSET_BASE}mountain-3.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            y: mountain3Y,
          }}
        />

        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: `url(${ASSET_BASE}planets.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            x: planetsX,
          }}
        />

        <motion.div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: `url(${ASSET_BASE}mountain-2.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            y: mountain2Y,
          }}
        />

        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${ASSET_BASE}mountain-1.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            y: mountain1Y,
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;