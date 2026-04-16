"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 25000;
const shapeNames = ['Dodeca', 'Heart', 'Diamond', 'Helix'];

// Helper: sample points on geometry surface
function sampleGeometry(geometry: THREE.BufferGeometry, count: number) {
    const pos = new Float32Array(count * 3);
    const posAttr = geometry.attributes.position;
    const indexAttr = geometry.index;

    // Get triangle data
    const triangles = [];
    const triCount = indexAttr ? indexAttr.count / 3 : posAttr.count / 3;
    const vA = new THREE.Vector3(), vB = new THREE.Vector3(), vC = new THREE.Vector3();
    const areas = [];
    let totalArea = 0;

    for (let i = 0; i < triCount; i++) {
        let a, b, c;
        if (indexAttr) {
            a = indexAttr.getX(i * 3);
            b = indexAttr.getX(i * 3 + 1);
            c = indexAttr.getX(i * 3 + 2);
        } else {
            a = i * 3; b = i * 3 + 1; c = i * 3 + 2;
        }
        vA.fromBufferAttribute(posAttr, a);
        vB.fromBufferAttribute(posAttr, b);
        vC.fromBufferAttribute(posAttr, c);
        const area = new THREE.Triangle(vA.clone(), vB.clone(), vC.clone()).getArea();
        areas.push(area);
        totalArea += area;
        triangles.push([vA.clone(), vB.clone(), vC.clone()]);
    }

    // Weighted random sampling
    for (let i = 0; i < count; i++) {
        let r = Math.random() * totalArea;
        let triIdx = 0;
        for (let j = 0; j < areas.length; j++) {
            r -= areas[j];
            if (r <= 0) { triIdx = j; break; }
        }
        const tri = triangles[triIdx];
        if (!tri) continue;
        let u = Math.random(), v = Math.random();
        if (u + v > 1) { u = 1 - u; v = 1 - v; }
        const w = 1 - u - v;
        pos[i * 3]     = tri[0].x * w + tri[1].x * u + tri[2].x * v;
        pos[i * 3 + 1] = tri[0].y * w + tri[1].y * u + tri[2].y * v;
        pos[i * 3 + 2] = tri[0].z * w + tri[1].z * u + tri[2].z * v;
    }
    return pos;
}

// Shape 0: Dodecahedron
function makeSkull() {
    const geo = new THREE.DodecahedronGeometry(1.2, 1);
    const nonIdx = geo.toNonIndexed();
    const idxGeo = new THREE.BufferGeometry();
    idxGeo.setAttribute('position', nonIdx.attributes.position);
    const idxArr = [];
    for (let i = 0; i < nonIdx.attributes.position.count; i++) idxArr.push(i);
    idxGeo.setIndex(idxArr);
    return sampleGeometry(idxGeo, PARTICLE_COUNT);
}

// Shape 1: Heart
function makeHeart() {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const t = Math.random() * Math.PI * 2;
        const s = Math.random() * Math.PI;
        const scatter = 0.03;
        // Heart shape modifier
        const heartX = 16 * Math.pow(Math.sin(t), 3) / 16;
        const heartY = (13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t)) / 16;
        const depth = Math.sin(s) * 0.5;

        pos[i * 3]     = heartX + (Math.random() - 0.5) * scatter;
        pos[i * 3 + 1] = heartY + (Math.random() - 0.5) * scatter;
        pos[i * 3 + 2] = depth + (Math.random() - 0.5) * scatter;
    }
    return pos;
}

// Shape 2: Diamond / Gem
function makeDiamond() {
    const yOffset = 0.35;
    const topGeo = new THREE.ConeGeometry(1.4, 0.9, 8);
    topGeo.translate(0, 0.45 + yOffset, 0);
    const bottomGeo = new THREE.ConeGeometry(1.4, 2.0, 8);
    bottomGeo.rotateX(Math.PI);
    bottomGeo.translate(0, -1.0 + yOffset, 0);

    const topNonIdx = topGeo.toNonIndexed();
    const botNonIdx = bottomGeo.toNonIndexed();
    const topIdxGeo = new THREE.BufferGeometry();
    topIdxGeo.setAttribute('position', topNonIdx.attributes.position);
    const topIdx = []; for (let i = 0; i < topNonIdx.attributes.position.count; i++) topIdx.push(i);
    topIdxGeo.setIndex(topIdx);

    const botIdxGeo = new THREE.BufferGeometry();
    botIdxGeo.setAttribute('position', botNonIdx.attributes.position);
    const botIdx = []; for (let i = 0; i < botNonIdx.attributes.position.count; i++) botIdx.push(i);
    botIdxGeo.setIndex(botIdx);

    const topCount = Math.floor(PARTICLE_COUNT * 0.4);
    const botCount = PARTICLE_COUNT - topCount;
    const topPts = sampleGeometry(topIdxGeo, topCount);
    const botPts = sampleGeometry(botIdxGeo, botCount);

    const pos = new Float32Array(PARTICLE_COUNT * 3);
    pos.set(topPts);
    for (let i = 0; i < botCount * 3; i++) {
        pos[topCount * 3 + i] = botPts[i];
    }
    return pos;
}

// Shape 3: Double Helix
function makeHelix() {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const helixCount = PARTICLE_COUNT / 2;
    for (let h = 0; h < 2; h++) {
        const offset = h * Math.PI;
        for (let i = 0; i < helixCount; i++) {
            const idx = (h * helixCount + i) * 3;
            const t = (i / helixCount) * Math.PI * 6 - Math.PI * 3;
            const r = 0.6;
            pos[idx]     = r * Math.cos(t + offset) + (Math.random() - 0.5) * 0.04;
            pos[idx + 1] = t * 0.25 + (Math.random() - 0.5) * 0.04;
            pos[idx + 2] = r * Math.sin(t + offset) + (Math.random() - 0.5) * 0.04;

            // Add connecting rungs every so often
            if (i % 200 < 10 && h === 0) {
                const rungT = Math.floor(i / 200) * 200;
                const rungAngle = (rungT / helixCount) * Math.PI * 6 - Math.PI * 3;
                const frac = (i % 200) / 10;
                pos[idx]     = r * Math.cos(rungAngle) * (1 - frac) + r * Math.cos(rungAngle + Math.PI) * frac;
                pos[idx + 2] = r * Math.sin(rungAngle) * (1 - frac) + r * Math.sin(rungAngle + Math.PI) * frac;
            }
        }
    }
    return pos;
}

function easeInOutCubic(t: number) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

const vertexShader = `
attribute float aSize;
attribute float aRandom;
varying vec3 vColor;
varying float vAlpha;
uniform float uTime;
uniform float uPixelRatio;
uniform float uMorph;

uniform vec3 uMouse3D;
uniform float uMouseActive;

void main() {
    vColor = color;
    vec3 pos = position;

    // Subtle breathing
    float breath = sin(uTime * 0.5 + aRandom * 6.28) * 0.02;
    pos += normalize(pos) * breath;

    // During morph, particles scatter outward slightly
    float scatter = sin(uMorph * 3.14159) * 0.3;
    pos += normalize(pos + vec3(0.001)) * scatter * aRandom;

    // Mouse influence — swirl + push with depth-agnostic distance
    vec3 toParticle = pos - uMouse3D;
    // Use only XY distance so depth doesn't reduce influence
    float xyDist = length(toParticle.xy);
    float fullDist = length(toParticle);
    float mouseRadius = 1.4;
    float influence = 1.0 - smoothstep(0.0, mouseRadius, xyDist);
    influence = influence * influence * uMouseActive;

    if (influence > 0.001) {
        // Push away from mouse
        vec3 pushDir = fullDist > 0.001 ? normalize(toParticle) : vec3(0.0, 1.0, 0.0);
        float pushStrength = influence * 0.3;
        pos += pushDir * pushStrength;

        // Swirl around mouse (rotate in XY plane around mouse position)
        float swirlSpeed = uTime * 2.0 + aRandom * 6.28;
        float swirlStrength = influence * 0.25;
        vec2 radial = pos.xy - uMouse3D.xy;
        float angle = swirlStrength * (1.0 + sin(swirlSpeed) * 0.3);
        float cosA = cos(angle);
        float sinA = sin(angle);
        vec2 rotated = vec2(
            radial.x * cosA - radial.y * sinA,
            radial.x * sinA + radial.y * cosA
        );
        pos.xy = uMouse3D.xy + rotated;

        // Z-axis gentle orbit for depth feel
        pos.z += sin(swirlSpeed * 0.7 + aRandom * 3.14) * influence * 0.15;

        // Organic jitter
        float jitter = sin(uTime * 4.0 + aRandom * 18.0) * 0.02 * influence;
        pos += pushDir * jitter;
    }

    vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = aSize * uPixelRatio * 500.0 / -mvPos.z;
    gl_PointSize = max(gl_PointSize, 1.5);
    gl_Position = projectionMatrix * mvPos;

    vAlpha = 0.85 + 0.15 * (1.0 - smoothstep(0.0, 10.0, -mvPos.z));
}
`;

const fragmentShader = `
varying vec3 vColor;
varying float vAlpha;

void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    if (d > 0.5) discard;
    float alpha = smoothstep(0.5, 0.0, d) * vAlpha;
    vec3 brightColor = vColor * 2.4 + 0.12;
    gl_FragColor = vec4(brightColor, alpha);
}
`;

export function MorphingParticles({ morphInterval = 5 }) {
    const pointsRef = useRef<THREE.Points>(null);
    const materialRef = useRef<THREE.ShaderMaterial>(null);

    const [shapes, colors, sizes, randoms] = useMemo(() => {
        const shapesArr = [makeSkull(), makeHeart(), makeDiamond(), makeHelix()];

        const colorsArr = new Float32Array(PARTICLE_COUNT * 3);
        const sizesArr = new Float32Array(PARTICLE_COUNT);
        const randomsArr = new Float32Array(PARTICLE_COUNT);

        const c1 = new THREE.Color(0x7dd3fc);
        const c2 = new THREE.Color(0x38bdf8);
        const c3 = new THREE.Color(0xa78bfa);

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const ratio = i / PARTICLE_COUNT;
            const color = ratio < 0.5
                ? c1.clone().lerp(c2, ratio * 2)
                : c2.clone().lerp(c3, (ratio - 0.5) * 2);
            colorsArr[i * 3] = color.r;
            colorsArr[i * 3 + 1] = color.g;
            colorsArr[i * 3 + 2] = color.b;
            sizesArr[i] = 0.012 + Math.random() * 0.02;
            randomsArr[i] = Math.random();
        }
        return [shapesArr, colorsArr, sizesArr, randomsArr];
    }, []);

    // Morph state
    const morphState = useRef({
        currentShape: 0,
        targetShape: 0,
        morphProgress: 0,
        isMorphing: false,
        morphDuration: 2.5,
        morphStartTime: 0,
        autoMorphInterval: null as any,
        mouseActiveSmooth: 0,
    });

    const startMorph = (targetIdx: number, clock: THREE.Clock) => {
        if (morphState.current.isMorphing || targetIdx === morphState.current.currentShape) return;
        morphState.current.targetShape = targetIdx;
        morphState.current.isMorphing = true;
        morphState.current.morphStartTime = clock.getElapsedTime();
    };

    useEffect(() => {
        // We will just let useFrame handle auto morph logic since we have access to the clock there
    }, []);

    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uPixelRatio: { value: typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1 },
        uMorph: { value: 0 },
        uMouse3D: { value: new THREE.Vector3(0, 0, 0) },
        uMouseActive: { value: 0 },
    }), []);

    const _invMatrix = useMemo(() => new THREE.Matrix4(), []);
    const _localMouse = useMemo(() => new THREE.Vector3(), []);
    const _intersectPoint = useMemo(() => new THREE.Vector3(), []);
    const raycaster = useMemo(() => new THREE.Raycaster(), []);
    const mousePlane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), []);

    // track mouse on screen
    const [mouseOnScreen, setMouseOnScreen] = useState(false);
    useEffect(() => {
        const onMove = () => setMouseOnScreen(true);
        const onLeave = () => setMouseOnScreen(false);
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseleave', onLeave);
        return () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseleave', onLeave);
        };
    }, []);

    useFrame((state) => {
        if (!pointsRef.current || !materialRef.current) return;

        const elapsed = state.clock.getElapsedTime();
        const mat = materialRef.current;
        mat.uniforms.uTime.value = elapsed;

        // Auto morphing
        if (!morphState.current.isMorphing && elapsed - morphState.current.morphStartTime > morphInterval) {
            startMorph((morphState.current.currentShape + 1) % shapes.length, state.clock);
        }

        // Mouse
        const mouseTarget = mouseOnScreen ? 1 : 0;
        morphState.current.mouseActiveSmooth += (mouseTarget - morphState.current.mouseActiveSmooth) * 0.08;
        mat.uniforms.uMouseActive.value = morphState.current.mouseActiveSmooth;

        if (mouseOnScreen) {
             raycaster.setFromCamera(state.pointer, state.camera);
             raycaster.ray.intersectPlane(mousePlane, _intersectPoint);
             _invMatrix.copy(pointsRef.current.matrixWorld).invert();
             _localMouse.copy(_intersectPoint).applyMatrix4(_invMatrix);
             mat.uniforms.uMouse3D.value.copy(_localMouse);
        }

        // Morphing logic
        if (morphState.current.isMorphing) {
            const rawProgress = Math.min((elapsed - morphState.current.morphStartTime) / morphState.current.morphDuration, 1);
            morphState.current.morphProgress = easeInOutCubic(rawProgress);
            mat.uniforms.uMorph.value = morphState.current.morphProgress;

            const srcPositions = shapes[morphState.current.currentShape];
            const tgtPositions = shapes[morphState.current.targetShape];
            const geometry = pointsRef.current.geometry;
            const posArray = geometry.attributes.position.array as Float32Array;
            const len = PARTICLE_COUNT * 3;

            for (let i = 0; i < len; i++) {
                posArray[i] = srcPositions[i] + (tgtPositions[i] - srcPositions[i]) * morphState.current.morphProgress;
            }
            geometry.attributes.position.needsUpdate = true;

            if (rawProgress >= 1) {
                morphState.current.isMorphing = false;
                morphState.current.currentShape = morphState.current.targetShape;
                mat.uniforms.uMorph.value = 0;
                morphState.current.morphStartTime = elapsed; // Reset start time for next interval
            }
        }

        // Gentle float
        pointsRef.current.rotation.y = elapsed * 0.05;
        pointsRef.current.position.y = Math.sin(elapsed * 0.3) * 0.05;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={PARTICLE_COUNT}
                    array={shapes[0].slice()}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={PARTICLE_COUNT}
                    array={colors}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-aSize"
                    count={PARTICLE_COUNT}
                    array={sizes}
                    itemSize={1}
                />
                <bufferAttribute
                    attach="attributes-aRandom"
                    count={PARTICLE_COUNT}
                    array={randoms}
                    itemSize={1}
                />
            </bufferGeometry>
            <shaderMaterial
                ref={materialRef}
                uniforms={uniforms}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                transparent={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                vertexColors={true}
            />
        </points>
    );
}

export { HeroObject, BackgroundParticles } from './SceneComponentsFallback';
