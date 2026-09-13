'use client';

import { motion } from 'framer-motion';

const RingSegment = ({ startAngle, endAngle, color, index }: { startAngle: number; endAngle: number; color: string; index: number }) => {
  const innerRadius = 160;
  const outerRadius = 220;
  const cx = 500;
  const cy = 400;

  const getCoordinatesForAngle = (angle: number) => {
    const angleInRadians = (angle - 90) * Math.PI / 180.0;
    return {
      x: cx + (outerRadius * Math.cos(angleInRadians)),
      y: cy + (outerRadius * Math.sin(angleInRadians)),
      ix: cx + (innerRadius * Math.cos(angleInRadians)),
      iy: cy + (innerRadius * Math.sin(angleInRadians))
    };
  };

  const start = getCoordinatesForAngle(startAngle + 2);
  const end = getCoordinatesForAngle(endAngle - 2);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  const d = [
    "M", start.x, start.y,
    "A", outerRadius, outerRadius, 0, largeArcFlag, 1, end.x, end.y,
    "L", end.ix, end.iy,
    "A", innerRadius, innerRadius, 0, largeArcFlag, 0, start.ix, start.iy,
    "Z"
  ].join(" ");

  return (
    <motion.path 
      d={d} 
      fill={color}
      initial={{ opacity: 0, scale: 0.9, originX: "50%", originY: "50%" }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 + (index * 0.1), ease: "easeOut" }}
    />
  );
};

const AnimatedLine = ({ d, stroke, index }: { d: string, stroke: string, index: number }) => {
  return (
    <motion.path 
      d={d} 
      stroke={stroke} 
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 + (index * 0.1), ease: "easeInOut" }}
    />
  );
};

export default function ApproachAnimated() {
  const lineData = [
    { d: "M 309.5 290 L 20 290", stroke: "#3D99A6" },
    { d: "M 500 180 L 500 120 L 980 120", stroke: "#2A6F78" },
    { d: "M 690.5 290 L 980 290", stroke: "#13363B" },
    { d: "M 690.5 510 L 980 510", stroke: "#0C2225" },
    { d: "M 500 620 L 500 680 L 20 680", stroke: "#D96E18" },
    { d: "M 309.5 510 L 20 510", stroke: "#F58220" },
  ];

  const ringData = [
    { startAngle: 270, endAngle: 330, color: "#3D99A6" },
    { startAngle: 330, endAngle: 390, color: "#2A6F78" },
    { startAngle: 30, endAngle: 90, color: "#13363B" },
    { startAngle: 90, endAngle: 150, color: "#0C2225" },
    { startAngle: 150, endAngle: 210, color: "#D96E18" },
    { startAngle: 210, endAngle: 270, color: "#F58220" },
  ];

  const iconData = [
    { icon: "handshake", color: "#3D99A6", left: "33.55%", top: "34.17%" },
    { icon: "search", color: "#2A6F78", left: "50%", top: "18.33%" },
    { icon: "design_services", color: "#3D99A6", left: "66.45%", top: "34.17%" },
    { icon: "engineering", color: "#3D99A6", left: "66.45%", top: "65.83%" },
    { icon: "support_agent", color: "#F58220", left: "50%", top: "81.67%" },
    { icon: "bar_chart", color: "#F58220", left: "33.55%", top: "65.83%" },
  ];

  const textBoxes = [
    { title: "1. Understand First", desc: "Understanding your business challenges before recommending solutions.", left: "2%", bottom: "68.33%", top: "31.67%", isLeft: true },
    { title: "2. Thorough Assessment", desc: "Evaluating financial data and systems to build a strong foundation.", left: "74%", bottom: "96.67%", top: "3.33%", isLeft: false },
    { title: "3. Tailored Solution", desc: "Designing scalable architectures tailored to your specific enterprise needs.", left: "74%", bottom: "68.33%", top: "31.67%", isLeft: false },
    { title: "4. Seamless Execution", desc: "Bridging the gap between technology and practical accounting requirements.", left: "74%", bottom: "31.67%", top: "68.33%", isLeft: false },
    { title: "5. Continuous Support", desc: "Providing professional, ongoing support to ensure sustainable business growth.", left: "2%", bottom: "3.33%", top: "96.67%", isLeft: true },
    { title: "6. Insightful Reporting", desc: "Delivering comprehensive reports and insights to empower better decision making.", left: "2%", bottom: "31.67%", top: "68.33%", isLeft: true },
  ];

  return (
    <section className="py-24 w-full overflow-hidden relative z-10">
      <div className="px-margin-desktop max-w-container-max mx-auto flex flex-col items-center">
        
        <motion.div 
          className="text-center mb-8 hidden lg:block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white">Our Approach</h2>
          <p className="text-[#F58220] font-semibold mt-2 tracking-widest uppercase text-sm">Clarity Through Expertise</p>
        </motion.div>
        
        {/* Desktop Diagram */}
        <div className="relative w-full max-w-[1000px] aspect-[5/3] hidden lg:block mx-auto mt-4">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 100 1000 600">
            {lineData.map((line, i) => <AnimatedLine key={i} {...line} index={i} />)}
            {ringData.map((ring, i) => <RingSegment key={i} {...ring} index={i} />)}
          </svg>

          {/* Center Text Circle */}
          <motion.div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-black/40 backdrop-blur-md rounded-full flex flex-col items-center justify-center px-4 py-2 text-center shadow-2xl z-10 border border-white/20"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "backOut" }}
          >
            <span className="text-[#F58220] font-bold text-xs tracking-widest uppercase mb-1 mt-2">Our Approach</span>
            <h2 className="text-xl font-bold text-white mb-2 leading-tight">CLARITY THROUGH EXPERTISE</h2>
            <p className="text-xs text-gray-300 leading-relaxed px-4 pb-2">
              We deliver clarity through expert financial advisory. By tailoring solutions to your specific needs, we build a strong foundation that drives sustainable, long-term growth.
            </p>
          </motion.div>

          {/* Icons */}
          {iconData.map((icon, i) => (
            <motion.div 
              key={i}
              className="absolute w-12 h-12 bg-black/60 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center shadow-lg transform -translate-x-1/2 -translate-y-1/2" 
              style={{ left: icon.left, top: icon.top }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 + (i * 0.1), type: "spring", stiffness: 200 }}
            >
              <span className={`material-symbols-outlined text-xl`} style={{ color: icon.color }}>{icon.icon}</span>
            </motion.div>
          ))}

          {/* Text Boxes */}
          {textBoxes.map((box, i) => (
            <motion.div key={i} 
              initial={{ opacity: 0, x: box.isLeft ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 + (i * 0.1) }}
            >
              <div className="absolute w-[24%] flex flex-col justify-end pb-2" style={{ left: box.left, bottom: box.bottom }}>
                <h4 className="font-bold text-white text-sm leading-tight">{box.title}</h4>
              </div>
              <div className="absolute w-[24%] flex flex-col justify-start pt-2" style={{ left: box.left, top: box.top }}>
                <p className="text-xs text-gray-300 leading-snug">{box.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet Fallback List */}
        <div className="w-full flex flex-col items-center lg:hidden px-4">
          <motion.div 
            className="text-center mb-12 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#F58220] font-bold tracking-widest uppercase text-sm mb-3 block">Our Approach</span>
            <h3 className="text-3xl font-bold text-white mb-6 leading-tight">CLARITY THROUGH EXPERTISE</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              We deliver clarity through expert financial advisory. By tailoring solutions to your specific needs, we build a strong foundation that drives sustainable, long-term growth.
            </p>
          </motion.div>

          <div className="flex flex-col gap-12 w-full max-w-sm mx-auto">
            {textBoxes.map((box, i) => (
              <motion.div 
                key={i}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="w-28 h-28 rounded-full flex items-center justify-center mb-5 shadow-md" style={{ backgroundColor: iconData[i].color }}>
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '68px' }}>{iconData[i].icon}</span>
                </div>
                <h4 className="font-bold text-white text-xl mb-3">{box.title}</h4>
                <p className="text-sm text-gray-300 leading-relaxed">{box.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
