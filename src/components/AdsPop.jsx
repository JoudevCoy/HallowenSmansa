import * as React from "react";


export default function AdsPop({id}){
  const [ads, setAds] = React.useState({});
  const [isAds, setIsAds] = React.useState(false);
  
  React.useEffect(() => {
    const end = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
          setAds(data);
          setIsAds(true);
        })
        .catch(err => console.error("Error", err))
    }
    
    return () => {
      if (!ads.length){
        end();
      } else {
        //console.log(ads)
      }
    }
  }, [ads]);

  
  return (
    <div className="ads-pop block mx-auto max-w-[150px] bg-base-200 my-7 relative">
      {
        isAds ? <>
          <img src={ads[id].image} className="max-w-full"/>
          <p className="text-[0.7rem]">{ads[id].title}</p>
          <b className="block absolute top-0 right-0 z-20 bg-red-100 aspect-square text-center w-5">X</b>
        </> : ""
      }
    </div>
  )
}