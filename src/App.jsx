import * as React from "react";
import AdsPop from "./components/AdsPop.jsx";
import "./App.css";
import scaryVid from "./assets/video.mp4";

import { db } from './../config/firebase.config.js';
import { doc, setDoc, increment, getDoc } from 'firebase/firestore';


export default function App() {
  const videoEl = React.useRef(null);
  const vid = React.useRef(null);

  const recordVisit = async () => {
    const visitRef = doc(db, "visitors", "visit_count");
  
    // Cek apakah dokumen ada
    const visitSnapshot = await getDoc(visitRef);
    if (visitSnapshot.exists()) {
      // Jika dokumen ada, tambah count
      await setDoc(visitRef, {
        count: increment(1)
      }, { merge: true });
    } else {
      // Jika dokumen tidak ada, buat dokumen dengan count 1
      await setDoc(visitRef, {
        count: 1
      });
    }
  };
  
  const enterFullscreen = () => {
    setTimeout(() => {
      if (!document.fullscreenElement) { // Cek sebelum memasuki mode full-screen
        if (videoEl.current?.requestFullscreen) {
          videoEl.current.requestFullscreen();
        } else if (videoEl.current?.mozRequestFullScreen) {
          videoEl.current.mozRequestFullScreen(); // Firefox
        } else if (videoEl.current?.webkitRequestFullscreen) {
          videoEl.current.webkitRequestFullscreen(); // Chrome, Safari, Opera
        } else if (videoEl.current?.msRequestFullscreen) {
          videoEl.current.msRequestFullscreen(); // IE/Edge
        }
      }
      vid.current?.play();
    }, 2000);
  };

  React.useEffect(() => {
    const unsub = setTimeout(() => {
      document.getElementById("my_modal_1")?.showModal();
    }, 3000);

    return () => {
      clearTimeout(unsub); // Membersihkan timeout saat komponen di-unmount
      recordVisit();
    };
  }, []);

  return (
    <>
      <div ref={videoEl} className="scary absolute z-[-2] translate-x-[-100%]">
        <video ref={vid} src={scaryVid} loop className="min-h-screen object-cover"></video>
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <p className="py-4">Aktifkan notifikasi untuk menerima berita terbaru dari SulutGeng</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm mr-5" onClick={enterFullscreen}>Tolak</button>
              <button className="btn bg-red-500 text-white btn-sm" onClick={enterFullscreen}>Terima</button>
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
                  <img alt="Tailwind CSS Navbar component" src="/logo-apps-circle.png.webp" />
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

      <div className="hero bg-base-100 min-h-[50vh] mt-[200px]">
        <div className="hero-content">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-gray-700">Perayaan Hari Hallowen Disetiap Sekolah Mulai Dari Tgl 4 - 8 November</h1>
            <p className="py-6 text-gray-400">
              SulutGeng 30/11/2024 - Tondano Sulawesi Utara
            </p>
          </div>
        </div>
      </div>

      <div className="article">
        <AdsPop id={0} />
        <p>
          Ehh, anak-anak SMA mana nih yang so siap mo baku serem deng teman-teman di acara Halloween?
        </p>
        <AdsPop id={3} />
        <p>
          Untuk torang pe teman-teman di SMAN 1 Tondano, tenang, torang juga bakalan iko ini acara!
        </p>
        <AdsPop id={8} />
      </div>
    </>
  );
}