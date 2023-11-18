import './style.css'; // Importing styling from the .css folder
import React, {useState} from "react";


const Knitting = () => {
    const [imageSources, setImageSources] = useState({
        uncw: "/uncw.jpg",
        new_uncw: "/uncw2.jpg",
        smock: "/smocker.jpg",
        new_smock: "/smocker2.jpg",
        warmSock: "/warmsock.jpg",
        new_warmSock: "/warmsock2.jpg",
        ogSweater: "/ogsweater.jpg",
        new_ogSweater: "/ogsweater2.jpg",
        marianneMittens: "/marianne.jpg",
        new_marianneMittens: "/marianne2.jpg",
        juliana: "/juliana.jpg",
        new_juliana: "/juliana2.jpg",
        malin: "/malin.jpg",
        new_malin: "/malin2.jpg",
        ogMittens: "/ogmittens.jpg",
        new_ogMittens: "/ogmittens2.jpg",
        coolSock: "/coolsock.jpg",
        new_coolSock: "/coolsock2.jpg",
      });

    const handleImageHover = (imageId, isHovered) => {
        setImageSources((prevImageSources) => ({
          ...prevImageSources,
          [imageId]: isHovered
            ? imageSources[`new_${imageId}`]
            : imageSources[imageId],
        }));
      };

    return (
        <div className="Knitting">
            <div>
                <h1>Knitting</h1>
                <br/>
                <p>Here are some recent projects I have made! </p>
                <table className="knits">
                    <tr>
                        <th>
                            <img src={imageSources.uncw} alt="uncw" width= "350 px" className="photos"
                            onMouseOver={() => handleImageHover("uncw", true)}
                            onMouseOut={() => handleImageHover("uncw", false)}/>
                            <p>UNCW Hat - worsted weight yarn, my own pattern (~5 hours)</p>
                            
                        </th>
                        <th>
                            <img src={imageSources.smock} alt="smock" width="364 px" className="photos"
                            onMouseOver={() => handleImageHover("smock", true)}
                            onMouseOut={() => handleImageHover("smock", false)}
                            />
                            <p>Smock Sweater - DK weight yarn & silk, pattern by PetiteKnit (~150 hours)</p>
                        </th>
                        <th>
                            <img src={imageSources.warmSock} alt="warm sock" width="350px" className="photos"
                            onMouseOver={() => handleImageHover("warmSock", true)}
                            onMouseOut={() => handleImageHover("warmSock", false)}
                            />
                            <p>Warm Socks - fingering weight yarn, pattern by KropaKnits (~15 hours)</p>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <br/><img src={imageSources.ogSweater} alt="ogsweater" width="350px" className="photos"
                            onMouseOver={() => handleImageHover("ogSweater", true)}
                            onMouseOut={() => handleImageHover("ogSweater", false)}
                            />
                            <p>First Sweater - bulky weight yarn, pattern by Infuse (~18 hours)</p>
                        </th>
                        <th>
                            <br/><img src={imageSources.marianneMittens} alt="marianne" width="350px" className="photos"
                            onMouseOver={() => handleImageHover("marianneMittens", true)}
                            onMouseOut={() => handleImageHover("marianneMittens", false)}
                            />
                            <p>Star Mittens - DK weight yarn, pattern by me (~9 hours)</p>
                        </th>
                        <th>
                            <br/><img src={imageSources.juliana} alt="juliana" width="350px" className="photos"
                            onMouseOver={() => handleImageHover("juliana", true)}
                            onMouseOut={() => handleImageHover("juliana", false)}
                            />
                            <p>Moutnain Mittens - DK weight yarn, pattern by me (~9 hours)</p>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <br/><img src={imageSources.malin} alt="malin" width="350px" className="photos"
                            onMouseOver={() => handleImageHover("malin", true)}
                            onMouseOut={() => handleImageHover("malin", false)}
                            />
                            <p>Snowflake Mittens - DK weight yarn, pattern by me (~6 hours)</p>
                        </th>
                        <th>
                            <br/><img src={imageSources.ogMittens} alt="ogmittens" width="350px" className="photos"
                            onMouseOver={() => handleImageHover("ogMittens", true)}
                            onMouseOut={() => handleImageHover("ogMittens", false)}
                            />
                            <p>First Mittens - worsted yarn, cannot find original pattern (~8 hours)</p>
                        </th>
                        <th>
                            <br/><img src={imageSources.coolSock} alt="coolsock" width="350px" className="photos"
                            onMouseOver={() => handleImageHover("coolSock", true)}
                            onMouseOut={() => handleImageHover("coolSock", false)}
                            />
                            <p>First Socks - fingering yarn, pattern by KropaKnits (~15 hours)</p>
                        </th>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Knitting 