import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useSingleCourseQuery } from 'api/courses/get-single'
import Button from 'components/common/atoms/button'
import Input from 'components/common/atoms/input'
import StudentContainer from 'components/layout/student-container'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useLocation, useParams } from 'react-router-dom'

const Checkout = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const course_id = searchParams.get('course_id');
    const { data: Course, isLoading: isGetCourseLoading, refetch: refetchCourse } = useSingleCourseQuery(course_id);

    useEffect(() => {
        console.log(Course);
    }, [Course])


    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true)

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            // console.error(error);
            toast.error(error.message)
        } else {
            toast.success("Payment Successful!");
            console.log(paymentMethod)
            // Send paymentMethod.id to your server to complete the payment
        }
        setLoading(false)
    };

    const cardElementOptions = {
        style: {
            base: {
                fontSize: '16px',
                color: '#333',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a',
            },
        },
        hidePostalCode: true,
    };

    return (
        <StudentContainer>
            <div className='container'>
                <div className='grid grid-cols-2'>
                    <form onSubmit={handleSubmit} className='py-[3rem] px-[3rem] flex flex-col gap-3'>
                        <h1 className='text-[2rem]'>Checkout</h1>
                        <div className='flex items-center gap-3'>
                            <h1>Credit/ Debit</h1>
                            <div className='flex items-center gap-1'>
                                <img src={`${process.env.PUBLIC_URL}/assets/imgs/visa.jpg`} alt="" />
                                <img src={`${process.env.PUBLIC_URL}/assets/imgs/master-card.jpg`} alt="" />
                                <img src={`${process.env.PUBLIC_URL}/assets/imgs/discover.jpg`} alt="" />
                                <img src={`${process.env.PUBLIC_URL}/assets/imgs/american-express.jpg`} alt="" />
                            </div>
                        </div>
                        {/* <Input label={"Card Number"} />
                        <div className='grid grid-cols-2 gap-3'>
                            <Input label={"Expiration Date"} />
                            <Input label="CVC" />
                        </div> */}
                        <CardElement options={cardElementOptions} />
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" name="" id="" />
                            <p>I have read and agree to the website <span className='underline'>terms and conditions</span> *</p>
                        </div>
                        <div>
                            <Button type="submit" disabled={!stripe}>
                                {loading ? 'Processing...' : 'Pay'}
                            </Button>
                        </div>
                    </form>
                    <div className='bg-[#F2F2F2] py-[3rem] px-[3rem]'>
                        <div className='flex flex-col gap-3'>
                            <h1 className='font-semibold text-[2rem]'>Summary</h1>
                            <div className='flex items-center gap-3'>
                                <div>
                                    <img src="https://source.unsplash.com/random" className='h-[3rem] w-[3rem] rounded-md object-cover' alt="" />
                                </div>
                                <div>
                                    <h1 className='font-semibold'>{Course?.data?.name}</h1>
                                </div>
                            </div>
                            <div className='font-semibold text-lg flex items-center justify-between'>
                                <h1>Total</h1>
                                <h1><span className='text-[#6D6D6D] text-sm'>USD </span>${Course?.data?.price}</h1>
                            </div>
                            <p>By completing your purchase you agree to these <span className='text-[#0053a5]'> Terms of Service</span>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </StudentContainer>
    )
}

export default Checkout