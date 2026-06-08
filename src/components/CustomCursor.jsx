import { useEffect, useRef } from "react";
import "../styles/cursor.css";

// All elements that should trigger the "hovering" cursor state.
// Uses closest() on every mousemove — no listener rebinding needed.
const INTERACTIVE =
  'a, button, [role="button"], input, select, textarea, label, ' +
  '.cert-card, .logo, .tab-btn, .filter-btn, .magnetic-wrap, ' +
  '.themeToggle, .scroll-down, .menuIcon, .project-card';

const CustomCursor = () => {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Start off-screen so there's no flash at (0, 0) before first move
    let mouseX = -300, mouseY = -300;
    let ringX  = -300, ringY  = -300;
    let animId;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Dot snaps instantly — feels precise
      dot.style.left = mouseX + "px";
      dot.style.top  = mouseY + "px";

      // Reveal on first real move
      dot.classList.remove("is-hidden");
      ring.classList.remove("is-hidden");

      // Check interactivity once per move — covers dynamically added elements
      const over = !!e.target.closest(INTERACTIVE);
      dot.classList.toggle("is-hovering",  over);
      ring.classList.toggle("is-hovering", over);
    };

    // Hide when mouse leaves the browser window
    const onLeave = () => {
      dot.classList.add("is-hidden");
      ring.classList.add("is-hidden");
    };

    // Click compression feedback
    const onDown = () => {
      dot.classList.add("is-clicking");
      ring.classList.add("is-clicking");
    };
    const onUp = () => {
      dot.classList.remove("is-clicking");
      ring.classList.remove("is-clicking");
    };

    // rAF loop: ring follows mouse with lag (feels organic)
    const loop = () => {
      ringX += (mouseX - ringX) * 0.11;
      ringY += (mouseY - ringY) * 0.11;
      ring.style.left = ringX + "px";
      ring.style.top  = ringY + "px";
      animId = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove",  onMove,  { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mousedown",  onDown);
    document.addEventListener("mouseup",    onUp);
    animId = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove",  onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mousedown",  onDown);
      document.removeEventListener("mouseup",    onUp);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot  is-hidden" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring is-hidden" aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
