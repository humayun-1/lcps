import Button from 'components/common/atoms/button'
import Input from 'components/common/atoms/input'
import StudentContainer from 'components/layout/student-container'
import React, { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import Svgs from 'svgs'

const Video = () => {
    const [Section, setSection] = useState(1);
    const playerRef = useRef(null);
    const [lastProgress, setLastProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    const handleProgress = (state) => {
        setLastProgress(state.playedSeconds ? state.playedSeconds : 0);
    };

    const handleVideoClose = () => {
        // Example: sendProgressToBackend(lastProgress);
    };

    useEffect(() => {
        console.log(lastProgress, ":lastProgress");
    }, [lastProgress]);

    const handlePausePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const rewindVideo = (seconds) => {
        playerRef.current.seekTo(playerRef.current.getCurrentTime() - seconds);
    };

    const formatTime = (seconds) => {
        if (seconds && !isNaN(seconds)) {
            const date = new Date(null);
            date.setSeconds(seconds);
            return date.toISOString().substr(11, 8);
        } else {
            return '00:00:00';
        }
    };


    // useEffect(() => {
    //     console.log(lastProgress, ":lastProgress");
    // }, [lastProgress]);


    // const handlePausePlay = () => {
    //     let play = !isPlaying;
    //     setIsPlaying(play);
    //     play ? videoRef.current.pause() : videoRef.current.play();
    // };
    return (
        <StudentContainer>
            <div className='container flex flex-col-reverse lg:grid grid-cols-8'>
                <div className='col-span-6'>
                    <div className='flex flex-col gap-3 mb-[3rem]'>
                        <p className='text-sm text-[#6D6D6D] mt-3'>Home &gt;
                            Bachelor of Science in Computer Science &gt;
                            Topic 1: Intro To Computer Science</p>
                        <div className='col-span-6'>
                            <ReactPlayer
                                ref={playerRef}
                                url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                playing={isPlaying}
                                onProgress={handleProgress}
                                onPause={handleVideoClose}
                                controls={false}
                                muted
                                width='100%'
                                height='100%'
                            />
                            <div className='mt-2 border bg-gray-50 rounded-md p-2 flex items-center gap-5 mx-2'>
                                <button onClick={handlePausePlay}>
                                    {
                                        isPlaying ? <Svgs.Pause /> : <Svgs.Play />
                                    }
                                </button>
                                <p className='text-sm cursor-pointer'>{formatTime(lastProgress)} / {formatTime(playerRef.current?.getDuration())}</p>
                                <p className='text-sm cursor-pointer' onClick={() => rewindVideo(10)}><Svgs.Rewind10 /></p>
                                <p className='text-sm cursor-pointer' onClick={() => rewindVideo(30)}><Svgs.Rewind30 /></p>
                                <p className='text-sm cursor-pointer' onClick={() => rewindVideo(60)}><Svgs.Rewind60 /></p>
                            </div>
                        </div>
                        <h1 className='text-lg'>Topic 1: Intro To Computer Science</h1>

                        <div className='flex items-center gap-2'>
                            {
                                ["Overview", "Assignment"].map((ele, index) => {
                                    return <p onClick={() => {
                                        setSection(index + 1)
                                    }} className={`${index + 1 == Section && "underline !text-[#0053A5]"} text-sm cursor-pointer text-[#6D6D6D] hover:text-[#0053A5] hover:underline`}>{ele}</p>
                                })
                            }
                        </div>

                        {
                            Section == 1 ? <div>
                                <h1 className='text-3xl font-extrabold'>Lorem ipsum dolor sit amet, eli</h1>
                                <p className='text-sm'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis, augue sit amet commodo eleifend, nunc odio sodales sapien, id dapibus est tortor ac quam. Vestibulum non sapien leo. Aenean ex dui, lacinia nec sollicitudin in, aliquet ut mauris. Vivamus fermentum sit amet ante bibendum lobortis. Pellentesque mollis faucibus orci, sed euismod leo volutpat ac. Duis mollis eros ut semper laoreet. Pellentesque vestibulum vulputate cursus. Cras aliquam volutpat libero in semper. Phasellus laoreet sollicitudin scelerisque.
                                    Quisque ultricies eros vitae sem dictum vehicula. Fusce at congue turpis. Donec est nibh, condimentum feugiat fringilla quis, pretium vitae lorem. Proin vitae est enim. Integer non accumsan augue. Duis ligula risus, ullamcorper eu ipsum in, mollis imperdiet ipsum. Duis ante dolor, aliquam nec massa sed, maximus suscipit nibh. Etiam nunc urna, consectetur at vehicula at, eleifend sed odio.
                                    In hac habitasse platea dictumst. Cras quis nulla viverra, fermentum urna sit amet, sagittis sem. Integer vel diam bibendum, euismod tellus eu, mollis sem. Etiam eget interdum purus. Donec sit amet purus tempus erat ultricies condimentum. Proin elementum enim a mi finibus, non pellentesque sem lacinia. Nullam sodales nisi dolor, vitae faucibus est sagittis ut. Nulla mollis nibh augue, eget ullamcorper ex vulputate id. Nam lobortis placerat tristique. Vivamus pulvinar condimentum pellentesque.</p>
                                <div>
                                    <ul className='grid grid-cols-2 gap-4 list-disc list-inside'>
                                        <li>
                                            <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</strong>
                                            <p className='text-sm'>
                                                Nulla mollis nibh augue, eget ullamcorper ex vulputate id. Nam lobortis placerat tristique. Vivamus pulvinar condimentum pellentesque.
                                            </p>
                                        </li>
                                        <li>
                                            <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</strong>
                                            <p className='text-sm'>
                                                Nulla mollis nibh augue, eget ullamcorper ex vulputate id. Nam lobortis placerat tristique. Vivamus pulvinar condimentum pellentesque.
                                            </p>
                                        </li>
                                        <li>
                                            <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</strong>
                                            <p className='text-sm'>
                                                Nulla mollis nibh augue, eget ullamcorper ex vulputate id. Nam lobortis placerat tristique. Vivamus pulvinar condimentum pellentesque.
                                            </p>
                                        </li>
                                        <li>
                                            <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</strong>
                                            <p className='text-sm'>
                                                Nulla mollis nibh augue, eget ullamcorper ex vulputate id. Nam lobortis placerat tristique. Vivamus pulvinar condimentum pellentesque.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div> : <div className='flex flex-col gap-4'>
                                <h1 className='text-3xl font-extrabold'>Instructions</h1>
                                <p className='text-sm'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis, augue sit amet commodo eleifend, nunc odio sodales sapien, id dapibus est tortor ac quam. Vestibulum non sapien leo. Aenean ex dui, lacinia nec sollicitudin in, aliquet ut mauris. Vivamus fermentum sit amet ante bibendum lobortis. Pellentesque mollis faucibus orci, sed euismod leo volutpat ac. Duis mollis eros ut semper laoreet. Pellentesque vestibulum vulputate cursus. Cras aliquam volutpat libero in semper. Phasellus laoreet sollicitudin scelerisque.
                                    Quisque ultricies eros vitae sem dictum vehicula. Fusce at congue turpis. Donec est nibh, condimentum feugiat fringilla quis, pretium vitae lorem. Proin vitae est enim. Integer non accumsan augue. Duis ligula risus, ullamcorper eu ipsum in, mollis imperdiet ipsum. Duis ante dolor, aliquam nec massa sed, maximus suscipit nibh. Etiam nunc urna, consectetur at vehicula at, eleifend sed odio.
                                    In hac habitasse platea dictumst. Cras quis nulla viverra, fermentum urna sit amet, sagittis sem. Integer vel diam bibendum, euismod tellus eu, mollis sem. Etiam eget interdum purus. Donec sit amet purus tempus erat ultricies condimentum. Proin elementum enim a mi finibus, non pellentesque sem lacinia. Nullam sodales nisi dolor, vitae faucibus est sagittis ut. Nulla mollis nibh augue, eget ullamcorper ex vulputate id. Nam lobortis placerat tristique. Vivamus pulvinar condimentum pellentesque.
                                </p>
                                <h1 className='text-3xl font-extrabold'>Submission</h1>
                                <div className='w-1/2 flex flex-col gap-4'>
                                    <Input type={'file'} label={"Upload your pdf file"} />
                                    <div className='flex items-center gap-2'>
                                        <input type="checkbox" name="" id="" />
                                        <p className='text-sm'>I, Joe Morgan, understand that submitting work that isn’t my own may result in permanent failure of this course.</p>
                                    </div>
                                    <div>
                                        <Button>Submit Assignment</Button>
                                    </div>
                                </div>
                            </div>
                        }

                    </div>
                </div>
                <div className='col-span-2'>
                    {
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((ele, index) => {
                            return <div className='p-3 border shadow-sm hover:bg-[#F5FAFF] bg-white'>
                                <h1 className='text-xl'>Topic {index + 1}: Lorem, ipsum dolor.</h1>
                                <p className='text-sm text-[#6D6D6D]'>20min</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </StudentContainer>
    )
}

export default Video