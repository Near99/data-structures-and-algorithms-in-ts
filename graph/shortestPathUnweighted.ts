const inputGraphMatrix: number[][] = new Array(10).fill(1).map(() => new Array(10).fill(0));

const getPath = (start: number[], end: number[], parents: number[][][]) => {
    if ((start[0] === end[0] && start[1] === end[1]) || (end[0] === -1 && end[1] === -1)) {
        console.log(start);
    } else {
        getPath(start, parents[end[0]][end[1]], parents);
        console.log(end);
    }
};

const shortestPath = (g: number[][], start: number[], end: number[]) => {
    const visited: boolean[][] = g.map((row) => row.map((v) => false));
    const parents = g.map((row) => row.map((v) => [-1, -1]));
    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];
    const row = g.length,
        col = g[0].length;
    const queue = [start];
    while (queue.length) {
        const [i, j] = queue.shift()!;
        visited[i][j] = true;
        for (let i = 0; i < directions.length; i++) {
            const nexti = i + directions[i][0],
                nextj = j + directions[i][1];
            if (nexti >= 0 && nexti < row && nextj >= 0 && nextj < col) {
                if (visited[nexti][nextj]) continue;
                queue.push([nexti, nextj]);
                parents[nexti][nextj] = [i, j];
            }
        }
    }
    getPath(start, end, parents);
};

shortestPath(inputGraphMatrix, [0, 8], [9, 1]);
