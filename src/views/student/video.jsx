import { useSingleCourseQuery } from 'api/courses/get-single'
import { useGetLecturesQuery } from 'api/lectures/get'
import Button from 'components/common/atoms/button'
import Input from 'components/common/atoms/input'
import StudentContainer from 'components/layout/student-container'
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import Svgs from 'svgs'
import * as Yup from "yup"

const Video = () => {
    const [Section, setSection] = useState(1);
    const playerRef = useRef(null);
    const [lastProgress, setLastProgress] = useState(0);
    const [Lectures, setLectures] = useState([]);
    const [SelectedLecture, setSelectedLecture] = useState({});
    const [isPlaying, setIsPlaying] = useState(true);
    const { id } = useParams();
    const { data: Course, isLoading: isGetCourseLoading, refetch: refetchCourse } = useSingleCourseQuery(id);
    const { data: lectures, isLoading: isGetLecturesLoading, refetch: refetchLectures } = useGetLecturesQuery();

    const validationSchema = Yup.object().shape({
        file: Yup.mixed().required('File is required'),
        agreement: Yup.boolean().oneOf([true], 'You must accept the agreement'),
    });

    const initialValues = {
        file: undefined,
        agreement: false,
    };


    const onSubmit = async (values, { setSubmitting, setFieldError }) => {
        try {
            const formData = new FormData();
            formData.append('file', values.file);

            // Upload file to server
            const uploadResponse = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });
            const uploadData = await uploadResponse.json();

            // Call Turnitin service to check plagiarism
            // Replace 'turnitinApiEndpoint' with the actual endpoint
            // const turnitinResponse = await fetch(turnitinApiEndpoint, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         fileUrl: uploadData.fileUrl, // Assuming the server returns the file URL after upload
            //     }),
            // });
            // const turnitinData = await turnitinResponse.json();

            // Handle Turnitin response
            // console.log('Plagiarism check result:', turnitinData);
        } catch (error) {
            console.error('Error:', error);
            setFieldError('file', 'Error occurred while checking plagiarism');
        } finally {
            setSubmitting(false);
        }
    };


    useEffect(() => {
        if (lectures?.data.length) {
            setLectures(lectures.data.filter(item => {
                return item?.course?.id == id
            }))
        }
    }, [lectures])

    useEffect(() => {
        if (Lectures.length) {
            setSelectedLecture(Lectures[0]);
        }
    }, [Lectures]);


    const handleProgress = (state) => {
        setLastProgress(state.playedSeconds ? state.playedSeconds : 0);
    };

    const handleVideoClose = () => {
        // Example: sendProgressToBackend(lastProgress);
    };

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
                        {/* <p className='text-sm text-[#6D6D6D] mt-3'>Home &gt;
                            Bachelor of Science in Computer Science &gt;
                            Topic 1: Intro To Computer Science</p> */}
                        <div className='col-span-6'>
                            <div className='w-full bg-gray-100'>
                                {
                                    Object.keys(SelectedLecture).length && <ReactPlayer
                                        key={SelectedLecture?.id}
                                        ref={playerRef}
                                        url={SelectedLecture?.video}
                                        playing={isPlaying}
                                        onProgress={handleProgress}
                                        onPause={handleVideoClose}
                                        controls={false}
                                        muted
                                        width='100%'
                                        height='100%'
                                    />
                                }
                            </div>
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
                        <h1 className='text-lg'>Topic: {SelectedLecture?.title}</h1>

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
                                <div className='quill-container !max-w-full' dangerouslySetInnerHTML={{ __html: Course?.data?.content }}></div>
                                <div className='quill-container !max-w-full' dangerouslySetInnerHTML={{ __html: Course?.data?.learning_details }}></div>
                            </div> : <div className='flex flex-col gap-4'>
                                <h1 className='text-3xl font-extrabold'>Instructions</h1>
                                <div className='text-sm' dangerouslySetInnerHTML={{ __html: SelectedLecture?.assignment }}></div>
                                <h1 className='text-3xl font-extrabold'>Submission</h1>
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={onSubmit}
                                >
                                    {(formik) => (
                                        <Form>
                                            <div className='w-1/2 flex flex-col gap-4'>
                                                <Field name="file" type="file" accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf" />
                                                {formik.errors.file && formik.touched.file && (
                                                    <div className="error">{formik.errors.file}</div>
                                                )}

                                                <div className='flex items-center gap-2'>
                                                    <Field type="checkbox" name="agreement" id="agreement" />
                                                    <label htmlFor="agreement" className="text-sm">I understand that submitting work that isn’t my own may result in permanent failure of this course.</label>
                                                </div>
                                                {formik.errors.agreement && formik.touched.agreement && (
                                                    <div className="error">{formik.errors.agreement}</div>
                                                )}

                                                <div>
                                                    <Button type="submit" disabled={formik.isSubmitting}>Submit Assignment</Button>
                                                </div>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                                {/* <div className='w-1/2 flex flex-col gap-4'>
                                    <Input accept={".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf"} type={'file'} label={"Upload your pdf file"} />
                                    <div className='flex items-center gap-2'>
                                        <input type="checkbox" name="" id="" />
                                        <p className='text-sm'>I understand that submitting work that isn’t my own may result in permanent failure of this course.</p>
                                    </div>
                                    <div>
                                        <Button>Submit Assignment</Button>
                                    </div>
                                </div> */}
                            </div>
                        }
                    </div>
                </div>
                <div className='col-span-2'>
                    {
                        Lectures?.map((ele, index) => {
                            return <div onClick={() => setSelectedLecture(ele)} className={`p-3 border shadow-sm hover:bg-[#F5FAFF] cursor-pointer bg-white ${SelectedLecture.id == ele.id && "!bg-[#F5FAFF]"}`}>
                                <h1 className='text-xl'>Topic {index + 1}: {ele?.title}.</h1>
                                <p className='text-sm text-[#6D6D6D]'>Uploaded at: {new Date(ele?.updated_at).toLocaleString()}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </StudentContainer>
    )
}

export default Video