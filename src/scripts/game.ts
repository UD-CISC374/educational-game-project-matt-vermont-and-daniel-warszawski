import 'phaser';
import MainScene from './scenes/mainScene';
import PreloadScene from './scenes/preloadScene';
import SelectionScene from './scenes/selectionScene';
import Level1Scene from './scenes/level1Scene';
import Level2Scene from './scenes/level2Scene';
import Level3Scene from './scenes/level3Scene';
import CorrectScreen from './scenes/correctScreen';
import WrongScreen from './scenes/wrongScreen';
import EndScreen from './scenes/endScreen';
import TutorialScene from './scenes/tutorialScene';

import GameConfig = Phaser.Types.Core.GameConfig;

const DEFAULT_WIDTH = 256; 
const DEFAULT_HEIGHT = 272; 


const config: GameConfig = {
    backgroundColor: '#ffffff',
    scale: {
        parent: 'phaser-game',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT
    },
    scene: [PreloadScene, TutorialScene, SelectionScene, Level1Scene, Level2Scene, Level3Scene, 
            CorrectScreen, WrongScreen, EndScreen],//MainScene],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 400 }
        }
    }
};

window.addEventListener('load', () => {
    window['game'] = new Phaser.Game(config);
});

//
