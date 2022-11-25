import Image from "next/image";

function Hero() {
  return (
    <section >
    <div className=" flex flex-col justify-center items-center gap-5 w-full h-[75vh] bg-zinc-700 text-white ">

      <div className="">
        <Image
          src="/images/site/uyghur.webp"
          alt="Uyghur"
          width={300}
          height={300}
          className=" rounded-full w-[300px] h-[300px]"
        />
      </div>
      <h1 className=" text-3xl font-bold">Hi, I'm Uyghur</h1>
      <p className="text-center w-[400px] font-[500]">
        I blog about web development - especially frontend frameworks like
        React and Nextjs.
      </p>
    </div>

    <div className="w-full h-[25vh] bg-slate-400">

    </div>
    </section>
  );
}

export default Hero;
