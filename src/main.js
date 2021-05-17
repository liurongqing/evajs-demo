import { resource, RESOURCE_TYPE } from '@eva/eva.js';
import { Game, GameObject } from '@eva/eva.js';
import { RendererSystem } from '@eva/plugin-renderer';
import { Img, ImgSystem } from '@eva/plugin-renderer-img';

resource.addResource([
  {
    name: 'image1',
    type: RESOURCE_TYPE,
    src: {
      image: {
        type: 'png',
        url: 'https://gw.alicdn.com/tfs/TB1DNzoOvb2gK0jSZK9XXaEgFXa-658-1152.webp',
      },
    },
    preload: true,
  },
  {
    name: 'image2',
    type: RESOURCE_TYPE,
    src: {
      image: {
        type: 'png',
        url: 'https://gw.alicdn.com/tfs/TB15Upxqk9l0K4jSZFKXXXFjpXa-750-1624.jpg',
      },
    },
    preload: true,
  },
]);

const renderSystem = new RendererSystem({
  canvas: document.querySelector('#canvas'),
  width: 750,
  height: 1000,
  transparent: false,
  resolution: Window.devicePixelRatio / 2,
  preventScroll: false,
  renderType: 0,
});

const game = new Game({
  frameRate: 40,
  autoStart: true,
  systems: [renderSystem],
});

game.addSystem(new ImgSystem());

const gameObject = new GameObject('gameObj1', {
  size: {
    width: 658,
    height: 1152,
  },
});

const img = new Img({ resource: 'image1' });
gameObject.addComponent(img);

game.scene.addChild(gameObject);
