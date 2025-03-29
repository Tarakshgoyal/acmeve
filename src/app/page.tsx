import About from "@/components/About";
import { BentoGridDemo } from "@/components/Events";
import { GoogleGeminiEffectDemo } from "@/components/Scroll";
import { SparklesPreview } from "@/components/SparklesPreview";
import { SparklesPrevieww } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <SparklesPreview/>
      <About/>
      <GoogleGeminiEffectDemo/>
      <BentoGridDemo/>
      <SparklesPrevieww/>
    </>
  );
}
