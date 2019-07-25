export function registerMapInstance(newMap) {
  thatMap = newMap
}

let thatMap = null;
const size = 110;

export const pulsingDot = {
  width: size,
  height: size,
  data: new Uint8Array(size * size * 4),
  onAdd: function() {
    let canvas = document.createElement('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    this.context = canvas.getContext('2d');
  },
  render: function() {
    let duration = 1000;
    let t = (performance.now() % duration) / duration;
    let radius = size / 2 * 0.3;
    let outerRadius = size / 2 * 0.7 * t + radius;
    let context = this.context;
    context.clearRect(0, 0, this.width, this.height);
    context.beginPath();
    context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
    context.fillStyle = 'rgba(74, 35, 90,' + (1 - t) + ')';
    context.fill();
    context.beginPath();
    context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
    context.fillStyle = 'rgba(74, 35, 90, 1)';
    context.strokeStyle = 'white';
    context.lineWidth = 2 + 4 * (1 - t);
    context.fill();
    context.stroke();
    this.data = context.getImageData(0, 0, this.width, this.height).data;
    thatMap.triggerRepaint();
    return true;
  }
};
