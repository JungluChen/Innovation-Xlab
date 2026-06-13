import * as THREE from 'three';

export const DOC_TYPES = [
  ['INV', 'Invoice'], ['PO', 'Purchase Order'], ['GRN', 'Goods Receipt Note'],
  ['WO', 'Work Order'], ['BOM', 'Bill of Materials'], ['CN', 'Credit Note'],
  ['SO', 'Sales Order'], ['QC', 'Quality Check'], ['ASN', 'Advance Ship Notice'],
  ['RMA', 'Return Authorization'], ['LOT', 'Lot Record'], ['COST', 'Cost Sheet'],
  ['MFG', 'Manufacturing Record'], ['PACK', 'Packing List'], ['TAX', 'Tax Document'],
  ['SHIP', 'Shipping Manifest'], ['AP', 'AP Ledger'],
];

function rr(g, x, y, w, h, r) {
  g.beginPath();
  g.moveTo(x + r, y);
  g.arcTo(x + w, y, x + w, y + h, r);
  g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r);
  g.arcTo(x, y, x + w, y, r);
  g.closePath();
}

/** Bake one canvas texture per industrial document type. */
export function makeCardTextures() {
  return DOC_TYPES.map(([code, name], i) => {
    const c = document.createElement('canvas');
    c.width = 256; c.height = 320;
    const g = c.getContext('2d');

    g.fillStyle = '#ffffff';
    g.fillRect(0, 0, 256, 320);
    g.fillStyle = 'rgba(98,188,241,0.13)';
    g.fillRect(0, 0, 256, 62);

    g.fillStyle = '#013d7c';
    g.font = '800 42px "Segoe UI", Arial, sans-serif';
    g.fillText(code, 20, 108);
    g.fillStyle = 'rgba(24,40,60,0.55)';
    g.font = '600 16px "Segoe UI", Arial, sans-serif';
    g.fillText(name, 20, 138);

    g.fillStyle = '#ffc000';
    rr(g, 192, 18, 46, 26, 7); g.fill();
    g.fillStyle = '#013d7c';
    g.font = '800 12px Arial, sans-serif';
    g.fillText('DOC', 203, 36);

    for (let r = 0; r < 4; r++) {
      g.fillStyle = 'rgba(24,40,60,0.12)';
      rr(g, 20, 168 + r * 26, 120 + ((i * 37 + r * 53) % 96), 10, 5); g.fill();
    }

    g.fillStyle = 'rgba(98,188,241,0.22)';
    g.fillRect(0, 288, 256, 32);
    g.fillStyle = '#2e8fd0';
    g.font = '700 13px Consolas, monospace';
    g.fillText(`FB-2025-${1000 + i * 73}`, 20, 309);

    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    return tex;
  });
}
