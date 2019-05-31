import React, { Component,Fragment } from "react";
import video_icon from "./video.png";
import audio_icon from "./audio.png";
class bili extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Fragment>
              {
                this.props.list.map((item, index) =>
                {
                   return(<li key={index + item.name}>
                        <img
                            alt={
                                item.type === "video" ? "视频图标" : "音频图标"
                            }
                            src={
                                item.type === "video" ? video_icon : audio_icon
                            }
                        />
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                            {item.name}
                        </a>
                    </li>)
                })
              }
            </Fragment>
        );
    }
}

export default bili;
