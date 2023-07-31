import styles from "./styles.module.scss"

import ReactPlayer from 'react-player';

const VideoPlayer = () => {
    return (
        <div className={styles.video}>
            <ReactPlayer
                url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                controls={true} />
        </div>

    );
}
export default VideoPlayer