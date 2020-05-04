export default class TutorialScene extends Phaser.Scene { 
    
    button0Deg : Phaser.GameObjects.Image;
    button90Deg : Phaser.GameObjects.Image;
    button180Deg : Phaser.GameObjects.Image;
    button270Deg : Phaser.GameObjects.Image;
    submitButton : Phaser.GameObjects.Image;
    roatePipe : Phaser.GameObjects.Image;
    sampleQuestion : Phaser.GameObjects.Image;
    roateDegree : integer;
    btn0DegClicked : boolean;
    btn90DegClicked : boolean;
    btn180DegClicked : boolean;
    btn270DegClicked : boolean;
    answer: integer;
    instructions;
    hasDoneTutorial : boolean;

    constructor() {
      super({ key: 'TutorialScene' });
    }
    init(data)
    {
        this.hasDoneTutorial = data.hasDoneTutorial; /*Get data passed to this scene */   
    }

    create() {    
        console.log("tutorial");
        this.answer = 0;
        this.btn0DegClicked = false;
        this.btn90DegClicked = false;
        this.btn180DegClicked = false;
        this.btn270DegClicked = false;

        this.instructions = this.add.text(this.scale.width / 100 , 20, "Click 0, 90, 180, 270", {fill : "blue" });
        this.add.text(this.scale.width / 2 - 50 , 5, "Tutorial", {fill : "purple" });

        this.roatePipe = this.add.image(this.scale.width / 2 - 18, this.scale.height / 2 + 110, "pipeWithRing");
        this.roatePipe.setScale(.1); 
        
        this.button0Deg = this.add.image(15, this.scale.height / 2 + 110, "zeroDegreeButton");
        this.button0Deg.setScale(.5);
        this.button0Deg.setInteractive();
        
        this.button90Deg = this.add.image(60 , this.scale.height / 2 + 110 , "ninetyDegreeButton");
        this.button90Deg.setScale(.48);
        this.button90Deg.setInteractive();

        this.button180Deg = this.add.image(this.scale.width - 90, this.scale.height /2 + 110, 'oneEightyDegreeButton');
        this.button180Deg.setScale(.48);
        this.button180Deg.setInteractive();

        this.button270Deg = this.add.image(this.scale.width - 30, this.scale.height /2 + 110, 'twoSeventyDegreeButton');
        this.button270Deg.setScale(.48);
        this.button270Deg.setInteractive();

        this.button0Deg.on('pointerdown', () => {this.roatePipe.angle = 0, this.btn0DegClicked = true, this.buttonDown(),
            this.roateDegree = 0; console.log(this.roateDegree, this.btn0DegClicked) } );
        this.button90Deg.on('pointerdown', () => {this.roatePipe.angle = 90, this.btn90DegClicked = true, this.buttonDown(),
            this.roateDegree = 90; console.log(this.roateDegree, this.btn90DegClicked) } );
        this.button180Deg.on('pointerdown', () => {this.roatePipe.angle = 180, this.btn180DegClicked = true, this.buttonDown(),
            this.roateDegree = 180; console.log(this.roateDegree, this.btn180DegClicked) } );
        this.button270Deg.on('pointerdown', () => {this.roatePipe.angle = 270, this.btn270DegClicked = true, this.buttonDown(),
            this.roateDegree = 270; console.log(this.roateDegree, this.btn270DegClicked) } );

        
        
  }
  
  buttonDown(){
    if ( this.btn0DegClicked && this.btn90DegClicked && this.btn180DegClicked && this.btn270DegClicked ) {
        this.sampleQuestion = this.add.image(0,0 , "sampleQuestion");
        this.instructions.destroy();
        this.sampleQuestion.setOrigin(0, 0);
        this.submitButton = this.add.image(this.scale.width/2, this.scale.height /2 + 50, 'submitButton');
        this.submitButton.setScale(.2);
        this.submitButton.setInteractive(); 
        this.submitButton.on('pointerdown', () => this.submit() );
        this.add.text(this.scale.width / 100 , 20, "Line up the red sides of", {fontsize:'5px',fill : "red" });
        this.add.text(this.scale.width / 100 , 35, "the pipe and click submit", {fontsize:'5px',fill : "red" });
    }
}  
    submit(){
        if (this.roateDegree == this.answer){
            this.scene.start('SelectionScene', {hasDoneTutorial: true} )
            }
        
    }
   
  }
