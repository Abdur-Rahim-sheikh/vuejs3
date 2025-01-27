export default {
    state() {
        return {
            items: [],
            total: 0,
            qty: 0
        }
    },
    mutations: {
        addToCart(state, product) {
            state.qty++;
            state.total += product.price;
            let idx = state.items.findIndex((item) => item.productId === product.id)
            if (idx >= 0) {
                state.items[idx].qty++;
            }
            else {
                let tem = {
                    productId: product.id,
                    image: product.image,
                    title: product.title,
                    price: product.price,
                    qty: 1
                };
                state.items.push(tem);
            }
        },
        removeFromCart(state, productId) {
            let idx = state.items.findIndex((item) => item.productId === productId)
            state.qty -= state.items[idx].qty
            state.total -= state.items[idx].price * state.items[idx].qty

            state.items.splice(idx, 1)
        },
        updateQuantity(state, payload) {
            let idx = state.items.findIndex((item) => item.productId === payload.productId)
            let diff = payload.quantity - state.items[idx].qty
            state.qty += diff
            state.total += diff * state.items[idx].price
            state.items[idx].qty = payload.quantity

        }
    },
    actions: {
        addToCart(context, product) {
            context.commit('addToCart', product)
        },
        removeFromCart(context, item) {
            context.commit('removeFromCart', item.productId)
        },
        updateQuantity(context, payload) {
            if (payload.quantity <= 0) {
                context.commit('removeFromCart', payload.productId)
                return
            }

            context.commit('updateQuantity', payload)
        }
    },
    getters: {
        items(state) {
            return state.items
        },
        qty(state) {
            return state.qty
        },
        total(state) {
            return state.total
        },
        cart(_, getters) {
            return {
                items: getters.items,
                qty: getters.qty,
                total: getters.total
            }
        }
    }
}