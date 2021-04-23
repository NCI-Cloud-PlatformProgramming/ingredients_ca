import React from 'react';
import videoJS from 'video.js'
import "video.js/dist/video-js.css"
import { css } from 'glamor'

class VideoCards extends React.Component {

    constructor(props) {
        super(props);
        this.videoOptions = {
            autoplay: true,
            controls: true,
            sources: [{
                src: this.props.src
            }]
        }
    }
    componentDidMount() {
        this.player = videoJS(this.videoNode, this.videoOptions);
    }

    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }

    render() {
        return (
            <div {...css(styles.videosContainer)}>
                <div data-vjs-player {...css(styles.video)}>
                    <video ref={(node) => { this.videoNode = node; }} className="video-js" />
                </div>
            </div>
        );
    }
}

const styles = {
    videosContainer: {
        positoin: 'absolute',
        top: 200,
        'align-items': 'center',
        display: 'flex',
        'justify-content': 'center'
    },
    video: {
        position: 'relative',
        margin: '10px 10px 10px',
        width: '85%'
    }
}

export default VideoCards;