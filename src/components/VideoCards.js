import React from 'react';
import videoJS from 'video.js'
import "video.js/dist/video-js.css"

class VideoCards extends React.Component {
    componentDidMount(){
        this.player = videoJS(this.videoNode, this.props);
    }

    componentWillUnmount(){
        if(this.player){
            this.player.dispose();
        }
    }

    render(){
        return(
            <div>
                <div data-vjs-player>
                    <video ref={(node) => {this.videoNode = node;}} className="video-js"/>
                </div>
            </div>
        );
    }
}

export default VideoCards;