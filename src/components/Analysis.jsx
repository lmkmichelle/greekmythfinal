import { atom, useAtom } from "jotai";
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./Experience";
import { useNavigate } from "react-router-dom";


const Analysis = () => {
    const navigate = useNavigate();
    return (
        
        <div className="custom-scroll-container">
          <div className="custom-banner">   
            
            
              <div className="custom-content">
              
                  <div className="item">
                  <button className="custom-nav-button" 
                        onClick={() => navigate(-1)} 
                        style={{marginBottom: "1.5rem" }}>
                        Go Back
                    </button>
                  
                  </div>
                  <div className="custom-title">
                      <p>ANALYSIS</p> 
                      <p className="text-xl font-light text-black-600 italic mb-6" style={{ fontSize: "2rem"}}>
                        Motifs
                        </p>
                        <div className="text-base text-gray-700 leading-relaxed max-w-3xl mx-auto px-4">
                            <p className="mb-4">
                            In each iteration of the story, the core motif is the tragic and undeserving death of Chen Manli. Regardless of the circumstances of her death, which differ even within versions, each telling of the tale portrays her as a victim of the forces beyond her control. Even in between the two primary tellings of the story, that is, whether her murderer was under the cruel authority of a Japanese officer or a fit of rage from a former lover, the common theme shows Chen Manli unwantingly caught within a web of violence and ultimately paying with her life. This theme highlights the fragility of her position within society and acts, almost bleakly, a reminder of the period’s political and social turmoil. The unjustness of her death reflects the overarching sense of helplessness that permeated several facets of life in Shanghai during the Gudao period.
                            </p>
                            
                        </div>
                        <p className="text-xl font-light text-black-600 italic mb-6" style={{ fontSize: "2rem"}}>
                            Differences
                            </p>
                        <div className="text-base text-gray-700 leading-relaxed max-w-3xl mx-auto px-4">
                            <p className="mb-4">
                            The main difference between the variations of the story lies in the motivation behind her murder, which shifts from a personal betrayal to a broader political implication. In the latter’s version, and also the most widely proliferated one, the tale places an emphasis on the political angle that Chen Manli’s rejection of a Japanese officer led to her death. This version of the tale frames her as a symbol of resistance against Japanese occupation and resonates with the broad anti-Japanese sentiment of the period. Similarly, the officer’s violent reaction is a reflection of the oppressive power dynamics of the era as well, making Chen’s death a politically charged act that parallels the broader conflict between the Chinese populace and Japanese authority.
                            </p>

                            <p className="mb-4">
                            In contrast, the other telling of the tale places an emphasis on personal motives and centers around Chen’s relationship with her former lovers. In these versions, her death is a consequence of a lover’s jealousy or betrayal. This instead shifts the narrative away from any political implications and rather portrays her as a victim caught within the tragedy of her personal life. The accounts of her past lovers also vary among sources. According to the North China Herald, her late lovers were the “late Chinese banker Mr. Liu Hui-tze and then the late Mr. Chu Shui-fu, manager of the Kiu Fu Company” (Field, 2018). In contrast, in the Global Times, it’s mentioned that her former lover was a “a Kuomintang officer, who was mortified that she had found a new man” (Zhou, 2013). Nevertheless, this version leans into the more intimate, human aspects of the tragedy, emphasizing Chen’s vulnerability in a male-dominated society where her associations and choices ultimately led to her demise.
                            </p>
                            
                        </div>
                        <p className="text-xl font-light text-black-600 italic mb-6" style={{ fontSize: "2rem"}}>
                            Significance
                        </p>
                        <div className="text-base text-gray-700 leading-relaxed max-w-3xl mx-auto px-4">
                            <p className="mb-4">
                            This political implication is crucial in understanding why the version of the tale involving a Japanese officer became more prominent than those involving Chen Manli’s former lovers. The narrative of a Japanese officer, rather than an estranged lover, would resonate more deeply with the Chinese public during this time, aligning with the broad anti-Japanese sentiment and nationalistic fervor. While the versions involving her former lovers included much more evidence supporting it; there were many (albeit conflicting) sources about their occupation, full names, and some even specifying the past nature of Chen Manli’s relationship with, such as stated by the Global Times, in which she had been “the mistress of a prominent banker. They pledged their love to each other and promised never to frequent dance halls again” (Zhou, 2013).
                            </p>
                            <p className="mb-4">
                            Therefore, the prominence of the tale involving the Japanese officer is a reflection of the socio-political sentiment of the time rather than a reflection of the tale’s accuracy. This story’s ability to adapt its details depending on the context showcases its flexibility and its broader function as a tool of political resistance. Similar to the Greek myth of the Trojan War, where different accounts emphasize either the deceit of the Greeks or the wrath of the gods, the tale of Chen Manli shifts based on the audience's needs—here, to unite and antagonize a common enemy during the Gudao period.
                            </p>
                            
                        </div>
                  </div>              
              </div>
          </div>
        </div>
            

      );
}

export default Analysis
