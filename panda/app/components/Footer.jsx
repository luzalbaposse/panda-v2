const Footer = () => {
    return (
        <div className="bg-white w-full h-72 flex-col justify-start items-center gap-5 inline-flex">
        <div className="w-32 h-10 justify-center items-center inline-flex">
          <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
            <div className="grow shrink basis-0 self-stretch px-px py-px justify-center items-center inline-flex" />
          </div>
        </div>
        <div className="h-36 flex-col justify-center items-center gap-2.5 flex">
          <div className="justify-center items-center gap-8 inline-flex">
            <div className="text-center text-black text-opacity-90 text-base font-medium font-Inter leading-relaxed">Política de Privacidad</div>
            <div className="text-center text-black text-opacity-90 text-base font-medium font-Inter leading-relaxed">Términos de Servicio</div>
            <div className="text-center text-black text-opacity-90 text-base font-medium font-Inter leading-relaxed">Test de Conciencia</div>
          </div>
          <div className="text-center text-green-800 text-sm font-medium font-Inter leading-loose">hola@panda.com</div>
          <div className="text-center text-neutral-800 text-opacity-60 text-sm font-medium font-Inter leading-loose">Buenos Aires, Argentina<br/>Hecho con 🤍 by Panda Labs</div>
        </div>
      </div>
    );
  };

  export default Footer;