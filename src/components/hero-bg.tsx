import styles from "./hero-bg.module.css";

/**
 * Background photo for the homepage hero.
 *
 * Uses CSS image-set() for progressive format support:
 *   AVIF → WebP → JPG (browser picks the best it supports).
 *
 * Falls back to the parent section's CSS gradient + grain when
 * none of the image files can load.
 */
export function HeroBg() {
  return <div aria-hidden="true" className={styles.heroBg} />;
}
