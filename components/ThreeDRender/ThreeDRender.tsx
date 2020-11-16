import React, {useEffect, useRef} from "react"
import styled from "styled-components"
import ReactDOM from "react-dom";
import * as THREE from "three";

const ThreeDRender = () => {
    const mount = useRef(null);

    useEffect(() =>{
        let GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader;
        let OrbitControls = require('three/examples/jsm/controls/OrbitControls').OrbitControls;
        let scene = new THREE.Scene();

        let camera = new THREE.PerspectiveCamera( 13, window.innerWidth/window.innerHeight, 0.1, 1000 );
        let renderer = new THREE.WebGLRenderer();
        renderer.setSize( mount.current.offsetWidth , mount.current.offsetHeight );
        mount.current.appendChild( renderer.domElement );
        let geometry = new THREE.BoxGeometry( 1, 1, 1 );
        let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        let cube = new THREE.Mesh( geometry, material );
        //scene.add( cube );
        camera.position.z = 5;
        const controls = new OrbitControls( camera, renderer.domElement );
        let sneaker;
//controls.update() must be called after any manual changes to the camera's transform
        camera.position.set( 0, 20, 100 );
        controls.update();
        let animate = function () {

            if (sneaker) sneaker.rotation.y += 0.01;
            requestAnimationFrame( animate );
            // required if controls.enableDamping or controls.autoRotate are set to true
            controls.update();
            renderer.render( scene, camera );
        };
        animate();

        //LIGHTS
        var lights = [];
        lights[0] = new THREE.PointLight(0x304ffe, 1, 0);
        lights[1] = new THREE.PointLight(0xffffff, 1, 0);
        lights[2] = new THREE.PointLight(0xffffff, 1, 0);
        lights[0].position.set(0, 200, 0);
        lights[1].position.set(100, 200, 100);
        lights[2].position.set(-100, -200, -100);
        scene.add(lights[0]);
        scene.add(lights[1]);
        scene.add(lights[2]);
        let loader = new GLTFLoader();

        loader.load("./renders/nike.glb", gltf => {

                // ADD MODEL TO THE SCENE
                sneaker = gltf.scene;
                scene.add(gltf.scene);
                renderer.render(scene, camera);
            }, undefined,

            error => {
            });

    },[]);

    return (
        <div style={{width:"100%",height: "100%",maxWidth: "100vw"}} ref={mount} />
    )
};

/*
ThreeDRender.propTypes = {
};
*/
export default ThreeDRender