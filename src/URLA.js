import React, { useState } from 'react';
function URLA() {
    const [data, setData] = useState(false);
    const [input, setInput] = useState("");


    return (
        <div>
            <div>
                <h1>Input News Link URL
                </h1>
                <input onChange={(e) => setInput(e.target.value) || setData (false)} type="text" placeholder="add your url" />
                <br></br>
                <  br>

                </br>

                <button onClick={() => setData(true)}>Go</button>
                <br></br>
                <br></br>
                <br></br>
                {
                    input !== "" && data && <div>
                        <div className="R">
                            <div className="O">
                                Incident Location:
                            </div>
                            <div className="O">
                                GPS Cordlnate:
                            </div>
                            <div className="O">
                                Incident Date:
                          </div>
                            <div className="O">
                                Incident Type:
                            </div>
                            <div className="O">
                                Images:
                                </div>
                        </div>
                    </div>

                }
            </div>

        </div>

    );
}

export default URLA;