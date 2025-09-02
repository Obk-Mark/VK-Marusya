import { useState, useRef } from 'react';
import YouTube, { YouTubeEvent, YouTubePlayer } from 'react-youtube';
import { Button } from '../Button/Button';
import './TrailerWindow.scss';
import { TrailerWindowProps } from './types';
import { Loader } from '../Loader/Loader';

export const TrailerWindow = ({ movieTitle, trailerYouTubeId, toggleTrailerOpen }: TrailerWindowProps) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const playerRef = useRef<YouTubePlayer | null>(null);

    const handleVideoClick = (e: React.MouseEvent<HTMLDivElement>): void => {
        e.preventDefault();
        if (!playerRef.current) return;
        isPlaying ? playerRef.current.pauseVideo() : playerRef.current.playVideo();
    };

    const onReady = (event: YouTubeEvent<YouTubePlayer>): void => {
        setIsLoading(false);
        playerRef.current = event.target;
        event.target.playVideo();
    };

    const onStateChange = (event: YouTubeEvent<number>): void => {
        setIsPlaying(event.data === 1);
    };

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 0,
            modestbranding: 1,
            rel: 0,
            controls: 0,
            enablejsapi: 1,
        } as const,
    };

    return (
        <div className="trailer-window">
            <div className="trailer-window__wrapper">
                <div className="trailer-window__video-container">
                    {isLoading ? (
                        <div className="trailer-window__loader">
                            <Loader />
                        </div>
                    ) : (
                        <>
                            <span className={!isPlaying ? "trailer-window__state-indicator trailer-window__state-indicator--active" : "trailer-window__state-indicator"}>
                                {isPlaying ? '⏸' : '▶'}
                            </span>
                            <span className={!isPlaying ? "trailer-window__title trailer-window__title--active" : "trailer-window__title"}>{movieTitle}</span>
                        </>
                    )}

                    <YouTube
                        videoId={trailerYouTubeId || ''}
                        opts={opts}
                        onReady={onReady}
                        onStateChange={onStateChange}
                        onClick={handleVideoClick}
                        className="trailer-window__video"
                        iframeClassName="trailer-window__video-iframe"
                        key={trailerYouTubeId}
                    />
                </div>

                <Button
                    handleClick={toggleTrailerOpen}
                    classNames="btn--icon btn--white btn--curcle trailer-window__close-btn"
                    icon={{
                        name: "close-icon",
                        width: 24,
                        height: 24
                    }}
                />
            </div>
        </div>
    );
};