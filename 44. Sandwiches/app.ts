function make_sandwich(...items:string[]){
    console.log(`Making a sandwich with: ${items.join(',')}.`);
}

make_sandwich("ham","cheese")
make_sandwich("turkey", "letuce", "tomato", "ketchup")
make_sandwich("avocado", "sprouts", "mustard", "mayo")