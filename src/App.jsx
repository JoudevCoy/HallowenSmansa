import * as React from "react";
import AdsPop from "./components/AdsPop.jsx";
import "./App.css";
import scaryVid from "./assets/video.mp4";

export default function App() {
  
  const videoEl = React.useRef(null);
  const vid = React.useRef(null);
  
  
  const enterFullscreen = () => {
    setTimeout(() => {
      if (videoEl?.current.requestFullscreen) {
        videoEl?.current.requestFullscreen();
      } else if (videoEl.current.mozRequestFullScreen) { // Firefox
        videoEl?.current.mozRequestFullScreen();
      } else if (videoEl.current.webkitRequestFullscreen) { // Chrome, Safari, Opera
        videoEl?.current.webkitRequestFullscreen();
      } else if (videoEl.current.msRequestFullscreen) { // IE/Edge
        videoEl?.current.msRequestFullscreen();
      }
      vid?.current.play();
    }, 2000);
  }
  
  
  React.useEffect(() => {


    const unsub = () => {
      setTimeout(() => {
        document.getElementById("my_modal_1")?.showModal();
      }, 3000);
    }
    
    return () => {
      logVisit();
      unsub();
    }
  }, []);
  
  
  return (
    <>
    
      <div ref={videoEl} className="scary absolute z-[-2] translate-x-[-100%]">
        <video ref={vid} src={scaryVid} loop className="min-h-screen object-cover"></video>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <p className="py-4">aktifkan notifikasi untuk menerima berita terbaru dari SulutGeng</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm mr-5" onClick={() => enterFullscreen()}>Tolak</button>
              <button className="btn bg-red-500 text-white btn-sm" onClick={() => enterFullscreen()}>Terima</button>
            </form>
          </div>
        </div>
      </dialog>
    
      <div className="navigation fixed top-0 left-0 w-full shadow-md z-[100]">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost text-3xl">SulutGeng</a>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="/logo-apps-circle.png.webp" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="breadcrumbs bg-red-500 max-w-full text-sm px-4">
          <ul className="font-bold text-white">
            <li>Berita</li>
            <li>Sekolah</li>
            <li>Perayaan Acara Hallowen</li>
            <li>Smansa Tondano</li>
          </ul>
        </div>
      </div>

      {/*https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTYlU0q135MjwNIYFFVlQAw40lIyA50IipvMracuWxG5SKDX3qPSCgCl4&s=10*/}
      <div className="hero bg-base-100 min-h-[50vh] mt-[200px]">
        <div className="hero-content">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-gray-700">Perayaan Hari Hallowen Disetiap Sekolah Mulai Dari Tgl 4 - 8 November</h1>
            <p className="py-6 text-gray-400">
              SulutGeng 30/11/2024  -  Tondano Sulawesi Utara
            </p>
          </div>
        </div>
      </div>
      
      <div className="article">
      
        <AdsPop id={0}/>
        <p>
        Ehh, anak-anak SMA mana nih yang so siap mo baku serem deng teman-teman di acara Halloween? Ini acara mulai dari tanggal 4 sampe 8 November, banyak skola di torang pe daerah so kase mo ambil bagian mo kase acara Halloween! Dorang bakal siapin lomba-lomba seru, kaya lomba kostum serem-sereman, kelas hias ala-ala rumah hantu, sampe trick-or-treat keliling skola yang pasti bikin ngoni pe bulu-bulu berdiri tapi baku tabik juga.
        </p>
        
        <p>
        Untuk torang pe teman-teman di SMAN 1 Tondano, tenang, torang juga bakalan iko ini acara! Soalnya skola torang masuk dalam list skola yang bakal rayain Halloween. Dorang bilang bakal ada lomba-lomba seru macam lomba kostum, lomba hias kelas, sampe acara musik-musik Halloween. Jadi, siap-siap ngoni semua yang ada ide kostum gokil, tunjukkin noh di acara ini. Ini kesempatan ngoni tunjukkin kreasi ngoni dan buat yang suka tampil beda, kesempatan beking heboh!
        </p>
        
        <AdsPop id={3}/>
        <p>
        Selain itu, skola bakal adakan acara macam music show, deng tantangan-tantangan yang so pasti bikin torang pe jantung baku kencang. Halloween ini biasa dorang rayakan di luar negeri, tapi ini kali ada di skola kita! So ngoni yang biasa cuma lia di film, ini kali bole coba langsung rasa keseraman Halloween deng suasana skola. Kase seru noh pokoknya!
        </p>
        
        <p>
        Jadi, catat baik-baik ini tanggal, ajak skali teman-teman ngoni supaya rame-rame iko acara ini! Datang pake kostum yang paling sadis noh supaya ngoni pe gaya jadi trending di skola. Ini moment satu-satu yang sayang kalo mo lewat begitu jo. Jangan cuma mo jadi penonton, baku seru noh!
        </p>
        <AdsPop id={8}/>
      </div>
    </>
  )
}