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
            let idx = state.items.findIndex((item) => item.id === product.id)
            if (idx >= 0) {
                state.items[idx].qty++;
            }
            else {
                let tem = { ...product };
                tem.qty = 1;
                state.items.push(tem);
            }
        },
        removeFromCart(state, product_id) {
            let idx = state.items.findIndex((item) => item.id === product_id)
            state.items[idx].qty -= 1
            if (state.items[idx].qty <= 0) {
                state.items.splice(idx, 1)
            }
        },
        updateCart(state, price) {
            state.qty += price > 0 ? 1 : -1;
            state.total += price
        }
    },
    actions: {
        addToCart(context, product) {
            context.commit('updateCart', product.price)
        }
    }
}