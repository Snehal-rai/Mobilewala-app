
import React from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../features/cartSlice"

export default function App() {

    const items = useSelector((state) => state.allCart.items);
    const dispatch = useDispatch();

    return (
        <div class="m-2">
            <MDBContainer className='pt-4'>
                <MDBRow className="mb-3">
                    {items.map((item) => (
                        <MDBCol className='pb-4' key={item.id} size="md">
                            <MDBCard className='p-3 '>
                                <MDBCardImage src={item.img} position='top' alt='...' />
                                <MDBCardBody>
                                    <MDBCardTitle><strong className=''>{item.title}</strong></MDBCardTitle>
                                    <MDBCardText>Price: ${item.price}</MDBCardText>
                                    <div className='mx-4'>
                                        <MDBBtn onClick={() => dispatch(addToCart(item))} ><strong className='text-white'>Add to Cart</strong></MDBBtn>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    ))
                    }
                </MDBRow>
            </MDBContainer>
        </div>
    );
}
