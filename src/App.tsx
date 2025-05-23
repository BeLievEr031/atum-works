import ContactForm from "./components/ContactForm"

function App() {
  return (
    <div className='bg-black min-h-screen pb-10'>
      <nav className='pt-16 pb-28 flex justify-center'>
        <img src="https://img1.wsimg.com/isteam/ip/a71af983-e4aa-4f77-9026-67837a6f1cfa/image.PNG/:/rs=h:136,cg:true,m/qt=q:95" alt="logo" className="-mb-5" />
      </nav>

      <main className="flex justify-center pt-2">
        <iframe src="https://www.youtube.com/embed/0n0Di5sLCjo?si=zsscrVEEPuD91ADC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-11/12 md:w-[80vw] h-[80vh]"></iframe>
      </main>

      <section className="pt-24 w-11/12 md:w-[55%] mx-auto">
        <p className="text-center text-neutral-100 font-semibold text-2xl">YCombinator X25</p>
        <div className="pt-24">
          <ContactForm />
          <p className="text-center py-8 text-neutral-400 text-xs">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
        </div>
      </section>
      <div className="w-[55%] mx-auto pt-10 flex flex-col items-center md:flex-row justify-between">
        <p className="text-neutral-400 text-center uppercase text-sm font-semibold">Copyright © 2025 Atum Works - All Rights Reserved.</p>
        <div className="pt-10">
          <svg viewBox="0 0 24 24" fill="currentColor" width="30px" height="30px" data-ux="IconSocial" color="white"><path d="M5.181 4h13.634C19.468 4 20 4.518 20 5.153v13.692c0 .638-.532 1.155-1.184 1.155H5.181C4.53 20 4 19.483 4 18.845V5.153c0-.636.53-1.152 1.181-1.152zm3.754 3.574a1.376 1.376 0 00-2.752 0A1.38 1.38 0 007.56 8.95c.758 0 1.375-.618 1.375-1.376zM8.75 9.998H6.372v7.635H8.75V9.999zm1.485 0h.003v7.633h2.371v-3.777c0-.995.19-1.96 1.425-1.96 1.217 0 1.233 1.14 1.233 2.025v3.714h2.372v-4.188c0-2.056-.444-3.637-2.847-3.637-1.159 0-1.933.633-2.25 1.233h-.031V9.999h-2.273v-.002l-.003.002z"></path></svg>
        </div>

      </div>
    </div>
  )
}

export default App