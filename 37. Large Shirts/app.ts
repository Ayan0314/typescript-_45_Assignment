// Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
//  Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


function making_shirt (size: string ="Large", message: string="I Love Typescript" ){
    console.log(`Making a ${size} t-shirt with the message "${message}" print on it.`);
};
making_shirt(); // default large and message
making_shirt("medium") // Default message , medium size
making_shirt("small", "Dive into Coding")
