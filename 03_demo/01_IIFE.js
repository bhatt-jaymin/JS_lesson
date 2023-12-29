// Immidiately Invoke  Functions Expression (IIFE)

(function startDBConnection(){  // Named IIFE
    console.log(`DB Connection in Process`);
})();


(()=>{ // Simple IIFE
    console.log(`DB Started Successfully..!`);
})();

// ()() Here,
// () first colon is function defination
// () second colon is function execution

