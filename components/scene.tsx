"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

/** A single lightweight WebGL scene; never owns page scrolling or text animation. */
export default function Scene({ paused }: { paused: boolean }) {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = host.current;
    if (!element) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
    } catch {
      return;
    } // The CSS orbit remains visible when WebGL is unavailable.
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    element.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.z = 7.6;
    const geometry = new THREE.TorusKnotGeometry(1.3, 0.37, 180, 20, 2, 3);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xff641f,
      metalness: 0.62,
      roughness: 0.25,
      clearcoat: 1,
    });
    const knot = new THREE.Mesh(geometry, material);
    knot.rotation.set(0.4, -0.35, -0.25);
    scene.add(knot);
    const wireGeometry = new THREE.TorusKnotGeometry(1.31, 0.39, 90, 12, 2, 3);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0xffb682,
      wireframe: true,
      transparent: true,
      opacity: 0.13,
    });
    const wire = new THREE.Mesh(wireGeometry, wireMaterial);
    knot.add(wire);
    scene.add(new THREE.AmbientLight(0xffd6c4, 1.5));
    const key = new THREE.DirectionalLight(0xfff2df, 5);
    key.position.set(3, 4, 5);
    scene.add(key);
    const rim = new THREE.PointLight(0xff4b0a, 65);
    rim.position.set(-4, -1, 2);
    scene.add(rim);
    const fill = new THREE.DirectionalLight(0xffffff, 2);
    fill.position.set(-3, 2, -2);
    scene.add(fill);
    const pointer = { x: 0, y: 0 };
    let visible = true,
      frame = 0,
      last = 0,
      elapsed = 0;
    const draw = () => renderer.render(scene, camera);
    const resize = () => {
      const { width, height } = element.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      draw();
    };
    const onPointer = (event: PointerEvent) => {
      const r = element.getBoundingClientRect();
      pointer.x = (event.clientX - r.left) / r.width - 0.5;
      pointer.y = (event.clientY - r.top) / r.height - 0.5;
    };
    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);
      if (!visible || document.hidden) {
        last = now;
        return;
      }
      if (now - last < 32) return;
      elapsed += Math.min((now - last) / 1000, 0.05);
      last = now;
      knot.rotation.y = elapsed * 0.18 + pointer.x * 0.3;
      knot.rotation.x =
        0.4 + Math.sin(elapsed * 0.35) * 0.12 + pointer.y * 0.15;
      knot.position.y = Math.sin(elapsed * 0.55) * 0.09;
      draw();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(element);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(element);
    element.addEventListener("pointermove", onPointer);
    resize();
    if (!paused) frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
      element.removeEventListener("pointermove", onPointer);
      geometry.dispose();
      wireGeometry.dispose();
      material.dispose();
      wireMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [paused]);
  return (
    <div className="scene" ref={host} aria-hidden="true">
      <div className="scene-fallback" />
    </div>
  );
}
