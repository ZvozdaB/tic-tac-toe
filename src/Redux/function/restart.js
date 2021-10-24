export const Restart = (state) => {
    state.stateTic.map(item => { item.cross = false; item.zero = false; return item })
    state.counter = 0
    state.win = ""
}