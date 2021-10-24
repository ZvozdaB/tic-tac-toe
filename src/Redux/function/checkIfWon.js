export const CheckIfWon = (state) => {
    const s = state.stateTic
    const winComb = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i = 0; i < winComb.length; i++) {
        let [a, b, c] = winComb[i];
        if (s[a].cross && s[b].cross && s[c].cross) {
            state.win = "X"
            break;
        }
        if (s[a].zero && s[b].zero && s[c].zero) {
            state.win = "O"
            break;
        }
    }
}