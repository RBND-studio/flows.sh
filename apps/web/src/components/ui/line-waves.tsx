"use client";

import { css, cx } from "@flows/styled-system/css";
import { useTheme } from "next-themes";
import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { SimplexNoise } from "three/addons/math/SimplexNoise.js";

type XYZ = { x: number; y: number; z: number };

interface WavesProps {
  // Camera settings
  cameraPosition?: XYZ;
  cameraTarget?: XYZ; // Added camera lookAt target
  cameraFov?: number;

  // Plane settings
  planeWidth?: number;
  planeHeight?: number;

  // Line settings
  lineCountWidth?: number;
  lineCountHeight?: number;

  // Noise settings
  noiseStrength?: number;
  noiseSpeed?: number;

  // Colors
  themeColors?: {
    light: string | number;
    dark: string | number;
  };

  // Container props
  className?: string;
}

export const Waves: React.FC<WavesProps> = ({
  // Default values for all props
  cameraPosition = { x: 4, y: 2, z: 8 },
  cameraTarget = { x: 0, y: 0, z: 0 },
  cameraFov = 30,
  planeWidth = 6,
  planeHeight = 2,
  lineCountWidth = 150,
  lineCountHeight = 40,
  noiseStrength = 0.5,
  noiseSpeed = 15000,
  themeColors = { light: "#c2c7ce", dark: "#4d535d" },
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme: theme } = useTheme();
  const [visible, setVisible] = useState(false);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const geometryRef = useRef<THREE.PlaneGeometry | null>(null);
  const horizontalLinesGeometryRef = useRef<THREE.BufferGeometry | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  // Get the current color based on theme
  const currentColor = useMemo(
    () => (theme === "dark" ? themeColors.dark : themeColors.light),
    [theme, themeColors.dark, themeColors.light],
  );

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(([e]) => {
      setVisible(e.intersectionRatio > 0);
    });
    observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    // Store a reference to the current container
    const containerEl = containerRef.current;

    // Set up scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    // Set background to null for transparency
    scene.background = null;

    // Set up camera
    const camera = new THREE.PerspectiveCamera(
      cameraFov,
      containerEl.clientWidth / containerEl.clientHeight,
      0.1,
      1000,
    );
    cameraRef.current = camera;
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);

    camera.lookAt(new THREE.Vector3(cameraTarget.x, cameraTarget.y, cameraTarget.z));

    // Set up renderer - ensure alpha is true for transparency
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current = renderer;
    renderer.setSize(containerEl.clientWidth, containerEl.clientHeight);
    // Make sure we're using the alpha channel
    renderer.setClearColor(0x000000, 0);
    containerEl.appendChild(renderer.domElement);

    // Create plane geometry
    const geometry = new THREE.PlaneGeometry(
      planeWidth,
      planeHeight,
      lineCountWidth,
      lineCountHeight,
    );
    geometryRef.current = geometry;
    const pos = geometry.getAttribute("position");

    // Create horizontal lines only
    const horizontalLinesGeometry = new THREE.BufferGeometry();
    horizontalLinesGeometryRef.current = horizontalLinesGeometry;
    const horizontalLinesVertices: number[] = [];

    for (let i = 0; i < geometry.parameters.heightSegments + 1; i++) {
      for (let j = 0; j < geometry.parameters.widthSegments; j++) {
        const index1 = i * (geometry.parameters.widthSegments + 1) + j;
        const index2 = index1 + 1;

        horizontalLinesVertices.push(
          pos.getX(index1),
          pos.getY(index1),
          pos.getZ(index1),
          pos.getX(index2),
          pos.getY(index2),
          pos.getZ(index2),
        );
      }
    }

    horizontalLinesGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(horizontalLinesVertices, 3),
    );

    let waves: THREE.LineSegments;
    try {
      // Explicitly create material with THREE.Color
      const material = new THREE.LineBasicMaterial({
        color: new THREE.Color(currentColor),
      });

      waves = new THREE.LineSegments(horizontalLinesGeometry, material);
      waves.rotation.x = -Math.PI / 2;
      scene.add(waves);
    } catch (e) {
      // Fallback to default color
      const material = new THREE.LineBasicMaterial({ color: 0x000000 });

      waves = new THREE.LineSegments(horizontalLinesGeometry, material);
      waves.rotation.x = -Math.PI / 2;
      scene.add(waves);
    }

    // Handle window resizing
    const handleResize = (): void => {
      const width = containerEl.clientWidth;
      const height = containerEl.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to ensure proper sizing
    handleResize();

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);

      // Ensure we're removing the canvas from the correct container
      if (containerEl.contains(renderer.domElement)) {
        containerEl.removeChild(renderer.domElement);
      }

      // Properly dispose of Three.js resources
      geometry.dispose();
      horizontalLinesGeometry.dispose();

      if (Array.isArray(waves.material)) {
        waves.material.forEach((mat) => mat.dispose());
      } else {
        waves.material.dispose();
      }

      renderer.forceContextLoss();
      renderer.dispose();
      renderer.domElement.remove();

      while (scene.children.length > 0) {
        const object = scene.children[0];
        scene.remove(object);
      }
    };
  }, [
    cameraFov,
    cameraPosition.x,
    cameraPosition.y,
    cameraPosition.z,
    cameraTarget.x,
    cameraTarget.y,
    cameraTarget.z,
    currentColor,
    lineCountHeight,
    lineCountWidth,
    noiseSpeed,
    noiseStrength,
    planeHeight,
    planeWidth,
  ]);

  useEffect(() => {
    if (!visible) return;

    const renderer = rendererRef.current;
    const geometry = geometryRef.current;
    const scene = sceneRef.current;
    const camera = cameraRef.current;
    const horizontalLinesGeometry = horizontalLinesGeometryRef.current;

    if (!renderer || !geometry || !scene || !camera || !horizontalLinesGeometry) return;

    // Animation loop
    let animationFrameId: number;
    const simplex = new SimplexNoise();
    const pos = geometry.getAttribute("position");

    const animationLoop = (time: number): void => {
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        const z = noiseStrength * simplex.noise3d(x / 2, y / 2, time / noiseSpeed);

        pos.setZ(i, z);
      }
      pos.needsUpdate = true;

      // Update horizontal lines geometry
      const updatedVertices: number[] = [];
      for (let i = 0; i < geometry.parameters.heightSegments + 1; i++) {
        for (let j = 0; j < geometry.parameters.widthSegments; j++) {
          const index1 = i * (geometry.parameters.widthSegments + 1) + j;
          const index2 = index1 + 1;

          updatedVertices.push(
            pos.getX(index1),
            pos.getY(index1),
            pos.getZ(index1),
            pos.getX(index2),
            pos.getY(index2),
            pos.getZ(index2),
          );
        }
      }
      horizontalLinesGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(updatedVertices, 3),
      );

      renderer.render(scene, camera);

      animationFrameId = requestAnimationFrame(animationLoop);
    };

    animationFrameId = requestAnimationFrame(animationLoop);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [noiseSpeed, noiseStrength, visible]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cx(
        css({
          width: "100%",
          height: "100%",
          background: "pane.bg.secondary",
          "& > canvas": {
            background: "transparent",
          },
        }),
        className,
      )}
    />
  );
};
