import { useEffect, useState } from "react";

const Words = [
  "No",
  "Pakkaaa?",
  "Pakkaa wallaa pakka??",
  "Aur kuch option nhi hoga",
  "Pleaseeeeee",
];

const gifs = [
  "/assets/gif1.gif",
  "/assets/gif2.gif",
  "/assets/gif3.gif",
  "/assets/gif4.gif"
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [isYesPressed, setIsYesPressed] = useState(false); // Changed variable name to isYesPressed
  const [gifLoading, setGifLoading] = useState(true);
  const yesSize = noCount * 15 + 16;

  useEffect(() => {
    if (!gifLoading) {
      document.body.classList.remove("js-disabled");
    }
  });

  function handleNoClick() {
    setNoCount(noCount + 1);
    const yesBtn = document.getElementById("yesButton");
    const noBtn = document.getElementById("noButton");
    if (noBtn && yesBtn) {
      noBtn.style.position = "absolute";
      noBtn.style.transition = "top 0.3s ease-in-out, right 0.3s ease-in-out";
      noBtn.style.top = `${Math.random() * 305}px`;
      noBtn.style.right = `${Math.random() * 315}px`;
      yesBtn.style.width = `${yesBtn.offsetWidth + 40}px`;
      yesBtn.style.height = `${yesBtn.offsetHeight + 40}px`;
    }
  }

  function getNoGif() {
    return gifs[noCount % gifs.length];
  }

  function getNoButtonText() {
    return Words[noCount % Words.length]; // Changed reference to Words
  }

  return (
    <div className="lolllll flex justify-center items-center h-screen">
      <div className="text-center">
        {isYesPressed ? (
          <>
            <img src="/assets/yess.gif" alt="yes" />
          </>
        ) : (
          <div className="content">
            <img src={getNoGif()} alt="no" onLoad={() => setGifLoading(false)} className="mx-auto" />
            <div className="text-xl">Will you be my Valentine?</div> {/* Updated text */}
            <div className="mt-4">
              <button
                id="yesButton"
                style={{ fontSize: yesSize }}
                onClick={() => setIsYesPressed(true)}
                className="custom-btn bg-green-500 text-white px-4 py-2 rounded mr-4"
              >
                Yes
              </button>
              <button onClick={handleNoClick} id="noButton" className="custom-btn bg-red-500 text-white px- py-2 rounded">
                {getNoButtonText()}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
