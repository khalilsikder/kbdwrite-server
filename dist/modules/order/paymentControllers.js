"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const stripe = require('../../config/stripe');
const paymentControllers = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cartItems } = request.body;
        const user = yield userModel.findOne({ _id: request.userId });
        const params = {
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_method_collection: 'auto',
            shipping_option: [
                {
                    shipping_rate: 'shr_1PmnY205tXIDhnmgfg2XET7p'
                }
            ],
            customer_email: user.email,
            line_items: cartItems.map((item, index) => {
                return {
                    price_data: {
                        currency: 'bdt',
                        product_data: {}
                    }
                };
            })
        };
        const session = yield stripe.checkout.sessions.create(params);
        response.status(303).json(session);
    }
    catch (error) {
        response.json({
            message: (error === null || error === void 0 ? void 0 : error.message) || error,
            error: true,
            success: false,
        });
    }
});
module.exports = paymentControllers;
