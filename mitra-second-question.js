const axios = require("axios");
const URL = "https://api.miconnexdev.com/test/"

const allChildren = [];

async function getItem(id) {
    console.log("Requesting data from id ", id)
    return axios.get(URL + String(id))
}

async function loadChildren(item) {
    item.filhos = []

    console.log(item)

    for(let i = 0; i < item.children.length; i++) {
        allChildren.push(item.children[i]); // add each chlid to array
        const response = await getItem(item.children[i])
        const child = response.data
        item.filhos.push(child)
        await loadChildren(child)
    }
}

async function init() {
    const response = await getItem(1)
    const tree = response.data

    await loadChildren(tree);

    console.log('######### All childrens #########');
    console.log(allChildren);

    console.log('######### Average value of all parent/children int the tree #########')
    console.log(allChildren.reduce((a,b) => a+b)/allChildren.length);
}

module.exports = {
    init
}