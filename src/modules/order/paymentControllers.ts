import { request } from "http";
const stripe = require('../../config/stripe');

const paymentControllers = async(request:any,response:any) => {
 try{
const {cartItems} = request.body;
const user = await userModel.findOne({_id:request.userId})
const params = {
 submit_type:'pay',
 mode: 'payment',
 payment_method_types:['card'],
 billing_method_collection: 'auto',
 shipping_option: [
    {
        shipping_rate: 'shr_1PmnY205tXIDhnmgfg2XET7p'
    }
 ],
 customer_email : user.email,
 line_items : cartItems.map((item,index)=> {
    return {
        price_data: {
            currency: 'bdt',
            product_data:{

            }

        }
    }
 })
}
const session = await stripe.checkout.sessions.create(params)
response.status(303).json(session)
 }catch(error){
response.json({
message:error?.message || error,
error: true,
success:false,
})
 }
}

module.exports = paymentControllers;