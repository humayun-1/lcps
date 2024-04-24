import Button from 'components/common/atoms/button'
import StudentContainer from 'components/layout/student-container'
import React from 'react'

const Cart = () => {
    return (
        <StudentContainer>
            <div className='!my-[3rem] container'>
                <h1 className='font-semibold text-[2rem]'>Shopping Cart</h1>
                <div className='border-y py-5'>
                    <table className='w-full text-left'>
                        <thead>
                            <th>Product</th>
                            <th>Total</th>
                            <th></th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className='flex items-center gap-2'>
                                        <div>
                                            <img src="https://source.unsplash.com/random" className="h-[3rem] w-[3rem] rounded-lg object-cover" />
                                        </div>
                                        <div>
                                            <h1>Bachelor of Science in Computer Science</h1>
                                            <ul className='list-disc flex items-center list-inside gap-3'>
                                                <li>20.5 total hours</li>
                                                <li>200 Lectures</li>
                                                <li>All Levels</li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                                <td>$74.00</td>
                                <td>Remove</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={'mt-3 text-center'}>
                    <Button>Go to Checkout</Button>
                </div>
            </div>
        </StudentContainer>
    )
}

export default Cart