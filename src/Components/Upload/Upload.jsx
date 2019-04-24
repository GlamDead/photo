import React, { Component } from 'react';
import './upload.scss';

class Upload extends Component{
    render(){
        return(
            <div className="upload">
                <p>Select Folder</p>
                <button><b>Subfolder</b> in Archive</button>
                <form action="">
                    <p>Drop files here or <label>browse</label> to upload</p>
                </form>
            </div>
        )
    }
}

export default Upload;