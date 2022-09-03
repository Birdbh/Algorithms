let arr = [12,6,2,42,1];

function heapsort(heap, heapSize){

    for (let i = Math.floor(heapSize / 2 - 1); i >= 0; i--){
        heapify(heap, heapSize, i);
    }

    for (let i = heapSize - 1; i > 0; i--){

        [heap[0], heap[i]] = [heap[i], heap[0]];

        heapify(heap, i - 1, 0);
    }

    constructBinaryTree(heap);
}

function heapify(heap, heapSize, node){

    //This is the current index of interest
    let parentIndex = node;

    //These the the indexes of both children
    let leftChildIndex = 2*node + 1;
    let rightChildIndex = 2*node + 2;

    //If the leftChild exists && is greaterthan the parent value is less than thechild value

    if (leftChildIndex < heapSize && heap[leftChildIndex] > heap[parentIndex]){

        parentIndex = leftChildIndex;

    }


    //If the leftChild exists && is greaterthan the parent value is less than thechild value
    if (leftChildIndex < heapSize && heap[rightChildIndex] > heap[parentIndex]){

        parentIndex = rightChildIndex;

    }


    //Only if the parent and child have been swapped
    if(parentIndex != node) {

        [heap[node], heap[parentIndex]] = [heap[[parentIndex]], heap[node]];

        //Recursivly run heapify again on all sub-trees made from this heap change
        heapify(heap, heapSize, parentIndex);
    }
}

window.onload = function(){
    heapsort(arr, arr.length);
}