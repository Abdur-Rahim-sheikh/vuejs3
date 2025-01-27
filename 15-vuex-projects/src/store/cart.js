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
            state.items.splice(idx, 1)
        },
        updateCart(state, payload) {
            let price = payload.price, qty = payload.qty
            let isAdd = payload.isAdd
            state.qty += isAdd ? qty : -qty;
            state.total += isAdd ? qty * price : -qty * price
        }
    },
    actions: {
        addToCart(context, product) {
            let tem = {
                price: product.price,
                qty: 1,
                isAdd: true
            }
            context.commit('updateCart', tem)
            context.commit('addToCart', product)
        },
        removeFromCart(context, item) {
            let tem = {
                price: item.price,
                qty: item.qty,
                isAdd: false
            }
            context.commit('updateCart', tem)
            context.commit('removeFromCart', item.productId)
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