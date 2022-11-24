const graph = new Map<string, Array<string>>();

const node1 = 'node1';
const node1_adjancecy = ['node2', 'node3', 'node4'];

const node2 = 'node2';
const node2_adjancecy = ['node5'];

const node3 = 'node3';
const node3_adjancecy = ['node6', 'node7'];

const node4 = 'node4';
const node4_adjancecy: string[] = [];

const node5 = 'node5';
const node5_adjancecy: string[] = ['node8', 'node9'];

const node6 = 'node6';
const node6_adjancecy: string[] = [];

const node7 = 'node7';
const node7_adjancecy: string[] = [];

const node8 = 'node8';
const node8_adjancecy: string[] = [];

const node9 = 'node8';
const node9_adjancecy: string[] = [];

graph.set(node1, node1_adjancecy);
graph.set(node2, node2_adjancecy);
graph.set(node3, node3_adjancecy);
graph.set(node4, node4_adjancecy);
graph.set(node5, node5_adjancecy);
graph.set(node6, node6_adjancecy);
graph.set(node7, node7_adjancecy);
graph.set(node8, node8_adjancecy);
graph.set(node9, node9_adjancecy);

function cycleCheck(graph: Map<string, string[]>) {
    let ans: boolean = false;
    const visited = new Map<string, boolean>();
    const mark = new Map<string, boolean>();

    graph.forEach((_, key) => {
        if (ans) return;
        if (visited.has(key)) return;
        if (dfs(key, graph, visited, mark)) {
            ans = true;
        }
    });
    return ans;
}

function dfs(v: string, edges: Map<string, string[]>, visited: Map<string, boolean>, mark: Map<string, boolean>): boolean {
    visited.set(v, true);
    mark.set(v, true);
    // console.log(mark);
    const edge = edges.get(v);
    if (edge && edge.length) {
        for (let i = 0; i < edge.length; i++) {
            if (mark.has(edge[i])) return true;
            if (dfs(edge[i], edges, visited, mark)) return true;
        }
    }
    mark.delete(v);
    return false;
}

console.log(cycleCheck(graph));
