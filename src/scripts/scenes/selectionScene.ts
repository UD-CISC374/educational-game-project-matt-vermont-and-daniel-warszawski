export default class SelectionScene extends Phaser.Scene {
   // private exampleObject: ExampleObject;
    private background;
    data;
    ship1;
    buttonLevel1 : Phaser.GameObjects.Image;
    buttonLevel2 : Phaser.GameObjects.Image;
    buttonLevel3 : Phaser.GameObjects.Image;
    buttonTutorial : Phaser.GameObjects.Image;
    hasDoneTutorial: boolean;
    constructor() {
      super({ key: 'SelectionScene' });
    }

    init(data)
    {
        this.hasDoneTutorial = data.hasDoneTutorial; /*Get data passed to this scene */   
    }

    create() {    
    console.log("Selection");
    this.background = this.add.image(0, 0, "background");
    this.background.setOrigin(0, 0);
    this.data = this.cache.json.get('questions');
    this.add.text(70, 40, "Angles Master");
   // this.ship1 = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "ship");
   if (!this.hasDoneTutorial){ /*if have not done tutorial */
    this.buttonTutorial = this.add.image(this.scale.width / 2, this.scale.height / 2 + 75, "tutorialButton");
    this.buttonTutorial.setScale(.6);
    this.buttonTutorial.setInteractive();
    this.buttonTutorial.on('pointerover', () => {this.buttonTutorial.alpha = .5} );
    this.buttonTutorial.on('pointerout', () => {this.buttonTutorial.alpha = 1} );
    this.buttonTutorial.on('pointerdown', () => this.scene.start('TutorialScene', {hasDoneTutorial: false} ) ); 
   }
   else {
    this.add.text(70, this.scale.height / 2, "Select Level");
    this.buttonLevel1 = this.add.image(this.scale.width / 2, this.scale.height / 2 + 75, "buttonLevel1");
    this.buttonLevel1.setScale(.25);
    this.buttonLevel1.setInteractive();
    this.buttonLevel1.on('pointerover', () => {this.buttonLevel1.alpha = .5} );
    this.buttonLevel1.on('pointerout', () => {this.buttonLevel1.alpha = 1} );
    this.buttonLevel1.on('pointerdown', () => this.scene.start('Level1Scene', {currentQuestionIndex: 0, numCorrect:0}) );

  }   
}
  
    update() {
    }
  }
