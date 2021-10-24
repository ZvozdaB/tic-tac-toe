export const AddPoint = (state, action) => {
    state.stateTic.map(item => {
        if (item.id === action.payload) {
            if (state.counter % 2 === 0 && !item.zero && !item.cross) {
                item.cross = true
                state.counter += 1
            } else if (state.counter % 2 !== 0 && !item.cross && !item.zero) {
                item.zero = true
                state.counter += 1
            }
        }
        return item;
    })
}