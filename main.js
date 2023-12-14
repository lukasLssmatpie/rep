quickDrawDataset=["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple","arm","asparagus",
                      "axe","backpack","banana","bandage","barn","baseball","baseball bat","basket","basketball","bat","bathtub","beach","bear",
                      "beard","bed","bee","belt","bench","bicycle","binoculars","bird","birthday cake","blackberry","blueberry","book","boomerang",
                      "bottlecap","bowtie","bracelet","brain","bread","bridge","broccoli","broom","bucket","bulldozer","bus","bush","butterfly",
                      "cactus","cake","calculator","calendar","camel","camera","camouflage","campfire","candle","cannon","canoe","car","carrot",
                      "castle","cat","ceiling fan","cello","cell phone","chair","chandelier","church","circle","clarinet","clock","cloud","coffee cup",
                      "compass","computer","cookie","cooler","couch","cow","crab","crayon","crocodile","crown","cruise ship","cup","diamond","dishwasher",
                      "diving board","dog","dolphin","donut","door","dragon","dresser","drill","drums","duck","dumbbell","ear", "elbow","elephant",
                      "envelope","eraser","eye","eyeglasses","face","fan","feather","fence","finger","fire hydrant","fireplace","firetruck","fish",
                      "flamingo","flashlight","flip flops","floor lamp","flower","flying saucer","foot","fork","frog","frying pan","garden","garden hose",
                      "giraffe","goatee","golf club","grapes","grass","guitar","hamburger","hammer","hand","harp","hat","headphones","hedgehog","helicopter",
                      "helmet","hexagon","hockey puck","hockey stick","horse","hospital","hot air balloon","hot dog","hot tub","hourglass","house",
                      "house plant","hurricane","ice cream","jacket","jail","kangaroo","key","keyboard","knee","knife","ladder","lantern","laptop",
                      "leaf","leg","light bulb","lighter","lighthouse","lightning","line","lion","lipstick","lobster","lollipop","mailbox","map","marker",
                      "matches","megaphone","mermaid","microphone","microwave","monkey","moon","mosquito","motorbike","mountain","mouse","moustache","mouth",
                      "mug","mushroom","nail","necklace","nose","ocean","octagon","octopus","onion","oven","owl","paintbrush","paint can","palm tree","panda",
                      "pants","paper clip","parachute","parrot","passport","peanut","pear","peas","pencil","penguin","piano","pickup truck","picture frame",
                      "pig","pillow","pineapple","pizza","pliers","police car","pond","pool","popsicle","postcard","potato","power outlet","purse","rabbit",
                      "raccoon","radio","rain","rainbow","rake","remote control","rhinoceros","rifle","river","roller coaster","rollerskates","sailboat",
                      "sandwich","saw","saxophone","school bus","scissors","scorpion","screwdriver","sea turtle","see saw","shark","sheep","shoe","shorts",
                      "shovel","sink","skateboard","skull","skyscraper","sleeping bag","smiley face","snail","snake","snorkel","snowflake","snowman",
                      "soccer ball","sock","speedboat","spider","spoon","spreadsheet","square","squiggle","squirrel","stairs","star","steak","stereo",
                      "stethoscope","stitches","stop sign","stove","strawberry","streetlight","string bean","submarine","suitcase","sun","swan","sweater",
                      "swingset","sword","syringe","table","teapot","teddy-bear","telephone","television","tennis racquet","tent","The Eiffel Tower",
                      "The Great Wall of China","The Mona Lisa","tiger","toaster","toe","toilet","tooth","toothbrush","toothpaste","tornado","tractor",
                      "traffic light","train","tree","triangle","trombone","truck","trumpet","tshirt","umbrella","underwear","van","vase","violin",
                      "washing machine","watermelon","waterslide","whale","wheel","windmill","wine bottle","wine glass","wristwatch","yoga","zebra","zigzag"]

randomNumber = Math.floor((Math.random() * quickDrawDataset.length) + 1);
let quickDrawDataset = ['...']; // Seu conjunto de dados aqui

let sketch = ''; // Variável para armazenar o esboço a ser desenhado
let drawSketch = ''; // Variável para armazenar o esboço desenhado
let score = 0;
let timerCounter = 0;
let timerCheck = '';
let answerHolder = '';

function updateCanvas() {
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');
    
    // Definir o fundo como branco
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Gerar um número aleatório para selecionar um esboço
    let randomNumber = Math.floor(Math.random() * quickDrawDataset.length);
    console.log(randomNumber);
    sketch = quickDrawDataset[randomNumber];
    
    // Atualizar o elemento HTML com o esboço
    // Aqui você precisará de lógica para exibir o sketch no canvas ou outro elemento na página HTML
}

function setup() {
    // Código para criar a tela com 280x280 e colocá-la no centro
    // Definir o fundo como branco
}

function draw() {
    checkSketch();

    if (drawSketch === sketch) {
        answerHolder = 'set';
        score++;
        document.getElementById('score').textContent = score;
    }
}

function checkSketch() {
    timerCounter++;
    document.getElementById('timer').textContent = timerCounter;
    console.log(timerCounter);

    if (timerCounter > 400) {
        timerCounter = 0;
        timerCheck = 'completed';
    }

    if (timerCheck === 'completed' || answerHolder === 'set') {
        timerCheck = '';
        answerHolder = '';
        updateCanvas();
    }
}

// Chamadas de função para iniciar o processo
updateCanvas();
setInterval(draw, 100); // Isso vai chamar a função draw a cada 100ms
