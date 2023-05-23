import Slider from "@/src/components/ui/Slider";

export default function SponsorshipSection() {
  return (
    <div className="mt-16">
      {/* <img className="w-full mt-24" src="/atm-banner.png" /> */}
      <div className="relative py-2">
        <div
          style={{ backgroundImage: "url(/atm-banner.png)" }}
          className="absolute mx-auto  w-full min-h-full bg-no-repeat bg-cover bg-center"
        />
        <div className=" relative flex items-center gap-6 ml-6 pt-6">
          <p className="text-white-main font-bold text-5xl">
            PATROCINADOR OFICIAL DEL ATLÉTICO MORELIA
          </p>
          <img className="h-18 w-16" src="/atm-logo.png" />
        </div>
      </div>

      <div className="w-10/12 mx-auto">
        <Slider />
      </div>
    </div>
  );
}
