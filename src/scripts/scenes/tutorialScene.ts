export default class TutorialScene extends Phaser.Scene { 
    
    button0Deg : Phaser.GameObjects.Image;
    button90Deg : Phaser.GameObjects.Image;
    button180Deg : Phaser.GameObjects.Image;
    button270Deg : Phaser.GameObjects.Image;
    submitButton : Phaser.GameObjects.Image;
    rotatePipe : Phaser.GameObjects.Image;
    sampleQuestion : Phaser.GameObjects.Image;
    hint : Phaser.GameObjects.Image;
    back : Phaser.GameObjects.Image;
    close : Phaser.GameObjects.Image;
    text1 : Phaser.GameObjects.Text;
    msgBox : Phaser.GameObjects.Group;
    rotateDegree : integer;
    btn0DegClicked : boolean;
    btn90DegClicked : boolean;
    btn180DegClicked : boolean;
    btn270DegClicked : boolean;
    allBUttonsClicked : boolean;
    answer: integer;
    counter : integer;
    instructions;
    hasDoneTutorial : boolean;
    incorrectCounter: integer = 0;
    rotatedAngle: integer = 0;

    constructor() {
      super({ key: 'TutorialScene' });
    }
    init(data)
    {
        this.hasDoneTutorial = data.hasDoneTutorial; /*Get data passed to this scene */   
    }

    create() {    
        console.log("tutorial");
        this.hasDoneTutorial = false;
        this.answer = 0;
        this.counter = 0;
        this.btn0DegClicked = false;
        this.btn90DegClicked = false;
        this.btn180DegClicked = false;
        this.btn270DegClicked = false;

        this.instructions = this.add.text(25 , 90, "Click 0, 90, 180, 270", {fill : "blue" });
        this.add.text(this.scale.width / 2 - 50 , 5, "Tutorial", {fill : "purple" });

        this.rotatePipe = this.add.image(this.scale.width / 2 - 18, this.scale.height / 2 + 10, "pipeWithRing");
        this.rotatePipe.setScale(.1); 
        
        this.hint = this.add.image(10, this.scale.height / 2 - 60, 'hint');
        this.hint.setScale(.40);
        this.hint.setInteractive();
        this.hint.on('pointerdown', () => this.giveHint("Click each button below", this.scale.width * .7, this.scale.height * .5));

        this.button0Deg = this.add.image(15, this.scale.height / 2 + 110, "zeroDegreeButton");
        this.button0Deg.setScale(.5);
        this.button0Deg.setInteractive();
        
        this.button90Deg = this.add.image(75 , this.scale.height / 2 + 110 , "ninetyDegreeButton");
        this.button90Deg.setScale(.48);
        this.button90Deg.setInteractive();

        this.button180Deg = this.add.image(this.scale.width - 105, this.scale.height /2 + 110, 'oneEightyDegreeButton');
        this.button180Deg.setScale(.48);
        this.button180Deg.setInteractive();

        this.button270Deg = this.add.image(this.scale.width - 30, this.scale.height /2 + 110, 'twoSeventyDegreeButton');
        this.button270Deg.setScale(.48);
        this.button270Deg.setInteractive();

        this.hint.on('pointerover', () => {this.hint.alpha = .5} );
        this.hint.on('pointerout', () => {this.hint.alpha = 1} );

        //this.button0Deg.alpha = .5;
        this.button0Deg.on('pointerover', () => {this.button0Deg.alpha = .5} );
        this.button0Deg.on('pointerout', () => {this.button0Deg.alpha = 1} );


        this.button90Deg.on('pointerover', () => {this.button90Deg.alpha = .5} );
        this.button90Deg.on('pointerout', () => {this.button90Deg.alpha = 1} );

        this.button180Deg.on('pointerover', () => {this.button180Deg.alpha = .5} );
        this.button180Deg.on('pointerout', () => {this.button180Deg.alpha = 1} );
        
        this.button270Deg.on('pointerover', () => {this.button270Deg.alpha = .5} );
        this.button270Deg.on('pointerout', () => {this.button270Deg.alpha = 1} );
       

        this.button0Deg.on('pointerdown', () => {this.rotatedAngle = 0, this.rotatePipe.angle = 0, this.btn0DegClicked = true, this.buttonDown(),
            this.rotateDegree = 0; console.log(this.rotateDegree, this.btn0DegClicked) } );
        this.button90Deg.on('pointerdown', () => {this.rotatedAngle = 90,this.rotatePipe.angle = 90, this.btn90DegClicked = true, this.buttonDown(),
            this.rotateDegree = 90; console.log(this.rotateDegree, this.btn90DegClicked) } );
        this.button180Deg.on('pointerdown', () => {this.rotatedAngle = 180, this.rotatePipe.angle = 180, this.btn180DegClicked = true, this.buttonDown(),
            this.rotateDegree = 180; console.log(this.rotateDegree, this.btn180DegClicked) } );
        this.button270Deg.on('pointerdown', () => {this.rotatedAngle = 270, this.rotatePipe.angle = 270, this.btn270DegClicked = true, this.buttonDown(),
            this.rotateDegree = 270; console.log(this.rotateDegree, this.btn270DegClicked) } );     
  }
  
  
  buttonDown(){
    if ( this.btn0DegClicked && this.btn90DegClicked && this.btn180DegClicked && this.btn270DegClicked ) {
        if ( this.hasDoneTutorial == false ) {
        this.sampleQuestion = this.add.image(0,0 , "sampleQuestion");
        this.hint = this.add.image(10, this.scale.height / 2 - 60, 'hint');
        this.hint.setScale(.40);
        this.hint.setInteractive();
        this.hint.on('pointerover', () => {this.hint.alpha = .5} );
        this.hint.on('pointerout', () => {this.hint.alpha = 1} );
        this.hint.on('pointerdown', () => this.giveHint("Click the 0 button", this.scale.width * .7, this.scale.height * .5));
        this.instructions.destroy();
        this.sampleQuestion.setOrigin(0, 0);
        this.submitButton = this.add.image(this.scale.width/2, this.scale.height /2 + 50, 'submitButton');
        this.submitButton.setScale(.2);
        this.submitButton.setInteractive(); 
        this.submitButton.on('pointerover', () => {this.submitButton.alpha = .5} );
        this.submitButton.on('pointerout', () => {this.submitButton.alpha = 1} );
        this.submitButton.on('pointerdown', () => this.submit() );
        this.add.text(this.scale.width / 100 , 20, "Line up the red sides of", {fontsize:'5px',fill : "red" });
        this.add.text(this.scale.width / 100 , 35, "the pipe and click submit", {fontsize:'5px',fill : "red" });
        this.hasDoneTutorial = true;
        this.rotatePipe.destroy();
        this.rotatePipe = this.add.image(this.scale.width - 85, this.scale.height / 2 - 25, "pipeWithRing");
        this.rotatePipe.angle = this.rotatedAngle;
        this.rotatePipe.setScale(.087); 
        }
    }
}  
    submit(){
        if (this.rotateDegree == this.answer){
            this.scene.start('SelectionScene', {hasDoneTutorial: true} )
            }
        else {
            if (this.incorrectCounter == 0){
            this.add.text(this.scale.width/2 - 40 , this.scale.height - 200, "Incorrect", {fontsize:'5px',fill : "red" });
            this.add.text(this.scale.width/2 - 40 , this.scale.height - 200, "Incorrect", {fontsize:'5px',fill : "red" });
            this.add.text(this.scale.width/2 - 40 , this.scale.height - 200, "Incorrect", {fontsize:'5px',fill : "red" });
            this.add.text(this.scale.width/2 - 40 , this.scale.height - 200, "Incorrect", {fontsize:'5px',fill : "red" });
            this.add.text(this.scale.width/2 - 40 , this.scale.height - 200, "Incorrect", {fontsize:'5px',fill : "red" });
            this.incorrectCounter = 1;
            }
        }
        
    }

    giveHint(text, w = 300, h = 300){
        if(this.counter % 2 == 0){

            if (this.msgBox) {
                this.msgBox.destroy();
            }
            this.msgBox = this.add.group();
            this.back = this.add.image(0, 0, "hintBack");
            this.back.setScale(.1);
            this.close = this.add.image(0, 0, "close");
            this.close.setScale(.3);
            this.text1 = this.add.text(0, 0, text, {fill : "green"});

            this.back.width = w;
            this.back.height = h;

            this.msgBox.add(this.back);
            this.msgBox.add(this.close);
            this.msgBox.add(this.text1);

            this.close.x = this.back.width / 2 - this.close.width / 2;
            this.close.y = this.back.height - this.close.height;
            this.close.setInteractive();
            this.close.on('pointerdown', () => this.hideBox());

            this.text1.x = this.button0Deg.x - 10;
            this.text1.y = this.button0Deg.y - 35;

        
        }
        else{
            this.text1.text = "";
        }
        this.counter += 1;        
    }

    hideBox() {
        this.msgBox.destroy();
    }
   
  }
