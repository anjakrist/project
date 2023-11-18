import './style.css'; // Importing styling from the .css folder
import React from "react";


const Knitting = () => {
    return (
        <div className="Knitting">
            <div>
                <h1>
                    Knitting
                </h1>
                <br/>
                <p>
                    Here are some recent projects I have made! 
                </p>
                <table className="knits">
                    <tr>
                        <th><img src="/uncw.jpg" alt="uncw" width= "350 px" className="photos"/>UNCW Hat - worsted weight yarn, my own pattern (~5 hours)</th>
                        <th><img src="/smocker.jpg" alt="smock" width="364 px" className="photos"/>Smock Sweater - DK weight yarn & silk (held together), pattern by PetiteKnit (~150 hours)</th>
                        <th><img src="/warmsock.jpg" alt="warm sock" width="350px" className="photos"/>Warm Socks - fingering weight yarn, pattern by KropaKnits (~15 hours)</th>
                    </tr>
                    <tr>
                        <th><br/><img src="/ogsweater.jpg" alt="ogsweater" width="350px" className="photos"/>First Sweater - bulky weight yarn, pattern by Infuse (~18 hours)</th>
                        <th><br/><img src="/marianne.jpg" alt="marainne mittens" width="350px" className="photos"/>Star Mittens - DK weight yarn, pattern by me (~9 hours)</th>
                        <th><br/><img src="/juliana.jpg" alt="juliana" width="350px" className="photos"/>Moutnain Mittens - DK weight yarn, pattern by me (~9 hours)</th>
                    </tr>
                    <tr>
                        <th><br/><img src="/malin.jpg" alt="malin" width="350px" className="photos"/>Snowflake Mittens - DK weight yarn, pattern by me (~6 hours)</th>
                        <th><br/><img src="/ogmittens.jpg" alt="ogmittens" width="350px" className="photos"/>First Mittens - worsted yarn, cannot find original pattern (~8 hours)</th>
                        <th><br/><img src="/coolsock.jpg" alt="coolsock" width="350px" className="photos"/>First Socks - fingering yarn, pattern by KropaKnits (~15 hours)</th>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Knitting 