import * as THREE from './three.js-master/build/three.module.js';
import {
    OrbitControls
} from './three.js-master/examples/jsm/controls/OrbitControls.js';
import {
    GUI,
} from './three.js-master/examples/jsm/libs/dat.gui.module.js';
import {
    GLTFLoader
} from './three.js-master/examples/jsm/loaders/GLTFLoader.js';

let threeJSContainer;
let container, controls;
let camera, scene, renderer, mixer;
let lightA, lightH, lightD;

let targetCamera;
let onMouseMoveLogoRotation = true;

let getColorHex;

var clock = new THREE.Clock();

const colorChange = function (getColorTheme) {
    const colorTo = new THREE.Color(getColorTheme);
    // let colorTransition = 
    gsap.to(lightD.color, {
        r: colorTo.r,
        g: colorTo.g,
        b: colorTo.b,
        duration: 0.5
    });

    // console.log(getColorTheme);
    $(".threeJS__container").css("background", getColorTheme);
};

const DecreaseLogoSize = function () {
    gsap.to(camera, {
        duration: 4,
        zoom: 0.7,
        ease: "sine.out",
        onUpdate: function () {
            camera.updateProjectionMatrix();
        }
    });

    gsap.to(camera.position, {
        duration: 4,
        x: 29,
        y: 263,
        z: 404,
        onUpdate: function () {
            update();
        }
    })

    gsap.to(controls.target, {
        duration: 4,
        x: -299,
        y: -252,
        z: -486,
        ease: "sine.out",
        onUpdate: function () {
            controls.update();
        }
    });
};


//export because of module!!! big brain time https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules


const onBeginning = function () {
    gsap.to(camera, {
        duration: 4,
        fov: 27,
        ease: "sine.out",
        onUpdate: function () {
            camera.updateProjectionMatrix();
        }
    });

    gsap.to(camera.position, {
        duration: 4,
        x: -58,
        y: 130,
        z: -73,
        onUpdate: function () {
            update();
        }
    })

    gsap.to(controls.target, {
        duration: 4,
        x: -10,
        y: 100,
        z: -26,
        ease: "sine.out",
        onUpdate: function () {
            controls.update();
        }
    });
}


const gotoItemshop = function () {
    gsap.to(lightD.position, {
        duration: 4,
        easy: "sine.out",
        x: -254,
        y: 72,
        z: -266
    });
    gsap.to(camera, {
        duration: 4,
        fov: 25,
        ease: "sine.out",
        onUpdate: function () {
            camera.updateProjectionMatrix();
        }
    });

    gsap.to(camera.position, {
        duration: 4,
        x: -26,
        y: 83,
        z: -58,
        onUpdate: function () {
            update();
        }
    });

    gsap.to(controls.target, {
        duration: 4,
        x: -9,
        y: 64,
        z: -23,
        ease: "sine.out",
        onUpdate: function () {
            controls.update();
        }
    });
};

const gotoGameBar = function () {
    gsap.to(lightD.position, {
        duration: 4,
        easy: "sine.out",
        x: -378,
        y: 94,
        z: -299
    });

    gsap.to(camera, {
        duration: 4,
        fov: 12,
        ease: "sine.out",
        onUpdate: function () {
            camera.updateProjectionMatrix();
        }
    });

    gsap.to(camera.position, {
        duration: 4,
        x: -64,
        y: 52,
        z: -101,
        onUpdate: function () {
            update();
        }
    })

    gsap.to(controls.target, {
        duration: 4,
        x: -10,
        y: 42,
        z: -23,
        ease: "sine.out",
        onUpdate: function () {
            controls.update();
        }
    });
}


const gotoYourClass = function () {
    gsap.to(lightD.position, {
        duration: 4,
        easy: "sine.out",
        x: -86,
        y: 72,
        z: -187
    });

    gsap.to(camera, {
        duration: 4,
        fov: 14,
        ease: "sine.out",
        onUpdate: function () {
            camera.updateProjectionMatrix();
        }
    });

    gsap.to(camera.position, {
        duration: 4,
        x: -73,
        y: 36,
        z: -104,
        onUpdate: function () {
            update();
        }
    })

    gsap.to(controls.target, {
        duration: 4,
        x: -10,
        y: 22,
        z: -26,
        ease: "sine.out",
        onUpdate: function () {
            controls.update();
        }
    });
}


const gotoLibrary = function () {
    gsap.to(lightD.position, {
        duration: 4,
        easy: "sine.out",
        x: -151,
        y: 5,
        z: -101
    });

    gsap.to(camera, {
        duration: 4,
        fov: 8,
        ease: "sine.out",
        onUpdate: function () {
            camera.updateProjectionMatrix();
        }
    });

    gsap.to(camera.position, {
        duration: 4,
        x: -151,
        y: 5,
        z: -101,
        onUpdate: function () {
            update();
        }
    })

    gsap.to(controls.target, {
        duration: 4,
        x: -10,
        y: 1,
        z: -11,
        ease: "sine.out",
        onUpdate: function () {
            controls.update();
        }
    });
}


const gotoDefault = function () {
    // gsap.to(lightD.position, {
    //     duration: 4,
    //     easy: "sine.out",
    //     x: -119,
    //     y: 36,
    //     z: -164
    // });

    gsap.to(camera, {
        duration: 4,
        fov: 27,
        ease: "sine.out",
        onUpdate: function () {
            camera.updateProjectionMatrix();
        }
    });

    gsap.to(camera.position, {
        duration: 4,
        x: -58,
        y: 130,
        z: -73,
        onUpdate: function () {
            update();
        }
    })

    gsap.to(controls.target, {
        duration: 4,
        x: -10,
        y: 51,
        z: -26,
        ease: "sine.out",
        onUpdate: function () {
            controls.update();
        }
    });
}

const gotoMine = function () {
    //    colorChange()
    gsap.to(lightD.position, {
        duration: 4,
        easy: "sine.out",
        x: -119,
        y: 36,
        z: -164
    });

    gsap.to(camera, {
        duration: 4,
        fov: 12,
        ease: "sine.out",
        onUpdate: function () {
            camera.updateProjectionMatrix();
        }
    });

    gsap.to(camera.position, {
        duration: 4,
        x: -117,
        y: 24,
        z: -101,
        onUpdate: function () {
            update();
        }
    })

    gsap.to(controls.target, {
        duration: 4,
        x: -10,
        y: -23,
        z: -23,
        ease: "sine.out",
        onUpdate: function () {
            controls.update();
        }
    });
}

const LeftLogoPosition = function () {
    gsap.to(camera, {
        duration: 4,
        ease: "sine.out",
        onUpdate: function () {
            camera.updateProjectionMatrix();
        }
    });

    gsap.to(camera.position, {
        duration: 4,
        x: 56,
        y: 212,
        z: 399,
        onUpdate: function () {
            update();
        }
    })

    gsap.to(controls.target, {
        duration: 4,
        x: 462,
        y: -69,
        z: -319,
        ease: "sine.out",
        onUpdate: function () {
            controls.update();
        }
    });
};
// window.DecreaseLogoSize = DecreaseLogoSize; //window, żeby móc odwołać się w konsoli. Tylko do debugowania!
// window.IncreaseLogoSize = IncreaseLogoSize;


init();
animate();

let activeSection;

function init() {

    container = document.createElement('div');
    container.id = "threeJSContainer";
    container.classList.add('threeJS__container');
    threeJSContainer = document.getElementById('threeJSContainer');


    const loadingManager = new THREE.LoadingManager(() => {

        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('fade-out');

        // optional: remove loader from DOM via event listener
        loadingScreen.addEventListener('transitionend', onTransitionEnd);

    });

    document.body.appendChild(container);

    camera = new THREE.PerspectiveCamera(27, window.innerWidth / window.innerHeight, 1, 2000);
    // if (window.innerWidth <= 768) {
    //     camera.fov = 1;
    // }
    camera.position.set(-58, 130, -73);

    scene = new THREE.Scene();
    // scene.background = new THREE.Color(0x11131900);
    // scene.background = new THREE.Color(0xff0000);



    scene.fog = new THREE.Fog(0x111319, 300, 900);
    //responsywnosc z fog

    lightA = new THREE.AmbientLight(0xfffffe, 0.05);
    scene.add(lightA);

    lightH = new THREE.HemisphereLight(0xffffff, 0x111319, 0.8);
    lightH.position.set(0, 200, 0);
    scene.add(lightH);

    lightD = new THREE.DirectionalLight(0x111319, 2.07);
    lightD.position.set(220, 150, -250);
    lightD.castShadow = true;
    lightD.shadow.mapSize.width = 4096;
    lightD.shadow.mapSize.height = 4096;
    lightD.shadow.camera.top = 180;
    lightD.shadow.camera.bottom = -200;
    lightD.shadow.camera.left = -200;
    lightD.shadow.camera.right = 300;
    scene.add(lightD);

    // ground
    // var mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(2000, 2000), new THREE.MeshPhongMaterial({
    //     color: 0x111319,
    //     depthWrite: true
    // }));
    // //pi = 180 stopni
    // mesh.rotation.x = -Math.PI / 2;
    // // mesh.rotation.z = 0.5
    // mesh.receiveShadow = true;
    // scene.add(mesh);

    // var grid = new THREE.GridHelper(2000, 44, 0x000000, 0x000000);
    // grid.material.opacity = 0.15;
    // grid.material.transparent = true;
    // scene.add(grid);

    // model
    var loader = new GLTFLoader(loadingManager);
    loader.load('caly.glb', function (gltf) {

        gltf.scene.traverse(function (child) {

            if (child.isMesh) {

                child.castShadow = true;
                child.receiveShadow = true;

            }

        });

        scene.add(gltf.scene);
        // roughnessMipmapper.dispose();

        // gltf.scene.rotation.y = 22;
        // render();

    });

    // mesh.position.set(100, 100, 100);

    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });

    // renderer.setClearColor(0x000000, 0);
    renderer.setClearColor(0xffffff, 0);

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);


    controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(-10, 100, -26);



    // controls.rotation.z = 50;
    controls.update();
    controls.enabled = false; //blocking orbit controls

    targetCamera = new THREE.Vector3().copy(controls.target)

    window.addEventListener('resize', onWindowResize, false);

    gsap.registerPlugin(CustomEase);

    // let onBeginningScrollFlag = true;

    // if (window.pageYOffset < window.innerHeight / 3) {
    //     onBeginning();
    //     // colorChange('#FFFFFF');
    //     onBeginningScrollFlag = true;
    // } else if (window.pageYOffset >= window.innerHeight / 3 && onBeginningScrollFlag == true) {
    //     gotoDefault();
    //     onBeginningScrollFlag = false;
    // }


    // $('html').bind('mousewheel DOMMouseScroll', function (e) {
    //     // console.log('bingo');
    //     // $(window).scroll(function () {
    //     if (window.pageYOffset < window.innerHeight / 3) {
    //         onBeginning();
    //         // colorChange('#FFFFFF');
    //         $(".threeJS__container").css("background", "#FFFFFF00");
    //         onBeginningScrollFlag = true;
    //     } else if (window.pageYOffset >= window.innerHeight / 3 && onBeginningScrollFlag == true) {
    //         gotoDefault();
    //         onBeginningScrollFlag = false;
    //     }


    //     // activeSection = fullpage_api.getActiveSection().item;
    //     // console.log(activeSection);

    //     // });
    // });




    const buttonDecreaseLogo = {
        add: function () {
            DecreaseLogoSize();
        }
    }

    const buttonIncreaseLogo = {
        add: function () {
            IncreaseLogoSize()
        }
    }

    const buttonLower = {
        add: function () {
            goDown();
        }
    }


    function toggleMouseMove() {
        if (onMouseMoveLogoRotation == true) {
            onMouseMoveLogoRotation = false;
        } else {
            onMouseMoveLogoRotation = true;
        }
    }

    const buttonToggleMouseMove = {
        add: function () {
            toggleMouseMove();
        }
    }





    var gui = new GUI();

    var data = {
        color: lightA.color.getHex(),
        groundColor: lightH.groundColor.getHex(),
        skyColor: lightH.color.getHex(),
        color: lightD.color.getHex(),
        shadowMapSizeWidth: 4096,
        shadowMapSizeHeight: 4096,
        // backgroundColor: scene.background.color.getHex(),
        mapsEnabled: true
        //pobieramy tu te informacje co już są
    };



    //ambient//
    const lightFolder = gui.addFolder('THREE.Light');
    // gui.add(light, 'intensity', 0, 2, 0.01);
    lightFolder.addColor(data, 'color').onChange(() => {
        lightA.color.setHex(Number(data.color.toString().replace('#', '0x')));
    });
    lightFolder.add(lightA, 'intensity', 0, 4, 0.01);
    //ambient//


    //hemisphere
    const hemisphereLightFolder = gui.addFolder('THREE.HemisphereLight');
    hemisphereLightFolder.addColor(data, 'groundColor').onChange(() => {
        lightH.groundColor.setHex(Number(data.groundColor.toString().replace('#', '0x')));
    });
    hemisphereLightFolder.addColor(data, 'color').onChange(() => {
        lightH.color.setHex(Number(data.color.toString().replace('#', '0x')));
    });
    hemisphereLightFolder.add(lightH.position, "x", -200, 200, 1);
    hemisphereLightFolder.add(lightH.position, "y", -200, 200, 1);
    hemisphereLightFolder.add(lightH.position, "z", -200, 200, 1);
    hemisphereLightFolder.add(lightH, 'intensity', 0, 4, 0.01);
    //hemisphere


    //directionalLight
    const directionalLightFolder = gui.addFolder('THREE.DirectionalLight');
    directionalLightFolder.add(lightD.position, "x", -500, 500, 1);
    directionalLightFolder.add(lightD.position, "y", -500, 500, 1);
    directionalLightFolder.add(lightD.position, "z", -500, 500, 1);
    directionalLightFolder.add(lightD, 'intensity', 0, 4, 0.01)
    directionalLightFolder.addColor(data, 'color').onChange(() => {
        lightD.color.setHex(Number(data.color.toString().replace('#', '0x')));
    });
    directionalLightFolder.add(lightD.shadow.camera, "left", -300, 300, 1).onChange(() => lightD.shadow.camera.updateProjectionMatrix())
    directionalLightFolder.add(lightD.shadow.camera, "right", -300, 300, 1).onChange(() => lightD.shadow.camera.updateProjectionMatrix())
    directionalLightFolder.add(lightD.shadow.camera, "top", -300, 300, 1).onChange(() => lightD.shadow.camera.updateProjectionMatrix())
    directionalLightFolder.add(lightD.shadow.camera, "bottom", -300, 300, 1).onChange(() => lightD.shadow.camera.updateProjectionMatrix())
    directionalLightFolder.add(lightD.shadow.camera, "near", 0.1, 300).onChange(() => lightD.shadow.camera.updateProjectionMatrix())
    directionalLightFolder.add(lightD.shadow.camera, "far", 0.1, 300).onChange(() => lightD.shadow.camera.updateProjectionMatrix())
    directionalLightFolder.add(data, "shadowMapSizeWidth", [256, 512, 1024, 2048, 4096]).onChange(() => updateShadowMapSize())
    directionalLightFolder.add(data, "shadowMapSizeHeight", [256, 512, 1024, 2048, 4096]).onChange(() => updateShadowMapSize())
    //directionalLight







    gui.add(buttonLower, "add").name('go down');


    gui.add(buttonDecreaseLogo, "add").name('smaller logo gsap animation');
    gui.add(buttonIncreaseLogo, "add").name('bigger logo gsap animation');





    gui.add(scene.fog, 'near', 1, 1500).name('fog.near');
    gui.add(scene.fog, 'far', 1, 1500).name('fog.far');

    gui.add(camera.position, 'x', -720, 720).name('cameraPosition x');
    gui.add(camera.position, 'y', -720, 720).name('cameraPosition y');
    gui.add(camera.position, 'z', -720, 720).name('cameraPosition z');



    gui.add(camera, 'fov', 1, 120).onChange(camera.updateProjectionMatrix());

    gui.add(controls.target, 'x', -720, 720).name('controlsTarget x');
    gui.add(controls.target, 'y', -100, 100).name('controlsTarget y');
    gui.add(controls.target, 'z', -720, 720).name('controlsTarget z');
    gui.closed = true;






    // fullpage_api.setAllowScrolling(true);


    // fullpage_api.setAllowScrolling(true);

}


// new fullpage('#fullpage', {
//     // anchors: ['heroPage', '1stPage', '2ndPage', '3rdPage', '4thPage', '5thPage', '6thPage', '7thPage',
//     //     'lastPage'
//     // ],
//     autoScrolling: true,
//     onSlideLeave: function (section, origin, destination, direction) {
//         console.log("fullpage destination.item: " + destination.item);
//         console.log("fullpage origin: " + origin);
//         console.log("fullpage section: " + section);

//     }
//     // scrollHorizontally: true

// });



function onTransitionEnd(event) {

    event.target.remove();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}

function update() {
    controls.update();
    camera.updateProjectionMatrix();
}

function animate() {


    update();

    requestAnimationFrame(animate, renderer.domElement);

    var delta = clock.getDelta();
    if (mixer !== undefined) mixer.update(delta);

    renderer.render(scene, camera);

};
const threeJSContainerFoo = $('#threeJSContainer')
threeJSContainerFoo.prependTo('body');


// $(window).scroll(function () {
//     console.log('dasnjskgdfjsjnkdfdnjk');
//     if (window.pageYOffset < window.innerHeight / 3) {
//         threeJSContainerFoo.removeClass('darker');
//     } else {
//         threeJSContainerFoo.addClass('darker');
//     }
// });




let colorTheme;


let placeTemp;
new fullpage('#fullpage', {
    onLeave: function (origin, destination, direction) {
        // var leavingSection = this;

        console.log(destination.item.getAttribute('data-color'));
        console.log(destination.item);
        console.log(destination.item.getAttribute('data-place'));

        colorTheme = destination.item.getAttribute('data-color');
        $(".threeJS__container").css("background", colorTheme);


        let colorTo = new THREE.Color(colorTheme);
        if (colorTheme != '#ffffff00') {
            gsap.to(lightD.color, {
                r: colorTo.r,
                g: colorTo.g,
                b: colorTo.b,
                duration: 0.5
            });
        } else {
            colorTo = new THREE.Color('#111319');
            gsap.to(lightD.color, {
                r: colorTo.r,
                g: colorTo.g,
                b: colorTo.b,
                duration: 0.5
            });
        }

        placeTemp = destination.item.getAttribute('data-place');
        // console.log(placeTemp);
        switch (placeTemp) {
            case 'begin':
                onBeginning();
                break;
            case 'itemshop':
                gotoItemshop();
                break;
            case 'bar':
                gotoGameBar();
                break;
            case 'yourClass':
                gotoYourClass();
                break;
            case 'library':
                gotoLibrary();
                break;
            case 'mine':
                gotoMine();
                break;
            default:
                console.log('gotoDefault');
                gotoDefault();
        }

        if (origin.item.getAttribute('data-place') == 'mine' && direction == 'down') {
            console.log('dasdasd');
            gotoMine();
        }
        // if (origin.item.getAttribute('data-place') == begin) {
        //     onBeginning();
        // }
    }
});


// window.onload = function () {
//     const sections = document.querySelectorAll('section .projects__title');
//     const callbackFunction = function (entries) {
//         // console.log(entries[0]);


//         if (entries[0].isIntersecting && entries[0].intersectionRatio > 0) {

//             colorTheme = entries[0].target.dataset.color;
//             $(".threeJS__container").css("background", colorTheme);


//             let colorTo = new THREE.Color(colorTheme);
//             if (colorTheme != '#ffffff00') {
//                 gsap.to(lightD.color, {
//                     r: colorTo.r,
//                     g: colorTo.g,
//                     b: colorTo.b,
//                     duration: 0.5
//                 });
//             } else {
//                 colorTo = new THREE.Color('#111319');
//                 gsap.to(lightD.color, {
//                     r: colorTo.r,
//                     g: colorTo.g,
//                     b: colorTo.b,
//                     duration: 0.5
//                 });
//             }

//             // $(".threeJS__container").css("background", entries[0].target.dataset.color);
//             placeTemp = entries[0].target.dataset.place;
//             // console.log(placeTemp);
//             switch (placeTemp) {
//                 case 'begin':
//                     onBeginning();
//                     break;
//                 case 'itemshop':
//                     gotoItemshop();
//                     break;
//                 case 'bar':
//                     gotoGameBar();
//                     break;
//                 case 'yourClass':
//                     gotoYourClass();
//                     break;
//                 case 'library':
//                     gotoLibrary();
//                     break;
//                 case 'mine':
//                     gotoMine();
//                     break;
//                 default:
//                     console.log('gotoDefault');
//                     gotoDefault();
//             }
//         }


//         // observer.unobserve(entries.target);

//     };

//     // const config = {
//     //     root: null,
//     //     rootMargin: '0px',
//     //     threshold: 0.2
//     // };

//     const observer = new IntersectionObserver(callbackFunction);

//     // observer.observe(sections);

//     sections.forEach(section => observer.observe(section));
// };



fullpage_api.setAllowScrolling(true);