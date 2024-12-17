import { atom, useAtom } from "jotai";
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./Experience";
import { useNavigate } from "react-router-dom";

const pictures = [
  "DSC00680",
  "DSC00933",
  "DSC00966",
  "DSC00983",
  "DSC01011",
  "DSC01040",
  "DSC01064",
  "DSC01071",
  "DSC01103",
  "DSC01145",
  "DSC01420",
  "DSC01461",
  "DSC01489",
  "DSC02031",
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);
  const navigate = useNavigate(); // React Router navigation function

  return (
    <>
      <main className="pointer-events-none select-none z-10 fixed inset-0 flex justify-between flex-col">
        <a
          className="pointer-events-auto mt-10 ml-10"
        />
        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          <div className="overflow-auto flex items-center gap-4 max-w-full p-10">   
          <button
              className="analysis-button"
              onClick={() => navigate("/analysis")}
            >
              See Analysis
            </button>     
            {[...pages].map((_, index) => (
              <button
                key={index}
                className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                  index === page
                    ? "bg-white/90 text-black"
                    : "bg-black/0 text-black"
                }`}
                onClick={() => setPage(index)}
              >
                {index === 0 ? "Cover" : `Page ${index}`}
              </button>
            ))}
            <button
              className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                page === pages.length
                  ? "bg-white/90 text-black"
                  : "bg-black/0 text-black"
              }`}
              onClick={() => setPage(pages.length)}
            >
              Back Cover
            </button>
          </div>
        </div>
        
      </main>
      <div className="banner">
              <div className="content">
                  <div className="item">
                      <div>
                          <p>designed & developed by michelle mercer</p>
                          <p>class 2604: greek mythology</p>
                      </div>
                      
                      
                  </div>
                  
                  <div className="item title">
                      <p>THE TALE OF</p>
                      <p>CHEN MANLI</p>
                  </div>
              </div>
          </div>
          <Loader />
            <Canvas shadows camera={{ position: [-0.5, 1, 4], fov: 45 }}>
              <group position-y={0}>
                <Suspense fallback={null}>
                  <Experience />
                </Suspense>
              </group>
            </Canvas>
      </>
  );
};
