import { useEffect, useState } from "react";
import jadooImg from "../assets/jadoo.png";
import "./IntroScreen.css";

export default function IntroScreen({ onDone }) {
  const [step, setStep] = useState(0);
  const steps = [
    "INITIALIZING DEEP SPACE LINK...",
    "SCANNING ALIEN FREQUENCIES...",
    "SIGNAL DETECTED: 432.0 Hz",
    "JADOO IS CONNECTING...",
    "LINK ESTABLISHED ✓",
  ];

  useEffect(() => {
    if (step < steps.length - 1) {
      const t = setTimeout(() => setStep(s => s + 1), 700);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(onDone, 900);
      return () => clearTimeout(t);
    }
  }, [step]);

  return (
    <div className="intro">
      <img src={jadooImg} alt="Jadoo" className="intro__image" />

      <div className="intro__title">HEY JADOO</div>
      <div className="intro__subtitle">INTERSTELLAR COMMUNICATION LINK</div>

      <div className="intro__steps">
        {steps.map((s, i) => (
          <div key={i} className={`intro__step ${
            i < step ? 'intro__step--done' :
            i === step ? 'intro__step--active' :
            'intro__step--pending'
          }`}>
            {i < step ? '✓' : i === step ? '▶' : '○'} {s}
          </div>
        ))}
      </div>

      <div className="intro__bars">
        {[8, 14, 20, 24, 18, 12, 6].map((h, i) => (
          <div key={i} className="intro__bar" style={{
            height: h,
            animation: `signal 1.2s ease-in-out ${i * 0.1}s infinite`
          }} />
        ))}
      </div>
    </div>
  );
}