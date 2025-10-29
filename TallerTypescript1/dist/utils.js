export function averageSeasons(arr) {
    if (!arr.length)
        return 0;
    return arr.reduce((sum, x) => sum + (x.seasons ?? 0), 0) / arr.length;
}
