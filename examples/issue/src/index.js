const render = () => {
    document.getElementById('issue-dom').innerHTML="hello"
};


export const bootstrap = () => {
    return Promise.resolve();
}

export const mount = () => {
    render();
    return Promise.resolve();
}

export const unmount = () => {
    return Promise.resolve();
}

console.log(window, '777')

// if (!__POWERED_BY_QIANKUN__) {
//   render();
// }

