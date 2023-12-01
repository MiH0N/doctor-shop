export default class StyleGenerator {
  private usedColors: { [key: string]: { color: string } } = {};

  private generateHSLColor(minLightness: number, maxLightness: number): string {
    const h = 210; // آبی
    const s = Math.floor(Math.random() * 50) + 50; // از 50 تا 100
    const l =
      Math.floor(Math.random() * (maxLightness - minLightness + 1)) +
      minLightness; // از minLightness تا maxLightness
    return `hsl(${h}, ${s}%, ${l}%)`;
  }

  private hexToHSL(hex: string): { h: number; s: number; l: number } {
    const rgb = this.hexToRgb(hex);
    const r = rgb.r / 255,
      g = rgb.g / 255,
      b = rgb.b / 255;
    const max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    const delta = max - min;

    let h = 0,
      s = 0,
      l = (max + min) / 2;

    if (delta !== 0) {
      s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
      switch (max) {
        case r:
          h = (g - b) / delta + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / delta + 2;
          break;
        case b:
          h = (r - g) / delta + 4;
          break;
      }
      h *= 60;
    }

    return { h: Math.round(h), s: Math.round(s * 100), l: Math.round(l * 100) };
  }

  private hexToRgb(hex: string): { r: number; g: number; b: number } {
    const bigint = parseInt(hex.slice(1), 16);
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255,
    };
  }

  private rgbToHex(rgb: { r: number; g: number; b: number }): string {
    return `#${((1 << 24) | (rgb.r << 16) | (rgb.g << 8) | rgb.b)
      .toString(16)
      .slice(1)}`;
  }

  public generateStyle(
    category: string,
    minLightness: number,
    maxLightness: number,
  ): { color: string } {
    if (!(category in this.usedColors)) {
      const color = this.generateHSLColor(minLightness, maxLightness);

      this.usedColors[category] = {
        color: color,
      };
    }

    return {
      color: this.usedColors[category].color,
    };
  }
}
